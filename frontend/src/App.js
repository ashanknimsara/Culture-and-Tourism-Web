import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/LandingPage";
import Accomodations from "./components/Accomodations";
import TourGuides from "./components/TourGuides";
import AddAgency from "./components/agencies/AddAgency";
import ViewAgencies from "./components/agencies/ViewAgencies";
import AdminView from "./components/agencies/AdminView";


import ViewBlogPost from "./components/blog/ViewBlogPost"
import TravelBlog from "./components/blog/TravelBlog";
import AddBlogPost from "./components/blog/AddBlogPost"
import ManageBlog from "./components/blog/ManageBlog";


import Login from "./components/Login";
import NewAdmin from "./components/SignUp";

import AdminHome from "./components/AdminHome";
import ManageAgency from "./components/agencies/ManageAgency";
import UpdateAgency from "./components/agencies/UpdateAgency";


import GuideForm from "./components/tourGuide/GuideForm";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accomodations" element={<Accomodations />} />
          <Route path="/tour-guides" element={<TourGuides />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin/new-admin" element={<NewAdmin />} />
          
          <Route path="/admin" element={<AdminHome/>}/>
        
          <Route path="/blog" element={<TravelBlog />} />
          <Route path="/blog/:id" element={<ViewBlogPost/>}/>
          <Route path="/admin/manageblog/" element={<ManageBlog />} />
          <Route path="/admin/manageblog/new" element={<AddBlogPost />} />
          

          <Route path="/UpdateAgency/:id" element={<UpdateAgency/>}/>
          <Route path="/ViewAgency" element={<ViewAgencies/>}/>
          <Route path="/viewadmin" element={<AdminView/>}/>
          <Route path="/manage/agency" element={<ManageAgency/>}/>
          <Route path="/AddAgency" element={<AddAgency />} />
          
          <Route path="/enterGuide" element={<GuideForm />} />



        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
