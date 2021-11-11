module.exports = app => {
    const compagnies = require("../controllers/compagnies.controller.js");
  
    // Create a new Compagnies
    app.post("/compagnies", compagnies.create);
  
    // Retrieve all Compagnies
    app.get("/compagnies", compagnies.findAll);
  
    // Retrieve a single Compagnies with compagniesId
    app.get("/compagnies/:compagniesId", compagnies.findOne);
  
    // Update a Compagnies with compagniesId
    app.put("/compagnies/:compagniesId", compagnies.update);
  
    // Delete a Compagnies with compagniesId
    app.delete("/compagnies/:compagniesId", compagnies.delete);
  
    // Create a new Compagnies
    app.delete("/compagnies", compagnies.deleteAll);
  };