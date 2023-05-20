import React, { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert2";
import { useParams } from "react-router-dom";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

export default function UpdateBlog(props) {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState("");

    const { id } = useParams();

    useEffect(() => {
        function getArticle() {
          axios.get(`http://localhost:5000/articles/${id}`)
            .then((res) => {
              console.log(res.data); // Log the response for inspection
      
              if (res.data.status) {
                setTitle(res.data.data.title);
                setContent(res.data.data.content.join("\n")); // Join the array elements into a single string
                setImage(res.data.data.image);
              }
            })
            .catch((err) => {
              alert(err);
            });
        }
      
        getArticle();
      }, [id]);
      

    function updateBlog(e) {

        e.preventDefault();

        let formData = new FormData();
        formData.append("title", title);
        formData.append("content", content);
        formData.append("image", image);

        axios.put(`http://localhost:5000/articles/update/${id}`, formData).then(() => {

            swal.fire({
                title: "Success!",
                text: "Updated Successfully",
                icon: "success",
                button: false,
            });

        }).catch((err) => {
            swal.fire({
                title: "Error!",
                text: "Couldn't Update your Details",
                icon: "error",
            });
        });

        setTimeout(() => {
            window.location.replace("http://localhost:3000/admin/manageblog");
        }, 2500)
    }


    return (
        <div className="bg">
            <Navbar style={{ position: 'fixed', zIndex: '9999' }} />
            <br />

            <div className="blogpost-form" style={{ marginTop: '100px' }}>
                <div class="center"><h2>Edit {title}</h2></div>
                <form onSubmit={updateBlog}>
                    <div className="form-group">
                        <label for="name">Title</label>
                        <input type="text" className="form-control" id="title" required value={title}
                            onChange={(e) => { setTitle(e.target.value); }}
                        />
                    </div>
                    <div className="form-group">
                        <label for="location">Content</label>
                        <textarea className="form-control" id="content" required value={content}
                            onChange={(e) => { setContent(e.target.value); }}
                        />

                    </div>
                    <div className="form-group">
                        <label for="image">Image</label>
                        <input type="file" className="form-control" id="image" accept="image/*"
                            onChange={(e) => { setImage(e.target.files[0]); }}
                        />
                    </div>

                    <div class="centerb"><button type="submit" className="btn btn-primary">Update</button></div>
                </form>
            </div>
            <br />
            <Footer />
        </div>
    )


}