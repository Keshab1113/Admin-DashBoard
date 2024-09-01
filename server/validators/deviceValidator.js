const { z } = require('zod');

const paramSchema = z.object({
    n: z.enum(["Temperature", "Pressure", "Flow Rate", "Gas"], {
        required_error: "Param name is required and must be one of the allowed values",
    }),
    u: z.string().nonempty("Param unit is required"),
    v: z.number().nonnegative("Param value must be a positive number"),
});

const deviceSchema = z.object({
    siteName: z.string().nonempty("Site Name is required"),
    machineName: z.string().nonempty("Machine Name is required"),
    lst: z.string().optional().or(z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/, "lst must be a valid ISO 8601 date string")),

    isOnline: z.enum(["true", "false", "unknown"], {
        required_error: "isOnline status is required",
    }),
    lat: z.number().nonnegative("Latitude is required"),
    lon: z.number().nonnegative("Longitude is required"),
    params: z.array(paramSchema).nonempty("Params must be an array and cannot be empty"),
});

const validateDevice = (req, res, next) => {
    try {
        deviceSchema.parse(req.body);
        next();
    } catch (error) {
        res.status(400).json({ status: 'fail', errors: error.errors });
    }
};

const validateDeviceId = (req, res, next) => {
    const idSchema = z.string().uuid("Invalid device ID format");
    try {
        idSchema.parse(req.params._id);
        next();
    } catch (error) {
        res.status(400).json({ status: 'fail', errors: error.errors });
    }
};

module.exports = {
    validateDevice,
    validateDeviceId,
};
