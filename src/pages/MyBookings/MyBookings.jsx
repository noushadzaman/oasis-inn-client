import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import SingleMyBooking from "./SingleMyBooking";

const MyBookings = () => {
    const [myBookings, setMyBookings] = useState([]);
    const { user } = useContext(AuthContext);
    const email = user?.email;


    useEffect(() => {
        fetch(`http://localhost:5000/bookings?email=${email}`)
            .then(res => res.json())
            .then(data => {
                setMyBookings(data);
            })
    }, [email]);

    console.log(myBookings)

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Room</th>
                            <th>Booked date</th>
                            <th>Update date</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myBookings.map(myBooking => <SingleMyBooking
                                key={myBooking._id}
                                myBooking={myBooking}
                            ></SingleMyBooking>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBookings;