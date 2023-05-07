import React, { useState } from "react";
import axios from "axios";
import "./AddBlogPost.css";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
const background = require('../../assets/images/bg.jpg');

export default function AddBlogPost() {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState("");




    const sendData = async (e) => {
        e.preventDefault();

        let formData = new FormData();
        formData.append("title", title);
        formData.append("content", content);
        formData.append("image", image);

        axios.post("http://localhost:5000/articles/new", formData).then(() => {
            alert("Blogpost Added")


        }).catch((err) => {
            alert(err)
        })


    }

    return (
        <div className="bg">
            <div className="bg-image" style={{ backgroundImage: `url(${background})` }}></div>
            <Navbar style={{ position: 'fixed', zIndex: '9999' }} />
            <br />

            <div className="blogpost-form" style={{ marginTop: '100px' }}>
                <div class="center"><h2>New Blog Post</h2></div>
                <form onSubmit={sendData}>
                    <div className="form-group">
                        <label for="name">Title</label>
                        <input type="text" className="form-control" id="title" required placeholder="Enter Blogpost Title "
                            onChange={(e) => { setTitle(e.target.value); }}
                        />
                    </div>
                    <div className="form-group">
                        <label for="location">Content</label>
                        <textarea className="form-control" id="content" required placeholder="Enter Blogpost Content"
                            onChange={(e) => { setContent(e.target.value); }}
                        />

                    </div>
                    <div className="form-group">
                        <label for="image">Image</label>
                        <input type="file" className="form-control" id="image" accept="image/*"
                            onChange={(e) => { setImage(e.target.files[0]); }}
                        />
                    </div>

                    <div class="centerb"><button type="submit" className="btn btn-primary">Submit</button></div>
                </form>
            </div>
            <br />
            <Footer />
        </div>
    )
}
