import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import { useState } from "react";
import formatDate from "../../utilities/DateFormater";
import { BsFillTrash3Fill } from "react-icons/bs";
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import { AiOutlineStop } from "react-icons/ai";
import moment from 'moment';
import daysUntil from "../../utilities/DaysRemaining";

const SingleMyBooking = ({ myBooking }) => {
    const { _id, email, bookingDates, price, description, location, image } = myBooking;
    const [startDate, setStartDate] = useState(new Date(bookingDates.checkIn));
    const [endDate, setEndDate] = useState(new Date(bookingDates.checkOut));
    const [deleteBooking, setDeleteBooking] = useState(false);


    const handleUpdateBooking = (id) => {
        const checkIn = formatDate(startDate);
        const checkOut = formatDate(endDate);
        console.log(checkIn, checkOut);
        const newBookingDates = {
            checkIn: checkIn,
            checkOut: checkOut
        }
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newBookingDates)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }


    return (

        <tr>
            <th>
                <TiTick className="cursor-pointer" />
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

                {
                    remainingDays <= 1 ?
                        <AiOutlineStop />
                        : <ImCross onClick={handleCancel} className="cursor-pointer" />
                }
            </td>
            <td className="flex flex-col items-center space-y-2 justify-center">
                <div>
                    <DatePicker
                        className="border"
                        showIcon
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                    />
                    <DatePicker
                        className="border"
                        showIcon
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                    />
                </div>
                <button className="btn btn-sm w-36" onClick={() => handleUpdateBooking(_id)}>Update</button>
            </td>
            <td>
                <Link to={`/roomDetail/${_id}`} className="btn btn-ghost btn-xs">details</Link>
            </td>
            <th>
                <BsFillTrash3Fill className="cursor-pointer" />
            </th>
        </tr >
    );
};

export default SingleMyBooking;