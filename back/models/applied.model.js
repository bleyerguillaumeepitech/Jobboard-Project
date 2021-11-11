const sql = require("../lib/db");

// constructor
const Applied = function (applied) {
  this.advertisement_id = applied.advertisement_id;
  this.people_id = applied.people_id;
  this.motivation_people = applied.motivation_people;

};



Applied.findByIdPeople = (peopleId, result) => {
  sql.query(`SELECT DISTINCT * FROM applied INNER JOIN advertisements INNER JOIN people ON advertisements.id = advertisement_id AND people.id = people_id WHERE people_id = ${peopleId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found people: ", res);
      result(null, res);
      return;
    }

    // not found People with the id
    result({ kind: "not_found" }, null);
  });
};


module.exports = Applied;