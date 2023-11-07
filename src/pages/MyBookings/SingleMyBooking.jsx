import { Link } from "react-router-dom";

const SingleMyBooking = ({ myBooking }) => {
    const { _id, email, bookingDates, price, description, location, image } = myBooking;
    console.log(myBooking)
    return (

        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask rounded-xl w-24 h-24">
                            <img src={image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold text-lg">{location}</div>
                        <div className="text-xl">${price}</div>
                    </div>
                </div>
            </td>
            <td>
                <div className="text-[19px] space-y-3">
                    <p>
                        From: {bookingDates.checkIn}
                    </p>
                    <p>
                        To: {bookingDates.checkOut}
                    </p>
                </div>
            </td>
            <td>
                <input type="date" />
                <input className="btn btn-sm" type="submit" value="Update" />
            </td>
            <th>
                <Link to={`/roomDetail/${_id}`} className="btn btn-ghost btn-xs">details</Link>
            </th>
        </tr >
    );
};

export default SingleMyBooking;