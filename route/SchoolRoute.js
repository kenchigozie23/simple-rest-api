const express = require("express");
const route = express.Router();
const {
  getSchool,
  deleteSchool,
  putSchool,
  postSchool,
  getSchoolId,
} = require("../controllers/SchoolController");

// Making a GET request to the server

// route.get("/", (req, res) => {
//   res.send("Hello world");
// //  throw new error("hahahah...")
// });

route.get("/", getSchool);

// Making a POST request to the server

route.post("/", postSchool);

// Making a GET request by ID to the server
route.get("/:id", getSchoolId);

// Making a PUT request to the server

route.put("/:id", putSchool);

// Making a DELETE request to the server

route.delete("/:id", deleteSchool);

module.exports = route;
