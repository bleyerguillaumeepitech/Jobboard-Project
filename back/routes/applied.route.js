module.exports = app => {
    const applied = require("../controllers/applied.controller.js");
  
    // Create a new People
/*     app.post("/findApplied", people.create);
 */  
    // Retrieve all People

    app.get("/findApplied/:people_id", applied.findByIdPeople);

  
    
  };