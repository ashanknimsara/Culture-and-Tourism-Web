import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/LandingPage";
import TravelBlog from "./components/TravelBlog";
import Accomodations from "./components/Accomodations";
import TourGuides from "./components/TourGuides";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<TravelBlog />} />
          <Route path="/accomodations" element={<Accomodations />} />
          <Route path="/tour-guides" element={<TourGuides />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;