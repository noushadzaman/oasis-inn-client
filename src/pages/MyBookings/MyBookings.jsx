import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import SingleMyBooking from "./SingleMyBooking";

const MyBookings = () => {
    const [myBookings, setMyBookings] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { user } = useContext(AuthContext);
    const email = user?.email;

    useEffect(() => {
        fetch(`https://oasis-inn-server.vercel.app/bookings?email=${email}`)
            .then(res => res.json())
            .then(data => {
                setMyBookings(data)
                setIsLoading(false)
            })
    }, [email]);

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
                            isLoading ?
                                <div className="w-[50px] mx-auto mt-[170px]">
                                    <div className="loading loading-spinner w-[100px]"></div>
                                </div>
                                : myBookings?.map(myBooking => <SingleMyBooking
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