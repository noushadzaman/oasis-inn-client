import { useEffect, useState } from "react";
import { Rating, RoundedStar } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { rating } from "@material-tailwind/react";

const ReviewContainer = ({ _id }) => {
    const [roomReviews, setRoomReviews] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?room_id=${_id}`, {
            method: "GET",
        })
            .then(res => res.json())
            .then(data => setRoomReviews(data))
    }, [])
    console.log(roomReviews);

    return (
        <div>
            {
                roomReviews.map(roomReview => <div
                    key={roomReview._id}
                >
                    <div className="">
                        <div className="flex gap-3">
                            <img src="" alt="" />
                            <div>
                                <p>{roomReview.name}</p>
                                <p>{roomReview.date}</p>
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={rating}
                                    readOnly
                                />
                            </div>
                        </div>
                        <p>{roomReview.comment}</p>
                    </div>
                </div>)
            }
        </div>
    );
};

export default ReviewContainer;