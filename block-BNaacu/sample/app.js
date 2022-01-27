const exp = require("constants");
var express = require(`express`);
var mongoose = require(`mongoose`);
var path = require(`path`);

var indexRouter = require(`./routes/index`);
var studentRouter = require(`./routes/students`);

//connect to mongodb

mongoose.connect(`mongodb://localhost/sample`, (err) => {
  console.log(err ? err : `connected true`);
});

var app = express();

//middleware
app.use(express.json());

//setup view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//routing middlewares
app.use(`/`, indexRouter);
app.use(`/students`, studentRouter);

// error handler
app.use((req, res, next) => {
  res.send(`Page not found`);
});

app.use((err, req, res, next) => {
  res.send(err);
});

app.listen(3000, () => {
  console.log(`server listening on port 3k`);
});
