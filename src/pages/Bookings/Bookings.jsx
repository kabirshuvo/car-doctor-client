import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BookingsRow from "./BookingsRow";


const Bookings = () => {
    const {user} = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;

            useEffect(()=>{
            fetch(url).then(res=>res.json()).then(data => setBookings(data));
        }, [url])

        const handleDelete = id => {
          const proceed = confirm('Are You Sure You Want to delete This Service?')
          if (proceed) {
              fetch(`http://localhost:5000/bookings/${id}`,{
                  method: 'DELETE'
              })
              .then(res => res.json())
              .then(data => {
                  console.log(data);
                  if(data.deletedCount > 0) {
                      alert('deleted successful');
                      const remaining = bookings.filter(booking => booking._id !== id);
                      setBookings(remaining);
                  }
              })
          }
      }

      const handleBookingConfirmation = id => {
        fetch(`http://localhost:5000/bookings/${id}`,{
          method: 'PATCH',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify({status: 'confirm'})
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if(data.modifiedCount > 0) {
            //update state
            const remaining = bookings.filter(booking => booking._id !== id);
            const updated = bookings.find(booking => booking._id === id);
            updated.status ='confirm'

            const newBookings = [updated, ...remaining];
            setBookings(newBookings);

          }
        })
      }

    return (
        <div>
            <h3 className="text-1xl">Your :{bookings.length} Bookings on the quee</h3>
            <>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Avater</th>
        <th>Name</th>
        <th>Email</th>
        <th>Price</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>

      {
        bookings.map(booking => <BookingsRow 
          key={booking._id} 
          booking={booking}
          handleDelete={handleDelete}
          handleBookingConfirmation={handleBookingConfirmation}
          ></BookingsRow>)
      }
      
    </tbody>
    


  </table>
</div>
            
            </>
        </div>
    );
};

export default Bookings;

{/*  */}