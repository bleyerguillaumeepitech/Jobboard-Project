module.exports = app => {
    const people = require("../controllers/people.controller.js");
  
    // Create a new People
    app.post("/people", people.create);
  
    // Retrieve all People
    app.get("/people", people.findAll);
  
    // Retrieve a single People with peopleId
    app.get("/people/:peopleId", people.findOne);
  
    // Update a People with peopleId
    app.put("/people/:peopleId", people.update);
  
    // Delete a People with peopleId
    app.delete("/people/:peopleId", people.delete);
  
    // Create a new People
    app.delete("/people", people.deleteAll);
  };