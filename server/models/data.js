const mongoose = require("mongoose");

const paramSchema = new mongoose.Schema({
    n: {
        type: String,
        required: true,
        enum: ['Temperature', 'Pressure', 'Flow Rate', 'Gas'],
    },
    u: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                const validUnits = {
                    'Temperature': 'C',
                    'Pressure': 'bar',
                    'Flow Rate': 'm3/hr',
                    'Gas': 'Kohm'
                };
                return validUnits[this.n] === value;
            },
            message: props => `${props.value} is not a valid unit for ${props.path}`
        }
    },
    v: { type: Number, required: true },
});

const dataSchema = new mongoose.Schema({
    siteName: { type: String, required: true },
    machineName: { type: String, required: true },
    lst: { type: String, required: true},
    isOnline: {
        type: String,
        enum: ['true', 'false', 'unknown'],
        required: true
    },
    lat: { type: Number, required: true },
    lon: { type: Number, required: true },
    params: { type: [paramSchema], required: true },
});

const Data = mongoose.model("Homepagedata", dataSchema);
module.exports = Data;
