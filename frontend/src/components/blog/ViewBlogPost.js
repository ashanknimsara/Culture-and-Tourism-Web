import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ViewBlogPost.css";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

const Article = () => {
  const [article, setArticle] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/articles/${id}`)
      .then((response) => response.json())
      .then((data) => setArticle(data.data))
      .catch((error) => console.log(error));
  }, [id]);

  if (!article) {
    return <div>Loading...</div>;
  }

  // Format createdAt date string
  const formattedDate = new Date(article.createdAt).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div><Navbar style={{position: 'fixed', zIndex: '9999'}}/>
    <div className="article">
      <h2>{article.title}</h2>
      <img src={`http://localhost:5000/${article.image}`} alt={`${article.title}`} />
      <p>{article.content}</p>
      <h5>Date Posted: {formattedDate}</h5>
    </div>
    <Footer/>
    </div>
  );
};

export default Article;
