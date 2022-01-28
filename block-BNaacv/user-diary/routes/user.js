var express = require("express");

var router = express.Router();

router.get("/", (req, res) => {
  res.render("list", { list: ["john", "altcampus"] });
});

router.get("/:id", (req, res) => {
  res.render("singleUser", {
    user: { name: "john" },
  });
});

router.get("/new", (req, res) => {
  res.render("userForm");
});

router.post("/", (req, res) => {
  res.send(req.body);
});

router.delete("/:id", (req, res) => {
  res.render("list", { users: user });
});

router.put("/:id", (req, res) => {
  res.render("list", { users: user });
});

module.exports = router;
