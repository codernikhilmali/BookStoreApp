import Cards from "./Cards";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Course = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        setBooks(res.data); // Update state with the fetched data
      } catch (error) {
        console.log(error);
      }
    };
    getBooks();
  }, []);

  return (
    <div className="container mx-auto md:px-20 px-4">
      <div className="mt-28 text-center">
        <h1 className="text-2xl font-semibold md:text-4xl">
          We are delighted to see you <span className="text-pink-500">Here! :)</span>
        </h1>
        <h3 className="mt-8">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa illum laboriosam, incidunt veniam, soluta temporibus esse, illo reiciendis beatae tempore dignissimos aliquam iste commodi. Quis voluptatibus deleniti facilis ullam. Aperiam.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa illum laboriosam, incidunt veniam, soluta temporibus esse, illo reiciendis beatae tempore dignissimos aliquam iste commodi. Quis voluptatibus deleniti facilis ullam. Aperiam.
        </h3>
        <Link to={"/"}>
          <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-red-500 mt-7">
            Back
          </button>
        </Link>
      </div>  
      <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-4">
        {books.map((item) => (
          <Cards key={item.id} item={item} />
        ))}  
      </div>
    </div>
  );
};

export default Course;
