import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import axios from "axios";
import { useEffect, useState } from "react";

const FreeBook = () => {
  const [freeBooks, setFreeBooks] = useState([]);

  useEffect(() => {
    const getFreeBooks = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book/free");
        setFreeBooks(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getFreeBooks();
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto md:px-20 px-4">
      <div>
        <h1 className="text-xl font-bold pb-2">Free Offered Courses</h1>
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          eligendi dolor, atque eveniet corrupti recusandae eum eius
          similique ipsam, quisquam, expedita perspiciatis consectetur quos.
          Expedita id consectetur nesciunt magni adipisci.
        </h3>
      </div>
      <div>
        <Slider {...settings}>
          {freeBooks.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FreeBook;
