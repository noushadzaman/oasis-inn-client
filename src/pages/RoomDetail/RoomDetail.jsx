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
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const { user } = useContext(AuthContext);
    const email = user?.email;
    let { _id, location, title, description, price, room_size, availability, featured, available_seats, imageUrls, special_offers, booking, reviews } = roomDetail;

    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //TODO booking 
    let isBooked = true;
    const today = moment().format("YYYY-MM-DD");
    let highestCheckOut;
    if (!booking?.length == 0) {
        highestCheckOut = booking[0]?.checkOut;
        for (let i = 0; i < booking.length; i++) {
            if (highestCheckOut < booking[i]?.checkOut) {
                highestCheckOut = booking[i]?.checkOut;
            }
        }
        if (today <= highestCheckOut) {
            isBooked = true;
        }
        else {
            isBooked = false
        }
    }
    else {
        isBooked = false;
    }
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //TODO booking 
    const datePicker = (e) => {
        e.preventDefault();
        const checkIn = formatDate(startDate);
        const checkOut = formatDate(endDate);
        if (checkIn <= today || checkOut <= today) {
            alert('cant book');
            return;
        }
        if (isBooked) {
            return alert("it is booked :)");
        }
        const bookingDates = {
            checkIn: checkIn,
            checkOut: checkOut
        }
        booking = [...booking, bookingDates];

        if (!isBooked) {
            const bookingInfo = {
                email,
                bookingDates,
                service_id: _id,
                price,
                location,
                description,
                image: imageUrls[0]
            }
            fetch('https://oasis-inn.web.app/bookings', {
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
            fetch(`https://oasis-inn.web.app/roomDetail/${_id}`, {
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
        } else {
            alert('booked')
        }

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
                                isBooked && <p>Booking will be available after: {highestCheckOut}</p>
                            }
                            <h3>From</h3>
                            <DatePicker
                                showIcon
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                            />
                            <h3>To</h3>
                            <DatePicker
                                showIcon
                                selected={endDate}
                                onChange={(date) => setEndDate(date)}
                            />
                            <p className="text-lg">Choose a date you want to book at <span>{location}</span></p>
                        </div>
                        <button
                            onClick={datePicker}
                            className="btn mb-5 mx-3 md:mx-8">Book now!</button>
                    </div>
                </div>
            </div>
            <ReviewRoom
                email={email}
                _id={_id}
            ></ReviewRoom>
            <ReviewContainer
                _id={_id}
            ></ReviewContainer>
        </div>
    );
};

export default RoomDetail;