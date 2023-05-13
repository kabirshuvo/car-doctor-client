import { Link } from "react-router-dom";


const ServicesCard = ({service}) => {
    const {_id, img, price, title} = service;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={img}
            alt={title}
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <h3 className="text-white">{price}</h3>
          <p className="text-purple-300">{title}</p>
          <div className="card-actions">
            <Link to={`/book/${_id}`}>
            <button className="btn btn-primary">Book Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
