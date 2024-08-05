import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./home/Home";
import Courses from "./courses/Courses";
import Signup from "./Components/Signup";
import AboutUs from "./aboutus/AboutUs";
import ContactUs from "./contactus/ContactUs";
import { useAuth } from "./context/AuthProvider";
import { useEffect } from "react";

function App() {
  const { authUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!authUser) {
      const loginModal = document.getElementById("my_modal_3");
      if (loginModal) {
        loginModal.showModal();
      }
    }
  }, [authUser]);

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Course" element={authUser ? <Courses /> : <Navigate to="/" />} />
          <Route path="/SignUp" element={<Signup />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
