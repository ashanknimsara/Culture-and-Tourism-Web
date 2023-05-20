import React, { useEffect, useState } from "react";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import { Link } from "react-router-dom";
import "./ManageAccommodation.css";

import axios from "axios";
import Swal from "sweetalert2";



const ManageAccommodation = () => {
  const [accommodations, setaccommodations] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/Accommodation/allAccommodation")
      .then((response) => response.json())
      .then((data) => setaccommodations(data.data))
      .catch((error) => console.log(error));
  }, []);

  function deleteAccommodation(id){
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
        {axios.delete(`http://localhost:5000/Accommodation/delete/${id}`);
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
    window.location.replace("http://localhost:3000/admin/ManageAccommodation/");
},3000)
}





  return (
    <div className="Accommodation">
       
      <Navbar style={{position: 'fixed', zIndex: '9999'}}/>
      <div className="addbutton">
        <Link to={`/NewAccommodation`}><button type="button" className="btn-success2">Add New Accommodation Details</button></Link>
        </div>
      <div className="article-table">
        <table>
          <thead>
            <tr>
              <th>Hotel Name</th>
              <th>Location</th>
              <th>description</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {accommodations.map((accommodation) => (
              <tr key={accommodation._id}>
                <td>{accommodation.Hotel_Name}</td>
                <td>{accommodation.location}</td>
                <td>{accommodation.description}</td>
                <td>
                  <img
                    src={`http://localhost:5000/${accommodation.image}`}
                    alt={`${accommodation.Hotel_Name}`}
                  />
                </td>
                <td>
                <button onClick={()=>deleteAccommodation(accommodation._id)} type="button" className="btndanger">Delete</button>
                  <button>Edit</button>
                 <Link to={`/NewAccommodationPackage/${accommodation._id}`}><button>Add Packages</button></Link> 
                 
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

export default ManageAccommodation;
