import { useState,useEffect } from "react";
import axios from "axios";
import "./App.css";
import Images from "./components/Images";
import Header from "./components/Header";

function App() {
  "use strict";
  const access_key = "n6kDxh3Z1Pu-7yDIqWPuWp3CwMqiqdGgzToxGaw0w6Q";
  const [Search, setSearch] = useState(["dog"]);
  const [images, setImages] = useState([]);


  // function handleClick() {
  //   const t = document.querySelector("input").value;
  //   setSearch(t);
  //   fetchAPI();
  // }


  const fetchAPI = async () => {
    const t = document.querySelector("input").value;
    const s = document.querySelector("button");
    setSearch(t);
    const response = await axios.get(
      "https://api.unsplash.com/search/photos/?client_id=" +
        access_key +
        "&query=" +
        Search
    );
    // console.log(response.data);
    const data = await response.data;
    setImages(data.results);
    // s.click();

  };
//   useEffect(() => {
    
// },Search)

  return (
    <div className="App flex justify-center items-center flex-col ">
      <Header />
      <div className="flex items-center w-3/4 mb-4">
      <label for="simple-search" class="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="simple-search"
            className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search"
            // onChange={(e) => {
            //   setSearch(e.target.value)
            //   // console.log(e.target.value)
            //   }}
            required
          />
          
        </div>
        <button
        className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5  text-center mr-2 ml-2 py-3"
        onClick={fetchAPI}
      >
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
      </div>
     
      <div>
        <div className="overflow-hidden text-gray-700 ">
          <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
            <div className="flex flex-wrap -m-1 md:-m-2">
              {images.length > 0 && <Images images={images} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
