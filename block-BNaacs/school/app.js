var express = require(`express`);
var mongoose = require(`mongoose`);
var path = require(`path`);

//connect to mongodb

mongoose.connect("mongodb://loaclhost/school", (err) => {
  console.log(err ? err : "connected true");
});

var app = express();

//middlerware
app.use(express.json());

app.use((req, res, next) => {
  res.locals.message = "Hello world";
  next();
});

//setup view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//routes
app.get(`/`, (req, res) => {
  var sports = ["cricket", "football", "volleball"];
  res.render(`index`, { sports: sports });
});

//error handler middleware
app.use((req, res, next) => {
  res.send(`page is not found`);
});

//listener
app.listen(2000, () => {
  console.log(`server is listening on port 2k`);
});
