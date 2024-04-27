import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductModal from "./Modal_2";

import wave from "./../resources/wave.png";
import img_1 from "./../resources/img_1.png";
import img_2 from "./../resources/img_2.png";
import img_3 from "./../resources/img_3.png";
import img_4 from "./../resources/img_4.png";
import img_5 from "./../resources/img_5.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faMagnifyingGlass,
  faArrowUp,
  faUserGroup,
  faUserCheck,
  faDisplay,
  faCirclePlus,
} from "@fortawesome/free-solid-svg-icons";

function Products() {
  const [showModal, setShowModal] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("/api/products");
        setProducts(response.data);
      } catch (err) {
        setError(err);
      }
    }

    fetchData();
  }, []);
  const addProduct = async () => {
    if (!categoryName || !imageUrl || !description) {
      setError("All fields are required");
      return;
    }

    try {
      const response = await axios.post("/api/products", {
        name: categoryName,
        imageUrl,
        description,
        country: "Unknown",
        category: "Default",
        tags: [],
      });

      setProducts([...products, response.data]);
      setShowModal(false);
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <div>
      <div className="flex gap-x-4 items-center">
        <h3 class="text-3xl font-medium text-gray-700">Hello Evano</h3>
        <img
          src={wave}
          className="cursor-pointer duration-500 w-10 h-10 object-contain"
        />
      </div>
      <div class="mt-4">
        <div class="flex flex-wrap bg-[#ffffff] divide-x p-6 rounded-lg">
          <div class="w-full px-1 sm:w-1/2 xl:w-1/5">
            <div class="flex items-center px-1 py-6 rounded-md">
              <div class="p-3 bg-[#dbffec]  rounded-full">
                <FontAwesomeIcon
                  icon={faCirclePlus}
                  className="text-[#00ac4f] w-8 h-8 cursor-pointer hover:text-[#df0404]"
                  onClick={() => setShowModal(true)}
                />
              </div>
              <div class="mx-5">
                <div class="text-[#b5b7c0] font-bold">Add Products</div>
              </div>
            </div>
          </div>
          <div class="w-full px-6 sm:w-1/2 xl:w-1/4">
            <div class="flex items-center px-5 py-6 rounded-md">
              <div class="p-3 bg-[#dbffec] rounded-full">
                <FontAwesomeIcon
                  icon={faUserGroup}
                  className="text-[#00ac4f] w-10 h-10"
                />
              </div>

              <div class="mx-5">
                <div class="text-[#b5b7c0]">Products</div>
                <h4 class="text-2xl font-bold text-gray-700">5423</h4>
                <div className="flex gap-1">
                  <div className="flex gap-1">
                    <FontAwesomeIcon
                      icon={faArrowUp}
                      className="text-[#00ac4f] mt-1"
                    />
                    <h5 className="text-[#00ac4f] font-bold">16%</h5>
                  </div>
                  <div class="text-[#b5b7c0]">this month</div>
                </div>
              </div>
            </div>
          </div>

          <div class="w-full px-6 mt-6 sm:w-1/2 xl:w-1/4 sm:mt-0">
            <div class="flex items-center px-5 py-6 rounded-md">
              <div class="p-3 bg-[#dbffec] rounded-full">
                <FontAwesomeIcon
                  icon={faUserCheck}
                  className="text-[#00ac4f] w-10 h-10"
                />
              </div>

              <div class="mx-5">
                <div class="text-[#b5b7c0]">Sale Per Category</div>
                <h4 class="text-2xl font-bold text-gray-700">1893</h4>
                <div className="flex gap-1">
                  <div className="flex gap-1">
                    <FontAwesomeIcon
                      icon={faArrowUp}
                      className="text-[#d0004b] mt-1 rotate-180"
                    />
                    <h5 className="text-[#d0004b] font-bold">1%</h5>
                  </div>
                  <div class="text-[#b5b7c0]">this month</div>
                </div>
              </div>
            </div>
          </div>

          <div class="w-full px-6 mt-6 sm:w-1/2 xl:w-1/4 xl:mt-0">
            <div class="flex items-center px-5 py-6 rounded-md">
              <div class="p-3 bg-[#dbffec] rounded-full">
                <FontAwesomeIcon
                  icon={faDisplay}
                  className="text-[#00ac4f] w-10 h-10"
                />
              </div>

              <div class="mx-5">
                <div class="text-[#b5b7c0]">Products Reviews</div>
                <h4 class="text-2xl font-bold text-gray-700">189</h4>
                <div className="flex">
                  <div class="z-0 bg-[#fff] rounded-full">
                    <img
                      src={img_1}
                      className="ml-2 cursor-pointer duration-500 object-contain rounded-full"
                    />
                  </div>
                  <div class="z-10 bg-[#fff] rounded-full">
                    <img
                      src={img_2}
                      className="ml-2 cursor-pointer duration-500 object-contain rounded-full"
                    />
                  </div>
                  <div class="z-20 bg-[#fff] rounded-full">
                    <img
                      src={img_3}
                      className="ml-2 cursor-pointer duration-500 object-contain rounded-full"
                    />
                  </div>
                  <div class="z-30 bg-[#fff] rounded-full">
                    <img
                      src={img_4}
                      className="ml-2 cursor-pointer duration-500 object-contain rounded-full"
                    />
                  </div>
                  <div class="z-40 bg-[#fff] rounded-full">
                    <img
                      src={img_5}
                      className="ml-2 cursor-pointer duration-500 object-contain rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="overflow-x-auto bg-white rounded-lg mt-8">
        <div class="relative m-[2px] mb-3 float-left hidden sm:block p-4">
          <div class="block items-center rounded-lg bg-[#ffffff]">
            <h2 className="text-2xl font-bold text-[#000000] p-2">Products</h2>
            <label class="text-sm font-normal text-[#33c7a5] p-2">
              Active Members
            </label>
          </div>
        </div>
        <div class="relative m-[2px] mb-3 float-right hidden sm:block p-6">
          <label for="inputFilter" class="sr-only">
            Sort by
          </label>
          <div class="flex items-center rounded-lg bg-[#f3f6fd]">
            <label class="text-sm text-[#7e7e7e] p-2">Sort by :</label>
            <select
              id="inputFilter"
              className="block w-28 rounded-lg bg-[#f3f6fd] p-2 text-sm"
            >
              <option value="1" selected>
                Newest
              </option>
              <option value="2">Oldest</option>
              <option value="3">Yesterday</option>
              <option value="4">Last 7 days</option>
              <option value="5">Last 30 days</option>
            </select>
          </div>
        </div>

        <div class="relative m-[2px] mb-3 mr-5 float-right p-6">
          <label for="inputSearch" class="sr-only">
            Search
          </label>
          <input
            id="inputSearch"
            type="text"
            placeholder="Search"
            class="block w-52 rounded-lg border py-2 pl-10 pr-4 text-sm"
          />
          <span class="cursor-pointer absolute left-8 top-1/2 -translate-y-1/2 transform">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="text-[#404b52]"
            />
          </span>
        </div>

        <table class="min-w-full text-left text-sm whitespace-nowrap">
          <thead class="tracking-wider border-b-2 text-[#b5b7c0]">
            <tr>
              <th scope="col" class="px-6 py-4">
                Product Name
              </th>
              <th scope="col" class="px-6 py-4">
                Description
              </th>
              <th scope="col" class="px-6 py-4">
                Category
              </th>
              <th scope="col" class="px-6 py-4">
                Image
              </th>
              <th scope="col" class="px-6 py-4">
                Country
              </th>
              <th scope="col" class="px-6 py-4">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {products.map((product, index) => (
              <tr key={index} className="border-b dark:border-neutral-600">
                <th scope="row" className="px-6 py-4">
                  {product.name}
                </th>
                <td className="px-6 py-4">{product.description}</td>
                <td className="px-6 py-4">{product.category}</td>
                <td className="px-6 py-4">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-16 h-16"
                  />
                </td>
                <td className="px-6 py-4">{product.country}</td>
                <td className="px-6 py-4">
                  <div
                    className={`font-bold text-center border-2 rounded-lg p-2 ${
                      product.status === "Active"
                        ? "bg-[#ffc5c5] border-[#df0404] text-[#df0404]"
                        : "bg-[#a6e7d8] border-[#008767] text-[#008767]"
                    }`}
                  >
                    Active
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <nav
          class="mt-5 flex items-center justify-between text-sm mt-4 ml-2 mb-4 p-4"
          aria-label="Page navigation example"
        >
          <p className="text-[#b5b7c0] font-normal font-sans text-md">
            Showing data 1 to 8 of 256k entries
          </p>

          <ul class="list-style-none flex gap-2">
            <li>
              <a
                class="relative block rounded bg-[#f5f5f5] px-3 py-1.5"
                href="#!"
              >
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  className="text-[#404b52]"
                />
              </a>
            </li>
            <li>
              <a
                class="relative block rounded bg-[#f5f5f5] hover:bg-[#5932ea] hover:text-white px-3 py-1.5 text-sm text-[#404b52]"
                href="#!"
              >
                1
              </a>
            </li>
            <li aria-current="page">
              <a
                class="relative block rounded bg-[#5932ea] px-3 py-1.5 text-sm font-medium text-white"
                href="#!"
              >
                2
              </a>
            </li>
            <li>
              <a
                class="relative block rounded bg-[#f5f5f5] hover:bg-[#5932ea] hover:text-white px-3 py-1.5 text-sm text-[#404b52]"
                href="#!"
              >
                3
              </a>
            </li>
            <li>
              <a
                class="relative block rounded bg-[#f5f5f5] hover:bg-[#5932ea] hover:text-white px-3 py-1.5 text-sm text-[#404b52]"
                href="#!"
              >
                4
              </a>
            </li>
            <li>
              <a
                class="relative block rounded px-3 py-1.5 text-sm text-[#404b52]"
                href="#!"
              >
                ...
              </a>
            </li>
            <li>
              <a
                class="relative block rounded bg-[#f5f5f5] hover:bg-[#5932ea] hover:text-white px-3 py-1.5 text-sm text-[#404b52]"
                href="#!"
              >
                40
              </a>
            </li>
            <li>
              <a
                class="relative block rounded bg-[#f5f5f5] px-3 py-1.5"
                href="#!"
              >
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="text-[#404b52]"
                />
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <ProductModal
        showModal={showModal}
        setShowModal={setShowModal}
        categoryName={categoryName}
        setCategoryName={setCategoryName}
        imageUrl={imageUrl}
        setImageUrl={setImageUrl}
        description={description}
        setDescription={setDescription}
        addProduct={addProduct}
      />
    </div>
  );
}

export default Products;
