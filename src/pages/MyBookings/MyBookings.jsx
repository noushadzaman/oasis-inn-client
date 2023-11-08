import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import SingleMyBooking from "./SingleMyBooking";

const MyBookings = () => {
    const [myBookings, setMyBookings] = useState([]);
    const { user } = useContext(AuthContext);
    const email = user?.email;

    useEffect(() => {
        fetch(`https://oasis-inn.web.app/bookings?email=${email}`)
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
                            <th>Confirm</th>
                            <th>Room</th>
                            <th>Cancel</th>
                            <th>Booked date</th>
                            <th>Details</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myBookings.map(myBooking => <SingleMyBooking
                                key={myBooking._id}
                                myBooking={myBooking}
                                myBookings={myBookings}
                                setMyBookings={setMyBookings}
                            ></SingleMyBooking>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBookings;