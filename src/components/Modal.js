import React, { useState } from "react";
import axios from "axios";

const Modal = ({
  showModal,
  setShowModal,
  categoryName,
  setCategoryName,
  imageUrl,
  setImageUrl,
  description,
  setDescription,
  categories,
  setCategories,
}) => {
  const [successMessage, setSuccessMessage] = useState("");
  const [message, setMessage] = useState("");

  const saveCategory = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/categories",
        {
          categoryName,
          imageUrl,
          description,
        }
      );
      console.log(response.data);
      setCategories([...categories, response.data]);
      setShowModal(false);
      setTimeout(() => {
        setMessage("Category saved successfully!");
        setTimeout(() => {
          setMessage("");
        }, 2000);
      }, 500);
    } catch (error) {
      console.error("Error saving category:", error);
      setMessage("Failed to save category.");
    }
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 z-50 ${
        showModal ? "" : "hidden"
      }`}
    >
      <div className="relative w-1/2 mx-auto mt-20 bg-white rounded-lg p-6">
        {successMessage && (
          <div className="mb-4 text-green-600">{successMessage}</div>
        )}
        <div>
          <div className="relative pl-4 pr-4 py-1">
            <div className="absolute inset-y-0 left-0 bg-[#5932ea] w-2 rounded-md" />
            <h2 className="ml-1 text-2xl text-[#3c4242]">Add Category</h2>
          </div>
          <h2 className="text-xl text-[#9da0a0] mb-4 mt-4">Product Category</h2>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="categoryName"
              className="block text-lg font-medium text-gray-600"
            >
              Category Name *
            </label>
            <input
              id="categoryName"
              type="text"
              placeholder="e.g Jeans"
              className="block w-full p-2 mt-1 border bg-[#f6f6f6] rounded-md"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="imageUrl"
              className="block text-lg font-medium text-gray-600"
            >
              Product Description *
            </label>
            <input
              id="description"
              description
              type="text"
              placeholder="Description"
              className="block w-full p-2 mt-1 border bg-[#f6f6f6] rounded-md"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="col-span-2">
            <label
              htmlFor="description"
              className="block text-lg font-medium text-gray-600"
            >
              Category Image URL*
            </label>
            <input
              id="imageUrl"
              type="text"
              placeholder="https://example.images.com"
              className="block w-1/2 p-2 mt-1 border bg-[#f6f6f6] rounded-md"
              value={imageUrl}
              setImageUrl
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-between mt-10">
          <button
            className="px-4 py-2 mr-2 bg-[#5932ea] text-white rounded-md"
            onClick={saveCategory}
          >
            Save Category
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-md"
            onClick={() => setShowModal(false)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
