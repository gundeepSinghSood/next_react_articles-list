import React, { useEffect, useState, useContext } from 'react';
import Link from 'next/link';
import { AppContext } from '../Context/UserContext';

const ArticleDetail= () =>  {
  const [apiData, setApiData] = useState([])
  const { state, storeData } = useContext(AppContext);
  
  useEffect(()=> {
    fetch('https://newsapi.org/v2/everything?q=tech&apiKey=008c2c412a2b403698bc29a732374513&pageSize=10&page=1')
    .then(res => res.json())
    .then(convertedRes => {
      setApiData(convertedRes.articles);
      storeData({apiData: convertedRes.articles})
    })
  },[])
  
  useEffect(()=> {
    console.log("ArticleDetail -> state.filterData", state.filterData)
  },[state.filterData])
  
  const renderCards = (cardsData) => (
    <Link as={cardsData.title} to={cardsData.title} href='articlePage' key={cardsData.publishedAt}>
      <div className="card-container" onClick={() => storeData({singleArticleData: cardsData})}>
        <div className="card-title">{cardsData.title}</div>
        <img src={cardsData.urlToImage} />
      </div>
    </Link>
  )
  
  return (
    <div className="article-wrapper">
      {state.filterData && state.filterData.length > 0
      ? state.filterData.map(searchedData => {
        console.log("ArticleDetail -> searchedData", searchedData)
        return (renderCards(searchedData))
      })
      : apiData.length > 0 && apiData.map(data => {
        return (
          renderCards(data)
        )
      })}
    </div>
  );
}

export default ArticleDetail;
