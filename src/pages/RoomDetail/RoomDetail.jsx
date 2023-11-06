import { useLoaderData } from "react-router-dom";
import { GoChecklist } from 'react-icons/go';

const RoomDetail = () => {
    const roomDetail = useLoaderData();
    const { _id, location, title, description, price, room_size, availability, featured, available_seats, imageUrls, special_offers, booking, reviews } = roomDetail;

    return (
        <div className="w-[90%] lg:w-[80%] xl:w-[70%] mx-auto py-[80px]">
            <p className="text-3xl mb-3">{title}</p>
            <div className="flex gap-3 text-xl underline mb-3">
                <p>{reviews.length} reviews</p>
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
            <div>
                <h3 className="text-2xl my-3">What this place offers</h3>
                <ul className="space-y-1">
                    {
                        special_offers.map((offer, index) => <li key={index}><div className="flex items-center gap-3"><GoChecklist />{offer}</div></li>)
                    }
                </ul>
            </div>
            <hr className="my-3" />
        </div>
    );
};

export default RoomDetail;