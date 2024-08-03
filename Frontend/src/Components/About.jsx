import { Link } from 'react-router-dom'
import about from '../../public/about.jpg'
const About = () => {
  return (
    <>
    <div className="container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32 md:ml-10">
        <div className="space-y-6">
        <h1 className="text-4xl font-bold">Connecting Readers with Stories that  <span className="text-pink-500">Inspire, Educate, and Entertain!!</span></h1>
        <h3 className="text-lg md:text-xl md:font-semibold">Welcome to BookStore, where we believe in the transformative power of books. Our carefully curated collection spans genres and generations, ensuring that every reader finds a story that captivates their imagination. Join us in celebrating the joy of reading and the endless adventures that await within the pages of a book.</h3>
        <Link to={"/"}>
        <button className="btn btn-active btn-secondary mt-7">Shop Now!</button>
        </Link>
        </div>
        </div>
        <div className="order-1 md:order-2 w-full md:w-1/2">
         <img src={about} className="w-92 h-92" alt="right" />
        </div>
    </div>
    </>
  )
}

export default About
