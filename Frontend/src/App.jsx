import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Courses from "./courses/Courses";
import Signup from "./Components/Signup";
import AboutUs from "./aboutus/AboutUs";
import ContactUs from "./contactus/ContactUs";

function App() {
  return (
    <>
      <div >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Course" element={<Courses />} />
        <Route path="/SignUp" element={<Signup />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
      </div>
    </>
  );
}

export default App;
