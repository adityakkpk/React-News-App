import { useState } from 'react'
import useFetchNews from './Hooks/useFetchNews';
import SelectCategory from './Components/SelectCategory';
import Pagination from './Components/Pagination';

function App() {

  const [selectedCategory, setSelectedCategory] = useState("Select");
  const res = useFetchNews(selectedCategory);

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
  };

  const categoryPass = selectedCategory;

  return (
    <>
      <SelectCategory value={categoryPass} onChange={handleCategoryChange} />
      <Pagination news={res} />
    </>
  )
}

export default App
