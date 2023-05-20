import React, { useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

import Navbar from "../common/AdminNavbar";
import Footer from "../common/Footer";



import "./AdminView.css";


export default function AdminView(){

    const [agencies, setAgencies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() =>{
        function getAgencies() {
            axios.get("http://localhost:5000/Agency/").then((res)=>{
                setAgencies(res.data);
            }).catch((err)=>{
                alert(err.message);
            })
        }
        getAgencies();
    },[]);

    function deleteAgencies(id){
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
            {axios.delete(`http://localhost:5000/Agency/delete/${id}`);
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
        window.location.replace("http://localhost:3000/Viewadmin");
    },3000)

    }

   // Filter the agencies based on the search input
const filteredAgencies = agencies.filter((val) => {
    if (searchTerm === "") {
      return true;
    } else if (
      val.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      val.location.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return true;
    }
    return false;
  });
  

    return(
        <>
        <div className="bg">
            
            <Navbar style={{position: 'fixed', zIndex: '9999'}}/>
            <br/><br/>
            
        <div className="admin">
        <div className="addbtn">
        <Link to={`/AddAgency`}><button type="button" className="btn-success2">Add New</button></Link>
        </div>
        <div className="Payment-form1">

            
            <div className="searchbar">
            <input
                type="text"
                placeholder="Search by name or location"
                className="search-box"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
            />
            </div>
            <table className="table1">
                <thead className="thead-dark1">
                    <tr>
                    <th scope="col">name</th>
                    <th scope="col">location</th>
                    <th scope="col">Email</th>
                    <th scope="col">contact number</th>
                    <th scope="col">description</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                {/* Map through the filtered agencies */}
                {filteredAgencies.map((val,key)=>{
                    return <tr key={key}>
                        <td>{val.name}</td>
                        <td>{val.location}</td>
                        <td>{val.email}</td>
                        <td>{val.contactNo}</td>
                        <td>{val.Description}</td>
                        <td>
                        <Link to={`/UpdateAgency/${val._id}`}><button type="button" className="btn-success">Update</button></Link>&nbsp;
                            <button onClick={()=>deleteAgencies(val._id)} type="button" className="btndanger">Delete</button>
                        </td>
                    </tr>

                })}
                </tbody>
            </table>
        </div>
        </div>
        <br/>
        <Footer/>
        </div>
        </>
    )

}
