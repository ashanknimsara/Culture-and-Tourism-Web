import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/LandingPage";
import TravelBlog from "./components/blog/TravelBlog";
import Accomodations from "./components/Accomodations";
import TourGuides from "./components/TourGuides";
import AddAgency from "./components/agencies/AddAgency";
import ViewAgencies from "./components/agencies/ViewAgencies";
import AdminView from "./components/agencies/AdminView";

import UpdateAgency from "./components/agencies/UpdateAgency";
import AdminHome from "./components/agencies/AdminHome";
import ManageAgency from "./components/agencies/ManageAgency";

import AddBlogPost from "./components/blog/AddBlogPost";
import Login from "./components/Login";
import NewAdmin from "./components/SignUp";

import GuideForm from "./components/tourGuide/GuideForm";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accomodations" element={<Accomodations />} />
          <Route path="/tour-guides" element={<TourGuides />} />

          <Route path="/AddAgency" element={<AddAgency/>}/>
          <Route path="/ViewAgency" element={<ViewAgencies/>}/>
          <Route path="/viewadmin" element={<AdminView/>}/>
          <Route path="/UpdateAgency/:id" element={<UpdateAgency/>}/>
          <Route path="/admin" element={<AdminHome/>}/>
          <Route path="/manage/agency" element={<ManageAgency/>}/>



          <Route path="/login" element={<Login />} />
          <Route path="/admin/new-admin" element={<NewAdmin />} />

          <Route path="/blog" element={<TravelBlog />} />
          <Route path="/newblogpost" element={<AddBlogPost />} />

         

          <Route path="/enterGuide" element={<GuideForm />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
