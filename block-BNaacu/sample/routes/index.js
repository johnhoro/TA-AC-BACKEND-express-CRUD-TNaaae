var express = require(`express`);
var router = express.Router();

router.get(`/`, (req, res) => {
  var sports = ["cricket", "football", "volleball"];
  res.render(`index`, { sports: sports });
});

router.get(`/about`, (req, res) => {
  res.render("students", { list: ["ankit", "suraj", "prashant", "ravi"] });
});

module.exports = router;
