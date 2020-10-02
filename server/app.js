const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const routes = require("./routes/blogRoutes");
const { blog_index, about_view } = require("./controller/blogController");
// ex app

const app = express();

const db =
  "mongodb+srv://Ar271997:Ar271997@cluster0.blejq.mongodb.net/node-practice?retryWrites=true&w=majority";
// reg view engine

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });

app.set("view engine", "ejs");

// listen for middleware

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// ordianry page
app.get("/", blog_index);
app.get("/about", about_view);
// blog routes
app.use("/blogs", routes);

app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
