import React, { useEffect, useState } from "react";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import { Link } from "react-router-dom";
import "./packege.css";

import axios from "axios";
import Swal from "sweetalert2";



const ManageAccommodationpackage = () => {
  const [accommodationpackages, setaccommodationpackages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/AccommodationPackage/allAccommodationPackage")
      .then((response) => response.json())
      .then((data) => setaccommodationpackages(data.data))
      .catch((error) => console.log(error));
  }, []);

  function deleteAccommodationpackage(id){
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
        {axios.delete(`http://localhost:5000/AccommodationPackage/delete-AccommodationPackage/${id}`);
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
    window.location.replace("http://localhost:3000/admin/ManageAccommodationPackage/");
},3000)
}





  return (
    <div className="Accommodation">
       
      <Navbar style={{position: 'fixed', zIndex: '9999'}}/>
      <div className="article-table">
        <table>
          <thead>
            <tr>
              <th>Hotel_Name</th>
              <th>package Title</th>
              <th>Price Range</th>
              <th>description</th>
              <th>Offers</th>
              <th>createdAt</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            
            {accommodationpackages.map((accommodationPackage) => (
              <tr key={accommodationPackage._id}>
                <td>{accommodationPackage.Accommodation_id.Hotel_Name}</td>
                <td>{accommodationPackage.package_title}</td>
                <td>{accommodationPackage.Price_Range}</td>
                <td>{accommodationPackage.package_description}</td>
                <td>{accommodationPackage.Package_Offers_Description}</td>
                <td>{accommodationPackage.createdAt}</td>
                
                <td>
                <button onClick={()=>deleteAccommodationpackage(accommodationPackage._id)} type="button" className="btndanger">Delete</button>
                 <Link to={`/UpdateAccommodationPackage/${accommodationPackage._id}`}><button>Edit Packages</button></Link> 
                 
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

export default ManageAccommodationpackage;
