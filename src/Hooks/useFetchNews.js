import axios from 'axios';
import { useEffect, useState } from 'react';

const useFetchNews = (category) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        if(category === 'Select') category = 'general';

        const URL = `https://newsapi.org/v2/top-headlines?category=${category}&language=en&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`;

        axios.get(URL)
        .then((response) => setData(response.data.articles))
    }, [category])

    return data;
}

export default useFetchNews;