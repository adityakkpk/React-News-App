import axios from 'axios';

const fetchNews = async (category) => {
    try {
        if(category === 'Select') category = 'general'
        const URL = `https://newsapi.org/v2/top-headlines?category=${category}&language=en&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`;
        console.log(URL);
        const response = await axios.get(URL);
        return response.data.articles;
    } catch (error) {
        console.error(error);
    }
}

export default fetchNews;