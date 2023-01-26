const express = require('express')
const router = express.Router()
const db = require("../services/db")

db.connectToDB((err) => {
    if (err) console.log(err) 

    router.get("/list", async (req, res) => {
        const results = await db.findDocuments()
        res.send(results)
    });

    router.post("/add", async (req, res) => {
        const results = await db.insertDocuments(req.body)
        res.send(results)
    });

router.patch("/update", (req, res) => {
    res.send()
});

router.delete("/delete", (req, res) => {
    res.send()
});

})

module.exports = router