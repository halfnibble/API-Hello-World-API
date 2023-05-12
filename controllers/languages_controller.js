const express = require("express");
const Language = require("../models/language");
const seedData = require("../models/seed_data");

const router = express.Router();

// SEED
// router.get("/seed", (req, res) => {
//     Language.insertMany(seedData).then((languages) => {
//         res.json({
//             message: "Seed successful!",
//         });
//     });
// });

// INDEX
router.get("/", (req, res) => {
    Language.find().then((foundLanguages) => {
        res.json(foundLanguages);
    });
});

// DETAIL
router.get("/:name", (req, res) => {
    Language.findOne({ name: req.params.name }).then((foundLanguage) => {
        res.json(foundLanguage);
    });
});

module.exports = router;
