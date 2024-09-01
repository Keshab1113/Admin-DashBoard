import React, { useState } from "react";
import ParamForm from "./ParamForm";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';

const AddSystem = ({ handleClose }) => {
  
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-GB'); // Outputs: 24/08/2024
  const formattedTime = currentDate.toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  const dateTimeString = `${formattedDate} ${formattedTime}`;
  
  const [formValues, setFormValues] = useState({
    siteName: "",
    machineName: "",
    lst: dateTimeString,
    isOnline: "",
    lat: 0,
    lon: 0,
    params: [{ n: "", u: "", v:0 }],
  });
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: name === "lat" || name === "lon" ? parseFloat(value) : value,
    });
  };

  const handleParamChange = (index, updatedParam) => {
    const updatedParams = [...formValues.params];
    updatedParams[index] = {
      ...updatedParam,
      v: Number(updatedParam.v),
    };
    setFormValues({
      ...formValues,
      params: updatedParams,
    });
  };

  const handleAddParam = () => {
    if (formValues.params.length >= 4) {
      toast.error("You cannot add more than 4 parameters.");
      return;
    }
    setFormValues({
      ...formValues,
      params: [...formValues.params, { n: "", u: "", v: 0 }],
    });
  };

  const usedTypes = formValues.params.map((param) => param.n);
  const availableTypes = ["Temperature", "Pressure", "Flow Rate", "Gas"].filter(
    (type) => !usedTypes.includes(type)
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    const paramsWithUnits = formValues.params.map((param) => ({
      ...param,
      u: param.u || "Default Unit",
    }));
    const dataToSubmit = {
      ...formValues,
      params: paramsWithUnits,
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/home/addSystem`,
        dataToSubmit
      );
      setFormValues({
        siteName: "",
        machineName: "",
        lst: dateTimeString,
        isOnline: "",
        lat: 0,
        lon: 0,
        params: [{ n: "", u: "", v: 0 }],
      });
      handleClose();
      toast.success("System added Successfully");

    } catch (error) {
      console.error(
        "Error submitting form:",
        error.response ? error.response.data : error.message
      );
    }
  };


  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 rounded-md bg-white dark:bg-gray-800 shadow-md space-y-4"
    >
      <div className="grid grid-cols-2 gap-4">
        <div className="flex justify-between items-center">
          <label htmlFor="machineName" className="font-semibold">
            System Name:
          </label>
          <input
            type="text"
            name="machineName"
            id="machineName"
            value={formValues.machineName}
            onChange={handleChange}
            className="w-1/2 rounded-full px-4 py-2 outline-none border border-gray-300 dark:bg-gray-700 dark:border-gray-600"
            placeholder="Enter System Name"
            required
          />
        </div>
        <div className="flex justify-between items-center">
          <label htmlFor="siteName" className="font-semibold">
            Site Name:
          </label>
          <input
            type="text"
            name="siteName"
            id="siteName"
            value={formValues.siteName}
            onChange={handleChange}
            className="w-1/2 rounded-full px-4 py-2 outline-none border border-gray-300 dark:bg-gray-700 dark:border-gray-600"
            placeholder="Enter Site Name"
            required
          />
        </div>
        <div className="flex justify-between items-center">
          <label htmlFor="isOnline" className="font-semibold">
            Is Online:
          </label>
          <select
            name="isOnline"
            id="isOnline"
            value={formValues.isOnline}
            onChange={handleChange}
            className="w-1/2 rounded-full px-4 py-2 outline-none border border-gray-300 dark:bg-gray-700 dark:border-gray-600"
          >
            <option value="">Select status</option>
            <option value="true">True</option>
            <option value="false">False</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>
        <div className="flex justify-between items-center">
          <label htmlFor="lst" className="font-semibold">
            Installed at:
          </label>
          <input
            type="text"
            name="lst"
            id="lst"
            value={formValues.lst}
            onChange={handleChange}
            className="w-1/2 rounded-full px-4 py-2 outline-none border border-gray-300 dark:bg-gray-700 dark:border-gray-600"
            required
          />
        </div>
        <div className="flex justify-between items-center">
          <label htmlFor="lat" className="font-semibold">
            Latitude:
          </label>
          <input
            type="number"
            name="lat"
            id="lat"
            value={formValues.lat}
            onChange={handleChange}
            className="w-1/2 rounded-full px-4 py-2 outline-none border border-gray-300 dark:bg-gray-700 dark:border-gray-600"
            placeholder="Enter Latitude"
            required
          />
        </div>
        <div className="flex justify-between items-center">
          <label htmlFor="lon" className="font-semibold">
            Longitude:
          </label>
          <input
            type="number"
            name="lon"
            id="lon"
            value={formValues.lon}
            onChange={handleChange}
            className="w-1/2 rounded-full px-4 py-2 outline-none border border-gray-300 dark:bg-gray-700 dark:border-gray-600"
            placeholder="Enter Longitude"
            required
          />
        </div>
      </div>
      <div className="border-t border-gray-300 mt-4 pt-4">
        <h3 className="font-semibold mb-2">Parameters</h3>
        <div className="grid grid-cols-3 gap-4 mb-2 font-semibold">
          <span>Parameter Name</span>
          <span>Parameter Unit</span>
          <span>Parameter Value</span>
        </div>
        <div className="space-y-2">
          {formValues.params.map((param, index) => (
            <ParamForm
              key={index}
              index={index}
              param={param}
              handleParamChange={handleParamChange}
              availableTypes={availableTypes}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-end space-x-4 mt-4">
        <button
          type="button"
          onClick={handleAddParam}
          className=" bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-200"
        >
          Add Parameter
        </button>
        
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-200"
        >
          Add System
        </button>
      </div>
    </form>
  );
};

export default AddSystem;
