const Blog = require("../models/blogs");

const blog_index = (req, res) => {
  Blog.find()
    .sort({ createAt: -1 })
    .then((blogs) => {
      res.render("index", { title: "home", blogs });
    });
};

const about_view = (req, res) => {
  res.render("about", { title: "about" });
};

const blog_create_get = (req, res) => {
  res.render("create", { title: "create blog" });
};

const blog_create_post = (req, res) => {
  const { title, body, snippet } = req.body;
  const blog = new Blog({
    title,
    snippet,
    body,
  });
  blog.save().then((result) => {
    res.redirect("/");
  });
};

const blog_details_get = (req, res) => {
  Blog.findById(req.params.id)
    .then((blog) => {
      res.render("blog", { blog, title: blog.title });
    })
    .catch((err) => {
      console.log(err);
    });
};

const blog_details_delete = (req, res) => {
  Blog.findByIdAndDelete(req.params.id).then(() =>
    res
      .json({
        redirect: "/",
      })
      .catch((err) => console.log(err))
  );
};

module.exports = {
  blog_index,
  about_view,
  blog_create_post,
  blog_create_get,
  blog_details_get,
  blog_details_delete,
};
