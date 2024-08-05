const Cards = ({ item }) => {
  return (
    <>
      <div className="mt-5 my-3 p-4 ">
      <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white border">
<figure>
  <img
    src={item.image}
    alt="Books" />    
</figure>
<div className="card-body">
  <h2 className="card-title">
    {item.Title}
    <div className="badge badge-secondary">{item.Category}</div>
  </h2>
  <p>If a dog chews shoes whose shoes does he choose?</p>
  <div className="card-actions justify-between">
    <div className="badge badge-outline hover:bg-pink-500 hover:text-white duration-200">Price: ${item.Price}</div>
    <div className="badge badge-outline hover:bg-pink-500 hover:text-white duration-200">Buy Now</div>
  </div>
</div>
</div>
      </div>
    </>
  );
};

export default Cards;
