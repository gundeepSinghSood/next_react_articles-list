import React, {useContext} from 'react';
import { AppContext } from '../Context/UserContext';

const ArticlePage= (props) =>  {
  const { state } = useContext(AppContext);
  console.log(state)
  
  const {singleArticleData = {}} = state;
  const {
    author = '',
    content = '',
    description = '',
    publishedAt = '',
    title = '',
    url = '/',
    urlToImage = '',
  } = singleArticleData;
  
  return (
    <div className="article-wrapper single-article-page">
      <img src={urlToImage} />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <label><b>Content</b></label>
      <p>{content}</p>
      <label><b>Description</b></label>
      <p>{description}</p>
      <div className="card-bottom">
        <span>{publishedAt}</span>
        <a href={url}>Read More</a>
      </div>
    </div>
  );
}

export default ArticlePage;
