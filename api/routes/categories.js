const router = require("express").Router();
const Category = require("../models/Category");

router.post("/", async (req, res) => {
    const newCat = new Category(req.body);
    try {
        const savedCat = await newCat.save();
        res.status(200).json(savedCat);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put("/:id", async (req, res) => {
    try {
        const updatedCat = await Category.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedCat);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        await Category.findByIdAndDelete(req.params.id);
        res.status(200).json("Category has been deleted...");
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const cat = await Category.findById(req.params.id);
        res.status(200).json(cat);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/", async (req, res) => {
    const qNew = req.query.new;
    const qCat = req.query.cat;
    try {
        let cats;
        if (qNew) {
            cats = await Category.find().sort({ createdAt: -1 }).limit(5);
        } else if (qCat) {
            cats = await Category.find({
                name: {
                    $in: [qCat],
                },
            });
        } else {
            cats = await Category.find();
        }
        res.status(200).json(cats);
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;