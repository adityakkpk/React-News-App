import React from "react";

const SelectCategory = ({ value, onChange }) => {
  const categories = [
    "Select",
    "Business",
    "Technology",
    "Entertainment",
    "Sports",
    "Health",
    "Science",
  ];

  return (
    <div className="flex justify-end m-2 p-2">
      <div className="flex gap-2 flex-wrap rounded-lg bg-neutral-600 p-3">
        <label className="p-1">Select News Category : </label>
        <select
          className="w-40 bg-slate-400 rounded py-1 px-2 focus:outline-none cursor-pointer text-black"
          value={value}
          onChange={(e) => onChange(e)}
        >
          {categories.map((category) => (
            <option key={category} value={category} className="text-black">
              {category}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SelectCategory;
