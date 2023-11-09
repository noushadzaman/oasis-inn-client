import { useLoaderData } from "react-router-dom";
import { GoChecklist } from 'react-icons/go';
import moment from 'moment';
import { useContext, useEffect } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css"
import formatDate from "../../utilities/DateFormater";
import ReviewRoom from "./ReviewRoom";
import ReviewContainer from "./ReviewContainer";

const RoomDetail = () => {
    const roomDetail = useLoaderData();
    const [date, setDate] = useState(new Date());
    const { user } = useContext(AuthContext);
    const email = user?.email;
    let { _id, location, title, description, price, room_size, availability, featured, available_seats, imageUrls, special_offers, booking, reviews } = roomDetail;
    console.log(booking)

    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //TODO booking 
    let isBooked;
    const today = moment().format("YYYY-MM-DD");
    if (booking.length <= 0) {
        isBooked = false;
    }
    else {
        const booked = booking.find(singleBooking => singleBooking == today);
        console.log(booked)
        if (booked) {
            isBooked = true;
        }
        else {
            isBooked = false;
        }
    }
    console.log(isBooked)

    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //TODO booking 
    const datePicker = (e) => {
        e.preventDefault();
        const bookedDate = formatDate(date);
        booking = [...booking, bookedDate];
        const bookingInfo = {
            email,
            bookedDate,
            service_id: _id,
            price,
            location,
            description,
            image: imageUrls[0]
        }
        fetch('http://localhost:5000/bookings', {
            method: "POST",
            headers: {
                "content-type": "Application/json"
            },
            body: JSON.stringify(bookingInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
        fetch(`http://localhost:5000/roomDetail/${_id}`, {
            method: "PATCH",
            headers: {
                "content-type": "Application/json"
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })


    }
    //TODO booking 
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    return (
        <div className="w-[90%] lg:w-[80%] xl:w-[70%] mx-auto py-[80px]">
            <p className="text-3xl mb-3">{title}</p>
            <div className="flex gap-3 text-xl underline mb-3">
                <p>{reviews?.length} reviews</p>
                <p>{location}</p>
            </div>
            <div className="grid grid-cols-9 grid-rows-2 gap-[3px] md:gap-[10px] ">
                {
                    imageUrls.map(imageUrl => <img
                        key={imageUrl}
                        src={imageUrl}
                        className={`h-full  ${imageUrl == imageUrls[2] ? "rounded-tr-lg" : ""} ${imageUrl == imageUrls[4] && "rounded-br-lg"} ${imageUrl == imageUrls[0] ? 'col-span-5 row-span-2 rounded-l-xl' : 'col-span-2 row-span-1'}`}
                    ></img>)
                }
            </div>
            <div>
                <h3 className="text-2xl mt-6 mb-3">About this place</h3>
                <p>{description}</p>
            </div>
            <hr className="my-3" />
            <div className="flex justify-between">
                <div className="w-[50%]">
                    <h3 className="text-2xl my-3">What this place offers</h3>
                    <ul className="space-y-1">
                        {
                            special_offers.map((offer, index) => <li key={index}><div className="flex items-center gap-3"><GoChecklist />{offer}</div></li>)
                        }
                    </ul>
                    <hr className="my-3" />

                </div>
                <div>
                    <div
                        className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <div className="flex justify-between">
                                <h2 className="card-title mb-5">Per Night ${price}</h2>
                                <h2 className="card-title mb-5">Reviews: {reviews.length}</h2>
                            </div>
                            {
                                // isBooked && <p>Booking will be available after: {highestCheckOut}</p>
                            }
                            <h3>From</h3>
                            <DatePicker
                                showIcon
                                selected={date}
                                onChange={(date) => setDate(date)}
                            />
                            {
                                !isBooked ?
                                    <p className="text-lg">Choose a date you want to book at <span>{location}</span></p>
                                    :
                                    <p className="text-lg">SORRY!!!!!!! The Room is booked!<span></span></p>
                            }
                        </div>
                        {
                            !isBooked ?
                                <button
                                    onClick={datePicker}
                                    className="btn mb-5 mx-3 md:mx-8">Book now!</button>
                                : <button
                                    className="btn mb-5 mx-3 md:mx-8" disabled>Booked</button>
                        }
                    </div>
                </div>
            </div>
            {/* <ReviewRoom
                email={email}
                _id={_id}
            ></ReviewRoom>
            <ReviewContainer
                _id={_id}
            ></ReviewContainer> */}
        </div>
    );
};

export default RoomDetail;