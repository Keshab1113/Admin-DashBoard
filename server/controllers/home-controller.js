const getHomeData = async (req, res) => {
  try {
    const systemData = [
      {
        deviceId: "123",
        siteName: "Pune",
        machineName: "System 1",
        lst: "2024-03-07 21:56",
        isOnline: true,
        lat: "22.232",
        lon: "77.5215",
        params: [
          {
            id: "A1",
            n: "Temperature",
            u: "C",
            v: Math.floor(Math.random() * 10) + 25,
          },
          {
            id: "A2",
            n: "Pressure",
            u: "bar",
            v: Math.floor(Math.random() * 30) + 12,
          },
          {
            id: "A3",
            n: "Flow Rate",
            u: "m3/hr",
            v: Math.floor(Math.random() * 20) + 20,
          },
          {
            id: "A4",
            n: "Gas",
            u: "Kohm",
            v: Math.floor(Math.random() * 20) + 20,
          },
        ],
      },
      {
        deviceId: "124",
        siteName: "Kolkata",
        machineName: "System 2",
        lst: "2024-07-27 01:33",
        isOnline: false,
        lat: "22.232",
        lon: "77.5215",
        params: [
          {
            id: "A1",
            n: "Temperature",
            u: "C",
            v: Math.floor(Math.random() * 20) + 20,
          },
          {
            id: "A2",
            n: "Pressure",
            u: "bar",
            v: Math.floor(Math.random() * 20) + 20,
          },
          {
            id: "A3",
            n: "Flow Rate",
            u: "m3/hr",
            v: Math.floor(Math.random() * 20) + 20,
          },
          {
            id: "A4",
            n: "Gas",
            u: "Kohm",
            v: Math.floor(Math.random() * 20) + 20,
          },
        ],
      },
      {
        deviceId: "125",
        siteName: "Mumbai",
        machineName: "System 3",
        lst: "2024-01-12 22:18",
        isOnline: null,
        lat: "22.232",
        lon: "77.5215",
        params: [
          {
            id: "A1",
            n: "Temperature",
            u: "C",
            v: Math.floor(Math.random() * 20) + 20,
          },
          {
            id: "A2",
            n: "Pressure",
            u: "bar",
            v: Math.floor(Math.random() * 20) + 20,
          },
          {
            id: "A3",
            n: "Flow Rate",
            u: "m3/hr",
            v: Math.floor(Math.random() * 20) + 20,
          },
          {
            id: "A4",
            n: "Gas",
            u: "Kohm",
            v: Math.floor(Math.random() * 20) + 20,
          },
        ],
      },
      {
        deviceId: "126",
        siteName: "Goa",
        machineName: "System 4",
        lst: "2024-03-07 21:56",
        isOnline: true,
        lat: "22.232",
        lon: "77.5215",
        params: [
          {
            id: "A1",
            n: "Temperature",
            u: "C",
            v: Math.floor(Math.random() * 20) + 20,
          },
          {
            id: "A2",
            n: "Pressure",
            u: "bar",
            v: Math.floor(Math.random() * 20) + 20,
          },
          {
            id: "A3",
            n: "Flow Rate",
            u: "m3/hr",
            v: Math.floor(Math.random() * 20) + 20,
          },
          {
            id: "A4",
            n: "Gas",
            u: "Kohm",
            v: Math.floor(Math.random() * 20) + 20,
          },
        ],
      },
      {
        deviceId: "127",
        siteName: "Ahmedabad",
        machineName: "System 5",
        lst: "2024-03-07 21:56",
        isOnline: true,
        lat: "22.232",
        lon: "77.5215",
        params: [
          {
            id: "A1",
            n: "Temperature",
            u: "C",
            v: Math.floor(Math.random() * 20) + 25,
          },
          {
            id: "A2",
            n: "Pressure",
            u: "bar",
            v: Math.floor(Math.random() * 20) + 20,
          },
          {
            id: "A3",
            n: "Flow Rate",
            u: "m3/hr",
            v: Math.floor(Math.random() * 20) + 20,
          },
          {
            id: "A4",
            n: "Gas",
            u: "Kohm",
            v: Math.floor(Math.random() * 20) + 20,
          },
        ],
      },
      {
        deviceId: "128",
        siteName: "Lucknow",
        machineName: "System 6",
        lst: "2024-05-17 22:56",
        isOnline: true,
        lat: "22.232",
        lon: "77.5215",
        params: [
          {
            id: "A1",
            n: "Temperature",
            u: "C",
            v: Math.floor(Math.random() * 20) + 25,
          },
          {
            id: "A2",
            n: "Pressure",
            u: "bar",
            v: Math.floor(Math.random() * 20) + 20,
          },
          {
            id: "A3",
            n: "Flow Rate",
            u: "m3/hr",
            v: Math.floor(Math.random() * 20) + 20,
          },
          {
            id: "A4",
            n: "Gas",
            u: "Kohm",
            v: Math.floor(Math.random() * 20) + 20,
          },
        ],
      },
      {
        deviceId: "129",
        siteName: "Chennai",
        machineName: "System 7",
        lst: "2024-03-07 21:56",
        isOnline: true,
        lat: "22.232",
        lon: "77.5215",
        params: [
          {
            id: "A1",
            n: "Temperature",
            u: "C",
            v: Math.floor(Math.random() * 20) + 25,
          },
          {
            id: "A2",
            n: "Pressure",
            u: "bar",
            v: Math.floor(Math.random() * 20) + 20,
          },
          {
            id: "A3",
            n: "Flow Rate",
            u: "m3/hr",
            v: Math.floor(Math.random() * 20) + 20,
          },
          {
            id: "A4",
            n: "Gas",
            u: "Kohm",
            v: Math.floor(Math.random() * 20) + 20,
          },
        ],
      },
      {
        deviceId: "130",
        siteName: "Bengaluru",
        machineName: "System 8",
        lst: "2023-11-07 19:16",
        isOnline: false,
        lat: "22.232",
        lon: "77.5215",
        params: [
          {
            id: "A1",
            n: "Temperature",
            u: "C",
            v: Math.floor(Math.random() * 20) + 25,
          },
          {
            id: "A2",
            n: "Pressure",
            u: "bar",
            v: Math.floor(Math.random() * 20) + 20,
          },
          {
            id: "A3",
            n: "Flow Rate",
            u: "m3/hr",
            v: Math.floor(Math.random() * 20) + 20,
          },
          {
            id: "A4",
            n: "Gas",
            u: "Kohm",
            v: Math.floor(Math.random() * 20) + 20,
          },
        ],
      },
    ]
    res.status(200).json({
      success: true,
      systemData,
      msg: "All Systems Data"
    });
  } catch (error) {
    res.json({
      message: error,
      success: false,
      data: []
    })
  }
  
}

const addSystem = async (req, res) => {
  try {
    res.json({
      message: "System added successfully",
      success: true,
    });
  } catch (error) {
    res.json({
      message: error,
      success: false,
    });
  }
};

const updateSystem = async (req, res) => {
  try {
    res.json({
      message: "System Updated successfully",
      success: true,
    });
  } catch (error) {
    res.json({
      message: error,
      success: false,
    });
  }
};

const deleteSystem = async (req, res) => {
  try {
    res.json({
      message: "System Deleted successfully",
      success: true,
    });
  } catch (error) {
    res.json({
      message: error,
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
