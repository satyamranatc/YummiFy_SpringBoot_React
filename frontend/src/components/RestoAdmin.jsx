import React, { useState, useEffect } from "react";
import axios from "axios";

export default function RestoAdmin() {
  let [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    async function getRestaurants() {
      try {
        let Res = await axios.get("http://localhost:8080/api/restaurant/all");
        if (Res) {
          setAllRestaurants(Res.data);
        }
      } catch (err) {
        alert("Error in fetching Restaurants");
      }
    }
    getRestaurants();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    let Data = {
      name: e.target[0].value,
      address: e.target[1].value,
      image: e.target[2].value,
      description: e.target[3].value,
    };

    try {
      let Res = await axios.post(
        "http://localhost:8080/api/restaurant/add",
        Data
      );
      if (Res) {
        alert("Restaurant Added");
      }
    } catch (err) {
      alert("Error");
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          RestoAdmin
        </h2>

        {/* Form Section */}
        <div className="bg-white shadow-lg rounded-2xl p-6 mb-10">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter name"
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <input
                type="text"
                placeholder="Enter address"
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Image
              </label>
              <input
                type="text"
                placeholder="Enter image URL"
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <input
                type="text"
                placeholder="Enter description"
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
              />
            </div>

            <div className="col-span-2 flex justify-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* Table Section */}
        <div className="bg-white shadow-lg rounded-2xl p-6 overflow-x-auto">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="px-4 py-2 text-left">Id</th>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Address</th>
                <th className="px-4 py-2 text-left">Image</th>
                <th className="px-4 py-2 text-left">Description</th>
                <th className="px-4 py-2">Update</th>
                <th className="px-4 py-2">Delete</th>
                <th className="px-4 py-2">Manage Dishes</th>
              </tr>
            </thead>
            <tbody>
              {allRestaurants.map((resto) => (
                <tr key={resto.id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2">{resto.id}</td>
                  <td className="px-4 py-2 font-medium">{resto.name}</td>
                  <td className="px-4 py-2">{resto.address}</td>
                  <td className="px-4 py-2">
                    <img
                      src={resto.image}
                      alt={resto.name}
                      className="h-12 w-12 rounded-lg object-cover"
                    />
                  </td>
                  <td className="px-4 py-2">{resto.description}</td>
                  <td className="px-4 py-2 text-center">
                    <button className="bg-yellow-500 text-white px-3 py-1 rounded-lg hover:bg-yellow-600">
                      Update
                    </button>
                  </td>
                  <td className="px-4 py-2 text-center">
                    <button className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600">
                      Delete
                    </button>
                  </td>
                  <td className="px-4 py-2 text-center">
                    <button className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600">
                      Manage Dishes
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
