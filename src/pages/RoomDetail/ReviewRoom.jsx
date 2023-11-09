import { Rating, RoundedStar } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { useContext, useEffect, useState } from "react";
import { AuthContext } from '../../provider/AuthProvider';
import moment from 'moment';
import { json } from 'react-router-dom';

const myStyles = {
    itemShapes: RoundedStar,
    activeFillColor: '#ffb700',
    inactiveFillColor: '#fbf1a9'
}

const ReviewRoom = ({ email, _id }) => {
    const { user } = useContext(AuthContext);
    const name = user?.displayName;
    const [myBookings, setMyBookings] = useState([]);
    const [rating, setRating] = useState(0);
    // TODO check if userBooked ?
    useEffect(() => {
        fetch(`http://localhost:5000/bookings?email=${email}`)
            .then(res => res.json())
            .then(data => {
                setMyBookings(data);
            })
    }, [email]);
    let doesExistOnBooking;
    const booked = myBookings.find(myBooking => myBooking._id == _id);
    if (booked) {
        doesExistOnBooking = true;
    }
    // TODO check if userBooked ?
    const date = moment().format('D MMMM YYYY');

    const handleReview = (e) => {
        e.preventDefault();
        const comment = e.target.comment.value;
        const reviewInfo = {
            room_id: _id,
            name,
            rating,
            comment,
            date
        }

        fetch(`http://localhost:5000/reviews`, {
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