const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.render("funcionarios/funcionarios")
})

router.get("/:id", (req, res) => {
    res.render("funcionarios/funcionario")
})

module.exports = router