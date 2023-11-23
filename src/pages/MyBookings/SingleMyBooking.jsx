import PropTypes from 'prop-types';
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
import useAxios from '../../hooks/useAxios';
import { useQuery } from '@tanstack/react-query';


const SingleMyBooking = ({ myBooking, myBookings, setMyBookings }) => { //
    const { _id, email, bookedDate, service_id, price, description, location, image } = myBooking;
    const axios = useAxios();

    const { data: roomDetail } = useQuery({
        queryKey: ["roomDetail"],
        queryFn: () => axios.get(`/roomDetail/${service_id}`)
    })
    const allBookings = roomDetail?.data?.booking;
    console.log(allBookings);
    console.log(roomDetail?.data);

    const [date, setdate] = useState(new Date(bookedDate));

    const [deleteBooking, setDeleteBooking] = useState(false);


    const handleUpdateBooking = () => {
        const bookedDate = formatDate(date);
        const updatedBooking = {
            email,
            bookedDate: bookedDate,
            service_id,
            price,
            location,
            description,
            image
        }

        fetch(`https://oasis-inn-server.vercel.app/bookings/${_id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "Application/json"
            },
            body: JSON.stringify(updatedBooking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    const remainingDays = daysUntil(bookedDate);
    console.log(remainingDays);

    const handleDelete = (command) => {
        fetch(`https://oasis-inn-server.vercel.app/bookings/${_id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = myBookings.filter(singleBooking => singleBooking._id !== _id);
                setMyBookings(remaining);
                if (command == 'confirm') {
                    alert("confirmed")
                } else if (command == 'delete') {
                    alert('deleted')
                }
            })

        const updatedRoomDetail = {
            booking: []
        }
        fetch(`https://oasis-inn-server.vercel.app/roomDetail/${_id}`, {
            method: "PATCH",
            headers: {
                "content-type": "Application/json"
            },
            body: JSON.stringify(updatedRoomDetail)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }



    return (

        <tr>
            <th>
                <TiTick
                    onClick={() => handleDelete('confirm')}
                    className="cursor-pointer" />
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
                        : <ImCross className="cursor-pointer"
                            onClick={() => handleDelete('confirm')}
                        />
                }
            </td>
            <td className="flex flex-col items-center space-y-2 justify-center">
                <div>
                    <DatePicker
                        className="border"
                        showIcon
                        selected={date}
                        onChange={(date) => setdate(date)}
                    />
                </div>
                <button className="btn btn-sm w-36"
                    onClick={() => handleUpdateBooking()}
                >Update</button>
            </td>
            <td>
                <Link to={`/roomDetail/${_id}`} className="btn btn-ghost btn-xs">details</Link>
            </td>
            <th>
                <BsFillTrash3Fill
                    onClick={() => handleDelete('delete')}
                    className="cursor-pointer" />
            </th>
        </tr >
    );
};


SingleMyBooking.propTypes = {
    myBookings: PropTypes.array,
    setMyBookings: PropTypes.func,
    myBooking: PropTypes.object,

}


export default SingleMyBooking;