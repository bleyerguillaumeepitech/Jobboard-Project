// routes/router.js

const express = require("express");
const router = express.Router();

const bcrypt = require("bcryptjs");
const uuid = require("uuid");
const jwt = require("jsonwebtoken");

const db = require("../lib/db.js");
const userMiddleware = require("../middleware/users.js");

// ROUTES PEOPLE

const people = require("../controllers/people.controller.js");

// Create a new People
router.post("/people", people.create);

// Retrieve all People
router.get("/people",  people.findAll);

// Retrieve a single People with peopleId
router.get("/people/:peopleId", people.findOne);

// Update a People with peopleId
router.put("/people/:peopleId", people.update);

// Delete a People with peopleId
router.delete("/people/:peopleId", people.delete);

// Create a new People
router.delete("/people", people.deleteAll);

// ROUTES COMPAGNIES

const compagnies = require("../controllers/compagnies.controller.js");

// Create a new Compagnies
router.post("/compagnies", compagnies.create);

// Retrieve all Compagnies
router.get("/compagnies", compagnies.findAll);

// Retrieve a single Compagnies with compagniesId
router.get("/compagnies/:compagniesId", compagnies.findOne);

// Update a Compagnies with compagniesId
router.put("/compagnies/:compagniesId", compagnies.update);

// Delete a Compagnies with compagniesId
router.delete("/compagnies/:compagniesId", compagnies.delete);

// Create a new Compagnies
router.delete("/compagnies", compagnies.deleteAll);

// ROUTES ADVERTISEMENTS

const advertisements = require("../controllers/advertisements.controller.js");

// Create a new Advertisements
router.post("/advertisements", advertisements.create);

// Retrieve all Advertisements
router.get("/advertisements", advertisements.findAll);



// Retrieve a single Advertisements with advertisementsId
router.get("/advertisements/:advertisementsId", advertisements.findOne);

// Update a Advertisements with advertisementsId
router.put("/advertisements/:advertisementsId", advertisements.update);

// Delete a Advertisements with advertisementsId
router.delete("/advertisements/:advertisementsId", advertisements.delete);

// Create a new Advertisements
router.delete("/advertisements", advertisements.deleteAll);

router.post("/applied", (req, res, next) => {
  db.query(
    `INSERT INTO applied (id, advertisement_id, people_id, motivation_people) VALUES ('${uuid.v4()}', ${db.escape(
      req.body.advertisement_id
    )}, ${db.escape(req.body.people_id)}, ${db.escape(
      req.body.motivation_people
    )})`,
    (err, result) => {
      if (err) {
        throw err;
        return res.status(400).send({
          msg: err,
        });
      }
      return res.status(201).send({
        msg: "Applied successfull!",
      });
    }
  );
});



const applied = require("../controllers/applied.controller.js");

 // DASH
router.get("/advertisement/:companieId", advertisements.findByIdCompanie);

router.get("/findApplied/:people_id", applied.findByIdPeople);




// Sign-up users

router.post("/sign-up", userMiddleware.validateRegister, (req, res, next) => {
  db.query(
    
    `SELECT * FROM people WHERE LOWER(email) = LOWER(${db.escape(
      req.body.email
    )});`,
    (err, result) => {
      if (result.length) {
        return res.status(409).send({
          msg: "This email is already in use!",
        });
      } else {
        // username is available
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).send({
              msg: err,
            });
          } else {
            // has hashed pw => add to database
            db.query(
              `INSERT INTO people (name, first_name, email, password, registered) VALUES (${db.escape(
                req.body.name
              )}, ${db.escape(req.body.first_name)}, ${db.escape(
                req.body.email
              )}, ${db.escape(hash)}, now())`,
              (err, result) => {
                if (err) {
                  throw err;
                  return res.status(400).send({
                    msg: err,
                  });
                }
                return res.status(201).send({
                  msg: "Registered!",
                });
              }
            );
          }
        });
      }
    }
  );
});

// Login users

router.post("/login", (req, res, next) => {
  db.query(
    `SELECT * FROM people WHERE email = ${db.escape(req.body.email)};`,
    (err, result) => {     
      // user does not exists
      if (err) {
        /* throw err; */
        return res.status(400).send({
          msg: err,
        });
      }

      if (!result.length) {
        return res.status(401).send({
          msg: "Email or password is incorrect!",
        });
      }

      // check password
      bcrypt.compare(
        req.body.password,
        result[0]["password"],
        (bErr, bResult) => {
          // wrong password
          if (bErr) {
            throw bErr;
            return res.status(401).send({
              msg: "Username or password is incorrect!",
            });
          }

          if (bResult) {
            const token = jwt.sign(
              {
                username: result[0].name,
                userId: result[0].id,
              },
              "SECRETKEY",
              {
                expiresIn: "7d",
              }
            );

            db.query(
              `UPDATE people SET last_login = now() WHERE id = '${result[0].id}'`
            );
            return res.status(200).send({
              msg: "Logged in!",
              token,
              user: result[0],
            });
          }
          return res.status(401).send({
            msg: "Username or password is incorrect!",
          });
        }
      );
    }
  );
});

// Sign-up companies

router.post("/sign-up-comp", userMiddleware.validateRegister, (req, res, next) => {
  db.query(
    
    `SELECT * FROM companies WHERE LOWER(email) = LOWER(${db.escape(
      req.body.email
    )});`,
    (err, result) => {
      if (result.length) {
        return res.status(409).send({
          msg: "This email is already in use!",
        });
      } else {
        // username is available
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).send({
              msg: err,
            });
          } else {
            // has hashed pw => add to database
            db.query(
              `INSERT INTO companies (name, activities, address, postal_code, city, siret, password, website, phone, email, contact_name) VALUES (${db.escape(
                req.body.name
              )}, ${db.escape(req.body.activities)}, ${db.escape(req.body.address)}, ${db.escape(req.body.postal_code)}, ${db.escape(req.body.city)}, ${db.escape(req.body.siret)}, ${db.escape(hash)}, ${db.escape(req.body.website)}, ${db.escape(
                req.body.phone
              )}, ${db.escape(req.body.email)}, ${db.escape(req.body.contact_name)})`,
              (err, result) => {
                if (err) {
                  throw err;
                  return res.status(400).send({
                    msg: err,
                  });
                }
                return res.status(201).send({
                  msg: "Registered!",
                });
              }
            );
          }
        });
      }
    }
  );
});

// Login companies

router.post("/login-comp", (req, res, next) => {
  db.query(
    `SELECT * FROM companies WHERE email = ${db.escape(req.body.email)};`,
    (err, result) => {     
      // user does not exists
      if (err) {
        /* throw err; */
        return res.status(400).send({
          msg: err,
        });
      }

      if (!result.length) {
        return res.status(401).send({
          msg: "Email or password is incorrect!",
        });
      }

      // check password
      bcrypt.compare(
        req.body.password,
        result[0]["password"],
        (bErr, bResult) => {
          // wrong password
          if (bErr) {
            throw bErr;
            return res.status(401).send({
              msg: "Username or password is incorrect!",
            });
          }

          if (bResult) {
            const token = jwt.sign(
              {
                username: result[0].name,
                userId: result[0].id,
              },
              "SECRETKEY",
              {
                expiresIn: "7d",
              }
            );

            db.query(
              `UPDATE people SET last_login = now() WHERE id = '${result[0].id}'`
            );
            return res.status(200).send({
              msg: "Logged in!",
              token,
              user: result[0],
            });
          }
          return res.status(401).send({
            msg: "Username or password is incorrect!",
          });
        }
      );
    }
  );
});

router.get("/secret-route", userMiddleware.isLoggedIn, (req, res, next) => {
  console.log(req.userData);
  res.send("This is the secret content. Only logged in users can see that!");
});

router.post("/admin", userMiddleware.isAdmin, (req, res, next) => {
  console.log(req.userData);
  res.send("only admin can see that")
})


module.exports = router;
