var express = require(`express`);
var path = require(`path`);
var mongoose = require(`mongoose`);

var indexRouter = require(`./routes/index`);
var userRouter = require(`./routes/users`);

//connected to mongodb
mongoose.connect("mongodb://localhost/user-diary-3", (err) => {
  console.log(err ? err : "connected true");
});

//instantiating express
var app = express();

//capture form data
app.use(express.urlencoded({ extended: false }));

//setup static directory
app.use(express.static(path.join(__dirname, "public")));

//setup view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(`/`, indexRouter);
app.use(`/users`, userRouter);

//listen
app.listen(3000, () => {
  console.log(`server is listening on port 3k`);
});
