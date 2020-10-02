const express = require("express");
const {
  blog_create_post,
  blog_create_get,
  blog_details_get,
  blog_details_delete,
} = require("../controller/blogController");
const Blog = require("../models/blogs");

// routes
const router = express.Router();
router.post("/", blog_create_post);

router.get("/create", blog_create_get);

router.get(`/:id`, blog_details_get);

router.delete("/:id", blog_details_delete);

module.exports = router;
