import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const ProductModal = ({
  showModal,
  setShowModal,
  categoryName,
  setCategoryName,
  imageUrl,
  setImageUrl,
  description,
  setDescription,
  addProduct,
}) => {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productImageUrl, setProductImageUrl] = useState("");
  const [productCountry, setProductCountry] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState("");
  const [error, setError] = useState(null);

  const saveProduct = async () => {
    try {
      await addProduct();
    } catch (error) {
      console.error("Error saving product:", error);
      setError(error.message);
    }
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 z-50 ${
        showModal ? "" : "hidden"
      }`}
    >
      <div className="relative w-1/2 mx-auto mt-20 bg-white rounded-lg p-6">
        <div>
          <div className="relative pl-4 pr-4 py-1">
            <div className="absolute inset-y-0 left-0 bg-[#5932ea] w-2 rounded-md" />
            <h2 className="ml-1 text-2xl text-[#3c4242]">Create Product</h2>
          </div>
          <h2 className="text-xl text-[#9da0a0] mb-4 mt-4">Product Details</h2>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="productName"
              className="block text-lg font-medium text-gray-600"
            >
              Product Name *
            </label>
            <input
              id="productName"
              type="text"
              placeholder="e.g Jeans"
              className="block w-full p-2 mt-1 border bg-[#f6f6f6] rounded-md"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="productDescription"
              className="block text-lg font-medium text-gray-600"
            >
              Product Description *
            </label>
            <input
              id="productDescription"
              type="text"
              placeholder="Description"
              className="block w-full p-2 mt-1 border bg-[#f6f6f6] rounded-md"
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
            />
          </div>

          <div className="col-span-2">
            <label
              htmlFor="productImageUrl"
              className="block text-lg font-medium text-gray-600"
            >
              Product Image URL*
            </label>
            <input
              id="productImageUrl"
              type="text"
              placeholder="https://example.images.com"
              className="block w-1/2 p-2 mt-1 border bg-[#f6f6f6] rounded-md"
              value={productImageUrl}
              onChange={(e) => setProductImageUrl(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="productCountry"
              className="block text-lg font-medium text-gray-600"
            >
              Product Country *
            </label>
            <input
              id="productCountry"
              type="text"
              placeholder="e.g Cameroon"
              className="block w-full p-2 mt-1 border bg-[#f6f6f6] rounded-md"
              value={productCountry}
              onChange={(e) => setProductCountry(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="category"
              className="block text-lg font-medium text-gray-600"
            >
              Category *
            </label>
            <select
              id="category"
              className="block w-full p-2 mt-1 border bg-[#f6f6f6] text-gray-600 rounded-md"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="" disabled>
                Select Category
              </option>
              <option value="1">Men</option>
              <option value="2">Women</option>
              <option value="3">Childrens</option>
              <option value="4">Other</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="tags"
              className="block text-lg font-medium text-gray-600"
            >
              Tags
            </label>
            <input
              id="tags"
              type="text"
              placeholder="Product Tag"
              className="block w-full p-2 mt-1 border bg-[#f6f6f6] rounded-md"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            />
          </div>
        </div>

        <div className="flex justify-between mt-10">
          <button
            className="px-4 py-2 mr-2 bg-[#5932ea] text-white rounded-md"
            onClick={saveProduct}
          >
            Save Product
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

ProductModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
  categoryName: PropTypes.string.isRequired,
  setCategoryName: PropTypes.func.isRequired,
  imageUrl: PropTypes.string.isRequired,
  setImageUrl: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
  setDescription: PropTypes.func.isRequired,
  addProduct: PropTypes.func.isRequired,
};

export default ProductModal;
