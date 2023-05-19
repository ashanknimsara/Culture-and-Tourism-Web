import React, { useEffect, useState } from "react";
import "./TravelBlog.css";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

const TravelBlog = () => {
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredArticles, setFilteredArticles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/articles/all")
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.data);
        if (search === "") {
          setFilteredArticles(data.data);
        } else {
          const filtered = data.data.filter((article) =>
            article.title.toLowerCase().includes(search.toLowerCase())
          );
          setFilteredArticles(filtered);
        }
      })
      .catch((error) => console.log(error));
  }, [search]);

  const searchArticles = () => {
    if (search.trim() === "") {
      setFilteredArticles(articles);
    } else {
      const filtered = articles.filter((article) =>
        article.title.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredArticles(filtered);
    }
  };

  return (
    <div>
      <Navbar style={{ position: "fixed", zIndex: "9999" }} />
      <div className="search-container">
        <input
         className="searchinput"
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            searchArticles();
          }}
          placeholder="Search articles..."
        />
      </div>
      <div className="article-grid">
        {filteredArticles.map((article) => (
          <div className="article-card" key={article._id}>
            <img
              src={`http://localhost:5000/${article.image}`}
              alt={`${article.title}`}
            />
            <h2>{article.title}</h2>
            <p>{article.content}</p>
            <a href={`/blog/${article._id}`}>Read More</a>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default TravelBlog;
