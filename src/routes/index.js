const express = require("express");
const router = express.Router();

router.get("/", (req, res)=> {

    res.send("Seja bem-vindo")
})

module.exports = router;