import Course from "../Components/Course"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"

const Courses = () => {
  return (
    <>
    <Navbar />
    <div className="min-screen-h ">
    <Course />
    </div>
    <Footer />
    </>
  )
}

export default Courses
