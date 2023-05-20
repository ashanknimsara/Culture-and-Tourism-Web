import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/LandingPage";
// import Accomodations from "./components/Accomodations";
import TourGuides from "./components/TourGuides";
import AddAgency from "./components/agencies/AddAgency";
import ViewAgencies from "./components/agencies/ViewAgencies";
import AdminView from "./components/agencies/AdminView";
import AgencyDetails from "./components/agencies/AgencyDetails";

import ViewBlogPost from "./components/blog/ViewBlogPost"
import TravelBlog from "./components/blog/TravelBlog";
import AddBlogPost from "./components/blog/AddBlogPost"
import ManageBlog from "./components/blog/ManageBlog";
import EditBlogPost from "./components/blog/EditBlogPost";

import AdminHome from "./components/common/AdminHome";
import ManageAgency from "./components/agencies/ManageAgency";
import UpdateAgency from "./components/agencies/UpdateAgency";
import AdminSignup from "./components/common/AdminSignup";
import AdminLogin from "./components/common/AdminLogin";

import GuideForm from "./components/tourGuide/GuideForm";

import GuideSingleView from "./components/tourGuide/GuideSingleView";
import UpdateGuideSingleView from "./components/tourGuide/UpdateGuideSingleView";
import GuideLists from "./components/tourGuide/GuideLists";

import Accomodations from "./components/Accommodation/Accommodation";
import AddAccommodationPost from "./components/Accommodation/AddAccommodationPost";
import ViewAccommodation from "./components/Accommodation/ViewAccommodation";
 
import ManageAccommodation from "./components/Accommodation/ManageAccommodation";
import ManageAccommodationPackage from "./components/Accommodation/ManageAccommodationpackage";
//import AddAccommodationPackagePost from "./components/Accommodation/AddAccommodationPackagePost";
import AddAccommodationPackagePost from "./components/Accommodation/AddAccommodationpackagePost";
import UpdateAccommodationPackageForm from "./components/Accommodation/UpdateAccommodationPackageForm";
import ManageAccommendation from "./components/Accommodation/ManageAccommendation";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accomodations" element={<Accomodations />} />
          <Route path="/tour-guides" element={<GuideLists />} />
          <Route path="/login" element={<AdminLogin />} />


          
          
          <Route path="/admin" element={<AdminHome/>}/>
          <Route path="/admin/signup" element={<AdminSignup/>}/>
        

          <Route path="/blog" element={<TravelBlog />} />
          <Route path="/blog/:id" element={<ViewBlogPost/>}/>
          <Route path="/manage/manageblog" element={<ManageBlog />} />
          <Route path="/admin/manageblog/new" element={<AddBlogPost />} />
          <Route path="/admin/manageblog/edit/:id" element={<EditBlogPost/>}
    />
          

          <Route path="/UpdateAgency/:id" element={<UpdateAgency/>}/>
          <Route path="/ViewAgency" element={<ViewAgencies/>}/>
          <Route path="/viewadmin" element={<AdminView/>}/>
          <Route path="/manage/agency" element={<ManageAgency/>}/>
          <Route path="/AddAgency" element={<AddAgency />} />
          <Route path="/AgencyByID/:id" element={<AgencyDetails/>} />

          <Route path="/NewAccommodation" element={<AddAccommodationPost />} />
          <Route path="/accomodations" element={<Accomodations />} />
          <Route path="/Accommodation/:id" element={<ViewAccommodation/>}/>
          <Route path="/admin/ManageAccommodation/" element={<ManageAccommodation/>} />
          <Route path="/admin/ManageAccommodationPackage/" element={<ManageAccommodationPackage/>} />
          <Route path="/manage/Accommendation" element={<ManageAccommendation />} />

          <Route path="/NewAccommodationPackage/:id" element={<AddAccommodationPackagePost />} />
          <Route path="/UpdateAccommodationPackage/:id" element={<UpdateAccommodationPackageForm />} />
          
          <Route path="/guide" element={<GuideForm/>} />
          <Route path="/viewGuide/:id" element={<GuideSingleView/>} />
          <Route path="/viewGuide/:id" element={<UpdateGuideSingleView/>} />
          <Route path="/allguide" element={<GuideLists/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
