const sql = require("../lib/db");

// constructor
const People = function (people) {
  this.name = people.name;
  this.first_name = people.first_name;
  this.password = people.password;
  this.email = people.email;
  this.address = people.address;
  this.postal_code = people.postal_code;
  this.city = people.city;
  this.phone = people.phone;
  this.birth_date = people.birth_date;
  this.cv = people.cv;
  this.website = people.website;
  this.picture = people.picture;
  this.gender = people.gender;
  this.roles = people.roles
};

People.create = (newPeople, result) => {
  sql.query("INSERT INTO people SET ?", newPeople, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created people: ", { id: res.insertId, ...newPeople });
    result(null, { id: res.insertId, ...newPeople });
  });
};


People.findById = (peopleId, result) => {
  sql.query(`SELECT * FROM people WHERE id = ${peopleId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found people: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found People with the id
    result({ kind: "not_found" }, null);
  });
};


People.getAll = (result) => {
  sql.query("SELECT * FROM people", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("people: ", res);
    result(null, res);
  });
};

People.updateById = (id, people, result) => {
  sql.query(
    "UPDATE people SET name = ?, first_name = ?, password = ?, email = ?, address = ?, postal_code = ?, city = ?, phone = ?, birth_date = ?, cv = ?, website = ?, picture = ?, gender = ? WHERE id = ?",
    [people.name, people.first_name, people.password, people.email, people.address, people.postal_code, people.city, people.phone, people.birth_date, people.cv, people.website, people.picture, people.gender, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found People with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated people: ", { id: id, ...people });
      result(null, { id: id, ...people });
    }
  );
};

People.remove = (id, result) => {
  sql.query("DELETE FROM people WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found People with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted people with id: ", id);
    result(null, res);
  });
};

People.removeAll = result => {
  sql.query("DELETE FROM people", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} people`);
    result(null, res);
  });
};

module.exports = People;