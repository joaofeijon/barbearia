const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.render("horarios/horarios")
})

router.get("/criarHorario", (req, res) => {
    res.render("horarios/criar")
})

module.exports = router