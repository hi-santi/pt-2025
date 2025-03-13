const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;
const vehicleRouter = require("./app/routes");
const sequelize = require("./app/models");

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Mi API")
});
app.use('/vehiculos', vehicleRouter);

sequelize.sync().then(() => {
    console.log("Base de datos conectada correctamente!")
}).catch((err) => {
    console.log("Ocurrio un error al conectar a la base de datos", err)
})

app.listen(port, () => {
    console.log("Run API")
})