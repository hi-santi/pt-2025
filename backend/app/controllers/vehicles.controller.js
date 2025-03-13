const Vehiculo = require('../models/vehiculo.model');

const getVehicles = async (req, res) => {
  try {
    const vehiculos = await Vehiculo.findAll();
    res.json(vehiculos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getVehicleById = async (req, res) => {
  try {
    const vehiculo = await Vehiculo.findByPk(req.params.id);
    if (vehiculo) {
      res.json(vehiculo);
    } else {
      res.status(404).json({ message: 'Vehículo no encontrado' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createVehicle = async (req, res) => {
  try {
    const { Marca, Modelo, Anio, Precio } = req.body;
    const vehiculo = await Vehiculo.create({ Marca, Modelo, Anio, Precio });
    res.status(201).json(vehiculo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateVehicle = async (req, res) => {
  try {
    const { id } = req.params;
    const { Marca, Modelo, Anio, Precio } = req.body;
    const [updated] = await Vehiculo.update(
      { Marca, Modelo, Anio, Precio },
      { where: { VehiculoID: id } }
    );
    if (updated) {
      const updatedVehiculo = await Vehiculo.findByPk(id);
      res.json(updatedVehiculo);
    } else {
      res.status(404).json({ message: 'Vehículo no encontrado' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteVehicle = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("id", id)
    const deleted = await Vehiculo.destroy({ where: { VehiculoID: id } });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Vehículo no encontrado' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getVehicles,
  getVehicleById,
  createVehicle,
  updateVehicle,
  deleteVehicle,
};