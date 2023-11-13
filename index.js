const express = require("express")
const app = express()
const PORT = 3000

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('public'));

const funcionarios = require("./funcionarios/funcionariosController")
app.use("/funcionarios", funcionarios)

const horarios = require("./horarios/horariosController")
app.use("/horarios", horarios)

app.use("/", (req, res) => {
    res.render("home")
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}/`)
})