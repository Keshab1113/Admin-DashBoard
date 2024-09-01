import React from "react";

const ParamForm = ({ param, index, handleParamChange, availableTypes }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    handleParamChange(index, { ...param, [name]: value });
  };

  const validUnits = {
    Temperature: "C",
    Pressure: "bar",
    "Flow Rate": "m3/hr",
    Gas: "Kohm",
  };

  return (
    <div className="flex justify-between items-center space-x-2">
      <div className="w-1/3">
              <select
                  name="n"
                  id={`n-${index}`}
                  value={param.n || ""}
                  onChange={(e) => {
                      const selectedParam = e.target.value;
                      const unit = validUnits[selectedParam] || "";
                      handleChange(e);
                      handleParamChange(index, { ...param, n: selectedParam, u: unit });
                  }}
          className="w-full px-3 py-2 border rounded-lg dark:bg-slate-800 text-black dark:text-white"
              >
                  <option value="">Select a parameter</option>
                  {availableTypes.map((type) => (
                      <option key={type} value={type}>
                          {type}
                      </option>
                  ))}
              </select>

      </div>

      <div className="w-1/3">
        <input
          type="text"
          name="u"
          id={`u-${index}`}
          value={param.u || ""}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg bg-gray-100 dark:bg-slate-800 text-black dark:text-white"
          placeholder="Unit"
          disabled
        />
      </div>

      <div className="w-1/3">
        <input
          type="number"
          name="v"
          id={`v-${index}`}
          value={param.v || 0}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg dark:bg-slate-800 text-black dark:text-white"
          placeholder="Value"
        />
      </div>
    </div>
  );
};

export default ParamForm;
