import { useEffect, useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import NavContents from './components/NavContents/NavContents';
import API_KEY from './Keys';
import axios from 'axios';

function App() {
  const [category, setCategory] = useState('general')
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();
  const [loadmore, setLoadmore] = useState(10)


  const newsApi = async () => {
    try{
        const news = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}&category=${category}&pageSize=${loadmore}`
        );
        console.log(news.data.articles)
        setNewsArray(news.data.articles);
        setNewsResults(news.data.totalResults);
    }
    catch (error){
        console.log(error)
    }
  }
  useEffect(()=>{
    newsApi()
  },[category, newsResults, loadmore ])

  return (

    <div className="app">
       <Nav setCategory={setCategory} />
       <NavContents newsArray={newsArray} newsResults={newsResults} loadmore={loadmore} setLoadmore={setLoadmore} />
    </div>
  );
}

export default App;
