import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const BookService = () => {
    const service = useLoaderData();
  const { title, _id, price, img } = service;
  const {user} = useContext(AuthContext);

  const handleBooking = event => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = form.email.value;

    const booking = {
        customerName: name,
        email,
        date,
        img,
        service: title,
        service_id: _id,
        price: price
    }

    console.log(booking)

    fetch('http://localhost:5000/bookings', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(booking)

    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.insertedId){
        alert('service book successfull')
      }
    })
  }
  return (
    <div className="py-7">
      <h3>Checkout Page {title}</h3>

      <form onSubmit={handleBooking} style={{height: '70vh'}}>
        <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="name"
            defaultValue={user?.displayName}
            name="name"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Dated</span>
          </label>
          <input
            type="date"
            name="date"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="text"
          
            defaultValue={user?.email}
            name="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Ammount</span>
          </label>
          <input
            type="text"
            defaultValue={price}
            name="ammount"
            className="input input-bordered"
          />
        </div>
        </div>
        <div className="form-control mt-6">
       
         <input className="btn btn-primary btn-block" type="submit" value="confirm Order" />
        </div>
      </form>

      <div className="card-body"></div>
    </div>
  );
};

export default BookService;