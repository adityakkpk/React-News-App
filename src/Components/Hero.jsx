import { useState } from "react";
import Pagination from "./Pagination";
import fetchNews from "../Hooks/FetchNews";
function Hero() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [news, setNews] = useState([]);

  const categories = [
    "Select",
    "Business",
    "Technology",
    "Entertainment",
    "Sports",
    "Health",
    "Science",
  ];

  const handleCategoryChange = async (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    const res = await fetchNews(category)
    setNews(res);
  };

  return (
    <>
      <div className="flex justify-end m-2 p-2">
        <div className="flex gap-2 flex-wrap rounded-lg bg-neutral-600 p-3">
          <label className="p-1">Select News Category : </label>
          <select
            className="w-40 bg-slate-400 rounded py-1 px-2 focus:outline-none cursor-pointer text-black"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            {categories.map((category) => (
              <option key={category} value={category} className="text-black">
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
      <Pagination news={news} />
    </>
  );
}

export default Hero;
