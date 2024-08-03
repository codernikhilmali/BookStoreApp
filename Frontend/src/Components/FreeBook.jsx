import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from '../../public/list.json';
import Cards from "./Cards";

const FreeBook = () => {
  const filterData = list.filter((data) => data.Category === "Free");
  var settings = {
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
    <>
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
            {filterData.map((item) => (
              <Cards key={item.id} item={item} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default FreeBook;
