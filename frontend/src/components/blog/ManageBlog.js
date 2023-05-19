import React, { useEffect, useState } from "react";
import Navbar from "../common/AdminNavbar";
import Footer from "../common/Footer";
import { Link } from "react-router-dom";
import "./ManageBlog.css";

import axios from "axios";
import Swal from "sweetalert2";


const TravelBlog = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/articles/all")
      .then((response) => response.json())
      .then((data) => setArticles(data.data))
      .catch((error) => console.log(error));
  }, []);

  function deleteArticles(id){
    Swal.fire({
        title: 'Are You Sure?',
        text: 'Once deleted, You will not able to recover these details !',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#30085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Delete'

    }).then((res)=>{
        if(res.isConfirmed)
        {axios.delete(`http://localhost:5000/articles/delete/${id}`);
        Swal.fire({
            title: 'Success!',
            text: 'Deleted Successfully',
            icon: 'success',
            showConfirmButton: false,
            
    });}
}).catch((err)=>{
    Swal.fire({
        title: 'Error!',
        text: "Couldn't delete your Details",
        icon: 'error',
    });
});
setTimeout(()=>{
    window.location.replace("http://localhost:3000/admin/manageblog/");
},3000)
}





  return (
    <div>
       
      <Navbar style={{position: 'fixed', zIndex: '9999'}}/>
      <div className="addbutton">
        <Link to={`/admin/manageblog/new`}><button type="button" className="btn-success2">Add New Blog Post</button></Link>
        </div>
      <div className="article-table">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Content</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {articles.map((article) => (
              <tr key={article._id}>
                <td>{article.title}</td>
                <td>{article.content}</td>
                <td>
                  <img
                    src={`http://localhost:5000/${article.image}`}
                    alt={`${article.title}`}
                  />
                </td>
                <td>
                <button onClick={()=>deleteArticles(article._id)} type="button" className="btndanger">Delete</button>
                  <button>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default TravelBlog;
