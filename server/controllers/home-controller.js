const Device = require('../models/data');

const getHomeData = async (req, res) => {
  try {
    const devices = await Device.find();
    res.status(200).json({devices});
  } catch (error) {
    res.status(500).json({
      message: error.message,
      success: false,
      data: []
    });
  }
};

const addSystem = async (req, res) => {
  try {
    const newSystem = await Device.create(req.body);
    res.status(201).json({
      message: "System added successfully",
      success: true,
      data: newSystem,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
      success: false,
    });
  }
};

const updateSystem = async (req, res) => {
  try {
    const updatedSystem = await Device.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({
      message: "System updated successfully",
      success: true,
      data: updatedSystem,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
      success: false,
    });
  }
};

const deleteSystem = async (req, res) => {
  try {
    // Validate that the ID is provided
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({
        message: "System ID is required",
        success: false,
      });
    }

    // Check if the system exists
    const system = await Device.findById(id);
    if (!system) {
      return res.status(404).json({
        message: "System not found",
        success: false,
      });
    }

    // Delete the system
    await Device.findByIdAndDelete(id);

    res.status(200).json({
      message: "System deleted successfully",
      success: true,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "An error occurred while deleting the system",
      success: false,
    });
  }
};


module.exports = {
  getHomeData,
  addSystem,
  updateSystem,
  deleteSystem,
};
