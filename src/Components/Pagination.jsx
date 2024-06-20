import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import fetchNews from "../Hooks/FetchNews";

const Pagination = ({news}) => {
  const [generalData, setGeneralData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchNews('general');
      setGeneralData(data);
    }
    fetchData();
  },[])

  const items = news.length === 0 ? generalData : news;
  
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1); // initial page

  const paginatedItems = items.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="Relative flex flex-wrap gap-4 justify-center my-12">     
        {paginatedItems.map((item, index) => (
          <div key={index}>
            <ArticleCard data={item} />
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2 items-center my-6">
        {Array(totalPages)
          .fill(0)
          .map((_, index) => (
            <button className={`${index + 1 === currentPage ? 'text-orange-500' : ''} px-3 py-1 hover:bg-slate-700 border rounded-xl`} key={index} onClick={() => onPageChange(index + 1)}>
              {index + 1}
            </button>
          ))}
      </div>
    </div>
  );
};

export default Pagination;
