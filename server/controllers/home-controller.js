const getSystems = async (req, res) => {
    try {

        const sys = [
            {
                deviceId: "123",
                siteName: "Pune",
                machineName: "PLC-1D",
                 lat:"22.232",
                lon:"77.5215",
                params: [
                    {
                        id: "A1",
                        n: "Temperature",
                        u: "C"
                    },
                    {
                        id: "A2",
                        n: "Pressure",
                        u: "bar"
                    },
                    {
                        id: "A3",
                        n: "Flow Rate",
                        u: "m3/hr"
                    }

                ]
            },
            {
                deviceId: "CMSDOH321654",
                siteName: "Pune",
                machineName: "Clean Room",
                 lat:"22.232",
                lon:"77.5215",
                params: [
                    {
                        id: "A1",
                        n: "Temperature",
                        u: "C"
                    },
                    {
                        id: "A2",
                        n: "Pressure",
                        u: "bar"
                    },
                    {
                        id: "A5",
                        n: "Humidity",
                        u: "Rh"
                    },
                    {
                        id: "A9",
                        n: "Gas",
                        u: "Kohm"
                    }

                ]
            },
            {
                deviceId: "1235",
                siteName: "Pune",
                machineName: "PLC-1D-56",
                 lat:"22.232",
                lon:"77.5215",
                params: [
                    {
                        id: "A1",
                        n: "Temperature",
                        u: "C"
                    },
                    {
                        id: "A2",
                        n: "Pressure",
                        u: "bar"
                    },
                    {
                        id: "A3",
                        n: "Flow Rate",
                        u: "m3/hr"
                    }

                ]
            },
            {
                deviceId: "CMSDOH322654",
                siteName: "Pune",
                machineName: "Clean Room4",
                 lat:"22.232",
                lon:"77.5215",
                params: [
                    {
                        id: "A1",
                        n: "Temperature",
                        u: "C"
                    },
                    {
                        id: "A2",
                        n: "Pressure",
                        u: "bar"
                    },
                    {
                        id: "A5",
                        n: "Humidity",
                        u: "Rh"
                    },
                    {
                        id: "A9",
                        n: "Gas",
                        u: "Kohm"
                    }

                ]
            },
            {
                deviceId: "CMSDOH322656",
                siteName: "Pune",
                machineName: "Clean Room5",
                 lat:"22.232",
                lon:"77.5215",
                params: [
                    {
                        id: "A1",
                        n: "Temperature",
                        u: "C"
                    },
                    {
                        id: "A2",
                        n: "Pressure",
                        u: "bar"
                    },
                    {
                        id: "A5",
                        n: "Humidity",
                        u: "Rh"
                    },
                    {
                        id: "A9",
                        n: "Gas",
                        u: "Kohm"
                    }

                ]
            },
        ]

        res.status(200).json({
            success: true,
            sys,
            msg: "All user systems "
        });

    } catch (error) {
        res.status(300).json({
            success: false,
            sys: [],
            msg: error
        })
        console.log(error)
    };
}


const getHomeData = async (req, res) => {
    try {


        const liveData = [
            {
                deviceId: "123",
                lst: "2024-03-07 21:56",
                data: [{ A1: Math.floor(Math.random() * 20) + 20 }, { A2: Math.floor(Math.random()*0.05) }, { A3: Math.floor(Math.random() * 5) + 6 }],
                isOnline: true
            },
            {
                deviceId: "CMSDOH321654",
                lst: "2024-03-07 20:56",
                data: [{ A1: Math.floor(Math.random() * 20) + 20 }, { A2: Math.floor(Math.random()*0.05) }, { A5: Math.floor(Math.random() * 101) }, { A9: Math.floor(Math.random() * 101) }],
                isOnline: true
            },
            {
                deviceId: "1235",
                lst: "2024-03-07 20:59",
                data: [{ A1: Math.floor(Math.random() * 20) + 35 }, { A2: Math.floor(Math.random()*0.05) }, { A3: Math.floor(Math.random() * 5) + 1 }],
                isOnline: false
            },
            {
                deviceId: "CMSDOH322654",
                lst: "2024-03-07 17:56",
                data: [{ A1: Math.floor(Math.random() * 20) + 20 }, { A2: Math.floor(Math.random()*0.05) }, { A5: Math.floor(Math.random() * 101) }, { A9: Math.floor(Math.random() * 101) }],
                isOnline: null
            },
            {
                deviceId: "CMSDOH322656",
                lst: "2024-03-07 22:06",
                data: [{ A1: Math.floor(Math.random() * 20) + 20 }, { A2: Math.floor(Math.random()*0.05) }, { A5: Math.floor(Math.random() * 101) }, { A9: Math.floor(Math.random() * 101) }],
                isOnline: true
            },

        ];

        return res.json({
            message: "Data fetched successfully",
            success: true,
            data: liveData
        })



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
        })

    } catch (error) {
        res.json({
            message: error,
            success: false,
        })
    }
}

const updateSystem = async (req, res) => {
    try {
        res.json({
            message: "System Updated successfully",
            success: true,
        })

    } catch (error) {
        res.json({
            message: error,
            success: false,
        })
    }
}

const deleteSystem = async (req, res) => {
    try {
        res.json({
            message: "System Deleted successfully",
            success: true,
        })

    } catch (error) {
        res.json({
            message: error,
            success: false,
        })
    }
}


module.exports = {
    getSystems,
    getHomeData,
    addSystem,
    updateSystem,
    deleteSystem
}
