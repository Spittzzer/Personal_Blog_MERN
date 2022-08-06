const router = require("express").Router();
const Category = require("../models/category");
//create category
router.post("/", async (req, res) => {
  const newCategory = new Category(req.body);
  try {
    await newCategory.save();
    res.status(200).json(newCategory);
  } catch (error) {
    res.status(500).json(error);
  }
});
//get categories
router.get("/", async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
