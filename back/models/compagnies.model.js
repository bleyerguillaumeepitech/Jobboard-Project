const sql = require("../lib/db");

// constructor
const Compagnies = function (compagnies) {
  this.name = compagnies.name;
  this.address = compagnies.address;
  this.activities = compagnies.activities;
  this.postal_code = compagnies.postal_code;
  this.city = compagnies.city;
  this.siret = compagnies.siret;
  this.password = compagnies.password;
  this.number_employes = compagnies.number_employes;
  this.website = compagnies.website;
  this.phone = compagnies.phone;
  this.email = compagnies.email;
  this.contact_name = compagnies.contact_name;
};

Compagnies.create = (newCompagnies, result) => {
  sql.query("INSERT INTO companies SET ?", newCompagnies, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created companies: ", { id: res.insertId, ...newCompagnies });
    result(null, { id: res.insertId, ...newCompagnies });
  });
};


Compagnies.findById = (compagniesId, result) => {
  sql.query(`SELECT * FROM companies WHERE id = ${compagniesId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found companies: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Compagnies with the id
    result({ kind: "not_found" }, null);
  });
};


Compagnies.getAll = (result) => {
  sql.query("SELECT * FROM companies", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("companies: ", res);
    result(null, res);
  });
};

Compagnies.updateById = (id, compagnies, result) => {
  sql.query(
    "UPDATE companies SET name = ?, address = ?, activities = ?, postal_code = ?, city = ?, siret = ?, password = ?, number_employes = ?, website = ?, phone = ?, email = ?, contact_name = ? WHERE id = ?",
    [compagnies.name, compagnies.address, compagnies.activities, compagnies.postal_code, compagnies.city, compagnies.siret, compagnies.password, compagnies.number_employes, compagnies.website, compagnies.phone, compagnies.email, compagnies.contact_name, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Compagnies with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated companies: ", { id: id, ...compagnies });
      result(null, { id: id, ...compagnies });
    }
  );
};

Compagnies.remove = (id, result) => {
  sql.query("DELETE FROM companies WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Compagnies with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted companies with id: ", id);
    result(null, res);
  });
};

Compagnies.removeAll = result => {
  sql.query("DELETE FROM companies", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} companies`);
    result(null, res);
  });
};

module.exports = Compagnies;
