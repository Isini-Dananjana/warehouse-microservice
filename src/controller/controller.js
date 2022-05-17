const Warehouse = require("../model/model");

const addNewWarehouse = async (req, res) => {
  if (req.body) {
    try {
      let result = await Warehouse.create(req.body);
      res.status(200).json({ result });
    } catch (error) {
        res.status(500).json({ error: err.message });
    }
  }
};

const getAllwarehouses = async (req, res) => {
  await Warehouse.find()
    .then((data) => {
      res.status(200).send(data);
      console.log("Success");
    })
    .catch((err) => {
      res.status(500).send({ error: err.message });
    });
};

const getwarehouseByID = async (req, res) => {
  const id = req.params.id;
  await Warehouse.findById(id)
    .then((warehouse) => {
      res.status(200).send(warehouse);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ status: "Error with get warehouse", error: err.message });
    });
};

const updatewarehouse = async (req, res) => {
  let warehouseId = req.params.id;
  const {
    warehouseName,
    location,
    phone,
    capacity,
    availability
  
  } = req.body;

  const updatewarehouse = {
    warehouseName,
    location,
    phone,
    capacity,
    availability
  };

  const update = Warehouse.findByIdAndUpdate(warehouseId, updatewarehouse)
    .then(() => {
      res.status(200).send({ status: "item updated" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ status: "error with updating " });
    });
};

const deletewarehouse = async (req, res) => {
  let itemId = req.params.id;
  await Warehouse.findByIdAndDelete(itemId)
    .then(() => {
      res.status(200).send({ status: "item deleted" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ status: "error with deleting" });
    });
};



module.exports = {
  addNewWarehouse,
  getAllwarehouses,
  getwarehouseByID,
  updatewarehouse,
  deletewarehouse,

};
