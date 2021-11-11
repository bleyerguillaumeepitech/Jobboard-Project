module.exports = app => {
    const advertisements = require("../controllers/advertisements.controller.js");
  
    // Create a new Advertisements
    app.post("/advertisements", advertisements.create);
  
    // Retrieve all Advertisements
    app.get("/advertisements", advertisements.findAll);
  
    // Retrieve a single Advertisements with advertisementsId
    app.get("/advertisements/:advertisementsId", advertisements.findOne);

    app.get("/advertisement/:companieId", advertisements.findByIdCompanie);

  
    // Update a Advertisements with advertisementsId
    app.put("/advertisements/:advertisementsId", advertisements.update);
  
    // Delete a Advertisements with advertisementsId
    app.delete("/advertisements/:advertisementsId", advertisements.delete);
  
    // Create a new Advertisements
    app.delete("/advertisements", advertisements.deleteAll);
  };