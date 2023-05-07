import React, { useEffect, useState } from "react";
import "./TravelBlog.css";

const TravelBlog = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/articles/all")
      .then((response) => response.json())
      .then((data) => setArticles(data.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="article-grid"> {/* Add the article-grid class here */}
      {articles.map((article) => (
        <div className="article-card" key={article._id}> {/* Add the article-card class here */}
          <img src={`http://localhost:5000/${article.image}`} alt="Article Image" /> {/* Add the alt attribute for accessibility */}
          <h2>{article.title}</h2>
          <p>{article.content}</p>
          <a href={`/articles/${article._id}`}>Read More</a> {/* Add a link to the full article */}
        </div>
      ))}
    </div>
  );
};

export default TravelBlog;
