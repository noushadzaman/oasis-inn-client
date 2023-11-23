import SingleRoom from "./SingleRoom";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import { useState } from "react";
const Rooms = () => {
    const [price, setPrice] = useState('');
    const axios = useAxios();

    const { data: allRooms, isLoading, isError } = useQuery({
        queryKey: ['room', price],
        queryFn: () => {
            return axios.get(`/rooms?sortField=price&sortOrder=${price}`);
        }
    })

    if (isLoading) {
        return <div className="w-[50px] mx-auto mt-[170px]">
            <div className="loading loading-spinner w-[100px]"></div>
        </div>
    }

    if (isError) {
        return <span>Error brooo:/</span>
    }

    return (
        <div className="flex justify-center">
            <div className="flex flex-col items-end gap-4 my-[10px]">
                <div className="flex gap-5">
                    <select
                        onChange={
                            (e) => setPrice(e.target.value)
                        }
                        className="input input-bordered">
                        <option disabled selected>Choose one</option>
                        <option value="asc">From low to high</option>
                        <option value="desc">From high to low</option>
                    </select>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-[50px]">
                    {
                        allRooms?.data?.map(room => <SingleRoom
                            key={room._id}
                            room={room}
                        ></SingleRoom>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Rooms;
