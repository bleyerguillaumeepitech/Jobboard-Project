const sql = require("../lib/db");

// constructor
const Advertisements = function (advertisements) {
  this.title = advertisements.title;
  this.description = advertisements.description;
  this.date = advertisements.date;
  this.published = advertisements.published
  this.companie_id = advertisements.companie_id
  this.contrat_type = advertisements.contrat_type
};

Advertisements.create = (newAdvertisements, result) => {
  sql.query("INSERT INTO advertisements SET ?", newAdvertisements, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created advertisements: ", { id: res.insertId, ...newAdvertisements });
    result(null, { id: res.insertId, ...newAdvertisements });
  });
};


Advertisements.findById = (advertisementsId, result) => {
  sql.query(`SELECT * FROM advertisements WHERE id = ${advertisementsId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found advertisements: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Advertisements with the id
    result({ kind: "not_found" }, null);
  });
};

Advertisements.findByIdCompanie = (companieId, result) => {
  sql.query(`SELECT * FROM advertisements INNER JOIN companies ON advertisements.companie_id = companies.id WHERE companie_id = ${companieId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found advertisements with companies: ", res);
      result(null, res);
      return;
    }

    // not found Advertisements with the id
    result({ kind: "not_found" }, null);
  });
};


Advertisements.getAll = (result, advertisements) => {
  sql.query(`SELECT advertisements.companie_id, companies.id, advertisements.title, companies.number_employes, advertisements.contrat_type, advertisements.description, companies.city,  companies.name FROM advertisements INNER JOIN companies WHERE companies.id = advertisements.companie_id`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("advertisements: ", res);
    result(null, res);
  });
};

Advertisements.updateById = (id, advertisements, result) => {
  sql.query(
    "UPDATE advertisements SET title = ?, description = ?, date = ?, published = ?, companie_id = ?, contrat_type = ? WHERE id = ?",
    [advertisements.title, advertisements.description, advertisements.date, advertisements.published, advertisements.companie_id, advertisements.contrat_type, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Advertisements with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated advertisements: ", { id: id, ...advertisements });
      result(null, { id: id, ...advertisements });
    }
  );
};

Advertisements.remove = (id, result) => {
  sql.query("DELETE FROM advertisements WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Advertisements with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted advertisements with id: ", id);
    result(null, res);
  });
};

Advertisements.removeAll = result => {
  sql.query("DELETE FROM advertisements", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} advertisements`);
    result(null, res);
  });
};

module.exports = Advertisements;