import { useEffect, useState } from "react";
import { Rating, RoundedStar } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { rating } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAxios from "../../hooks/useAxios";

const ReviewContainer = ({ _id }) => {
    const axios = useAxios();


    const { data: reviews, isLoading, isError } = useQuery({
        queryKey: ["reviews"],
        queryFn: () => axios.get(`/reviews?room_id=${_id}`)
    })

    if (isLoading) {
        <span className="loading loading-dots loading-lg"></span>
    }

    if (isError) {
        <span className="text-2xl">ERROR BROOO..........</span>
    }
    console.log(reviews?.data)

    return (
        <div className="grid md:grid-cols-2 gap-[50px] mt-[60px]">
            {
                reviews?.data?.map(roomReview => <div
                    key={roomReview._id}
                >
                    <div className="border p-5">
                        <div className="flex gap-3">
                            <img className="w-[50px] h-[50px] rounded-full" src="https://i.ibb.co/HCB91k8/room12img3.webp" alt="" />
                            <div>
                                <p>{roomReview.name}</p>
                                <p>{roomReview.date}</p>
                            </div>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={roomReview.rating}
                                readOnly
                            />
                        </div>
                        <p className="text-[18px] my-2 mx-4">{roomReview.comment}</p>
                    </div>
                </div>)
            }
        </div>
    );
};

export default ReviewContainer;