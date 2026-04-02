import React, { useState } from "react";
import MapPicker from "./MapPicker";

const ReportPortal = () => {

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    priority: "",
    description: "",
    location: "",
    image: null,
  });

  const [location , setLocation] = useState(null);

  const handleChange = (e)=>{
    setFormData(prev=>({
      ...prev,
      [e.target.name]:e.target.value
    }));
  };

  const handleFile = (e)=>{
    const file = e.target.files?.[0] || null;

    setFormData(prev=>({
      ...prev,
      image:file
    }));
  };

  const handlePriorityChange = (priority)=>{
    setFormData(prev=>({
      ...prev,
      priority
    }));
  };

  const handleSaveDraft = ()=>{
    console.log("Draft saved",formData);
  };

  const handleSubmit = (e)=>{

    e.preventDefault();

    if(!formData.priority){
      alert("Please select priority");
      return;
    }

    if(!formData.category){
      alert("Select category");
      return;
    }

    console.log("Submitting report",formData);

  };

  return (

    <div className="min-h-screen bg-gray-100 p-10">

      <div className="max-w-7xl mx-auto grid grid-cols-3 gap-8">

        {/* LEFT */}

        <form className="col-span-2 space-y-6" onSubmit={handleSubmit}>

          {/* Header */}

          <div>

            <h3 className="text-sm font-semibold text-teal-600">
              CITIZEN ENGAGEMENT PORTAL
            </h3>

            <h1 className="text-4xl font-bold text-teal-900 mt-2">
              Report a Community Issue
            </h1>

            <p className="text-gray-600 mt-2">
              Help us build a better city.
            </p>

          </div>

          {/* Issue Details */}

          <div className="bg-white rounded-xl shadow p-6 space-y-5">

            <h2 className="font-semibold text-lg text-gray-700">

              <span className="bg-blue-900 text-white px-2 py-1 rounded-full mr-2">
                1
              </span>

              Issue Details

            </h2>

            {/* Title */}

            <div>

              <label className="text-sm text-gray-600">
                Issue Title
              </label>

              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full mt-2 border rounded-lg p-3 bg-gray-50"
                placeholder="Street light broken"
                required
              />

            </div>

            {/* Category + Priority */}

            <div className="grid grid-cols-2 gap-6">

              <div>

                <label className="text-sm text-gray-600">
                  Category
                </label>

                <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full mt-2 border rounded-lg p-3 bg-gray-50"
                required
                >

                  <option value="">
                    Select category
                  </option>

                  <option>
                    Road Damage
                  </option>

                  <option>
                    Water Supply
                  </option>

                  <option>
                    Garbage
                  </option>

                  <option>
                    Electricity
                  </option>

                  <option>
                    Drainage
                  </option>

                </select>

              </div>

              {/* Priority */}

              <div>

                <label className="text-sm text-gray-600">
                  Priority
                </label>

                <div className="flex gap-2 mt-2">

                  <button
                  type="button"
                  onClick={()=>handlePriorityChange("Low")}
                  className={`px-4 py-2 rounded transition cursor-pointer

                  ${formData.priority==="Low"
                  ? "bg-green-500 text-white shadow"
                  : "bg-gray-200 hover:bg-gray-300"}

                  `}
                  >
                    Low
                  </button>


                  <button
                  type="button"
                  onClick={()=>handlePriorityChange("Medium")}
                  className={`px-4 py-2 rounded transition cursor-pointer

                  ${formData.priority==="Medium"
                  ? "bg-yellow-500 text-white shadow"
                  : "bg-gray-200 hover:bg-gray-300"}

                  `}
                  >
                    Medium
                  </button>


                  <button
                  type="button"
                  onClick={()=>handlePriorityChange("High")}
                  className={`px-4 py-2 rounded transition cursor-pointer

                  ${formData.priority==="High"
                  ? "bg-red-500 text-white shadow"
                  : "bg-gray-200 hover:bg-gray-300"}

                  `}
                  >
                    High
                  </button>

                </div>

              </div>

            </div>

            {/* Description */}

            <div>

              <label className="text-sm text-gray-600">
                Description
              </label>

              <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className="w-full mt-2 border rounded-lg p-3 bg-gray-50"
              placeholder="Describe issue"
              required
              />

            </div>

          </div>

          {/* Location */}

          <div className="bg-white rounded-xl shadow p-6 space-y-5">

            <h2 className="font-semibold text-lg text-gray-700">

              <span className="bg-blue-900 text-white px-2 py-1 rounded-full mr-2">
                2
              </span>

              Location & Media

            </h2>

            <div className="grid grid-cols-2 gap-6">

              {/* Upload */}

              <div>

                <label className="text-sm text-gray-600">
                  Visual Evidence
                </label>

                <div className="mt-2 border-2 border-dashed rounded-lg p-6 text-center bg-gray-50">

                  {formData.image && (

                    <img
                    src={URL.createObjectURL(formData.image)}
                    className="h-20 mx-auto mb-2 rounded"
                    />

                  )}

                  <label className="cursor-pointer">

                    <p className="text-gray-500">

                      {formData.image
                      ? formData.image.name
                      : "Upload Image"}

                    </p>

                    <input
                    type="file"
                    accept="image/*"
                    onChange={handleFile}
                    className="hidden"
                    />

                  </label>

                </div>

              </div>

              {/* Map */}

              <div>

                <label className="text-sm text-gray-600">
                  Issue Location
                </label>

                <input
                type="text"
                name="location"
                value={
                  location
                  ? `${location.lat.toFixed(4)}, ${location.lng.toFixed(4)}`
                  : ""
                }
                readOnly
                className="w-full mt-2 border rounded-lg p-2 bg-gray-50"
                placeholder="Select from map"
                />

                <MapPicker

                setLocation={(coords)=>{

                  setLocation(coords);

                  setFormData(prev=>({
                    ...prev,
                    location:coords
                  }));

                }}

                />

              </div>

            </div>

            {/* Buttons */}

            <div className="flex justify-end gap-4 pt-4">

              <button
              type="button"
              onClick={handleSaveDraft}
              className="px-5 py-2 border rounded-lg hover:bg-gray-100"
              >

                Save Draft

              </button>

              <button
              type="submit"
              className="px-6 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800"
              >

                Submit Report

              </button>

            </div>

          </div>

        </form>


        {/* RIGHT PANEL */}

        <div className="space-y-6">

          <div className="bg-white rounded-xl shadow p-5">

            <h3 className="font-semibold mb-4">
              Similar Issues Nearby
            </h3>

            <div className="space-y-3">

              <div className="border rounded p-3">

                Broken Streetlight

              </div>

              <div className="border rounded p-3">

                Garbage Dumping

              </div>

            </div>

          </div>


          <div className="bg-white rounded-xl shadow p-6">

            <h2 className="text-3xl font-bold text-blue-900">
              2482
            </h2>

            <p className="text-sm text-gray-600">
              Issues resolved this month
            </p>

          </div>

        </div>

      </div>

    </div>

  );

};

export default ReportPortal;