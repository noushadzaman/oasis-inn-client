import { Rating, RoundedStar } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { useContext, useEffect, useState } from "react";
import { AuthContext } from '../../provider/AuthProvider';
import moment from 'moment';
import { json } from 'react-router-dom';
import useAxios from '../../hooks/useAxios';
import { useQuery } from '@tanstack/react-query';

const myStyles = {
    itemShapes: RoundedStar,
    activeFillColor: '#ffb700',
    inactiveFillColor: '#fbf1a9'
}

const ReviewRoom = ({ email, _id }) => {
    const { user } = useContext(AuthContext);
    const name = user?.displayName;
    const [myBookings, setMyBookings] = useState([]);
    const [rating, setRating] = useState(5);
    const axios = useAxios();

    const { data: bookings, isLoading, isError } = useQuery({
        queryKey: ['bookings'],
        queryFn: () => {
            return axios.get(`/bookings?email=${email}`)
        }
    })
    console.log(bookings)
    let doesExistOnBooking;
    const booked = bookings?.data?.find(myBooking => myBooking.service_id == _id);
    if (booked) {
        doesExistOnBooking = true;
    }
    else {
        doesExistOnBooking = false;
    }
    const date = moment().format('D MMMM YYYY');

    console.log(rating)
    const handleReview = (e) => {
        if (!doesExistOnBooking) {
            return alert('you have to book first to review a room')
        }
        e.preventDefault();
        const comment = e.target.comment.value;
        const reviewInfo = {
            room_id: _id,
            name,
            rating,
            comment,
            date
        }
        fetch(`https://oasis-inn-server.vercel.app/reviews`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(reviewInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    return (
        <form
            onSubmit={handleReview}
            className='space-y-5'>
            <div className='flex items-center'>
                <p className='text-2xl'>Rating:</p>
                <Rating
                    style={{ maxWidth: 180 }}
                    value={rating}
                    onChange={setRating}
                    itemStyles={myStyles}
                    isRequired
                />
            </div>
            <textarea placeholder='comment' className='border w-[100%] p-3' name="comment" id="" cols="30" rows="10" required></textarea>
            <input className='btn btn-primary' type="submit" value="Review" />
        </form>
    );
};

export default ReviewRoom;