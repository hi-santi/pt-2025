const express = require("express");
const auth = require("../middleware");

const router = express.Router();
router.use(auth);

const {
    getVehicles,
    getVehicleById,
    createVehicle,
    updateVehicle,
    deleteVehicle
} = require("../controllers/vehicles.controller");

router.get('/', getVehicles);
router.get('/:id', getVehicleById);
router.post('/', createVehicle);
router.put('/:id', updateVehicle);
router.delete('/:id', deleteVehicle);

module.exports = router;