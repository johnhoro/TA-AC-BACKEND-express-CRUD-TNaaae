var express = require(`express`);
var router = express.Router();

//students routes
router.get(`/students/new`, (req, res) => {
  //res.render(`form-page.ejs)
  res.send(`Book form`);
});

router.post(`/students/`, (req, res) => {
  //grab the data
  //save the data to database
  //save a respose
});

router.get(`/students/`, (req, res) => {
  //list all books
});

router.get(`/students/:id`, (req, res) => {
  //capture the data from database
  //send response with students details data
});

router.get(`/students/:id/edit`, (req, res) => {
  //find the student
  //render a update form with student data
});

router.put(`/students/:id`, (req, res) => {
  //find by idAndUpdate
});

router.delete(`/students/:id`, (req, res) => {
  //delete book using id
});

module.exports = router;
