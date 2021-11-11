// middleware/users.js

const jwt = require("jsonwebtoken");

module.exports = {
  // middleware/users.js

  isLoggedIn: (req, res, next) => {
    try {
      const token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, "SECRETKEY");
      req.userData = decoded;
      next();
    } catch (err) {
      return res.status(401).send({
        msg: "Your session is not valid!",
      });
    }
  },
  isAdmin: (req, res, next) => {
    if (req.body.roles === "1") {
      return res.status(200).send({ msg: "You're an Admin!" });
      
    }
     res.status(401).send({ msg: "Not an admin!" });
     
  },
  validateRegister: (req, res, next) => {
    // username min length 3
    if (!req.body.name || req.body.name.length < 3) {
      return res.status(400).send({
        msg: "Please enter a name with min. 3 chars",
      });
    }

    /* if (!req.body.first_name || req.body.first_name.length < 3) {
        return res.status(400).send({
          msg: "Please enter a first name with min. 3 chars",
        });
      } */

    // password min 6 chars
    if (!req.body.password || req.body.password.length < 6) {
      return res.status(400).send({
        msg: "Please enter a password with min. 6 chars",
      });
    }

    // password (repeat) does not match
    
    next();
  },
};
