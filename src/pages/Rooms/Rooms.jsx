import { useEffect, useState } from "react";
import SingleRoom from "./SingleRoom";


const Rooms = () => {
    const [allRooms, setAllRooms] = useState([])

    useEffect(() => {
        fetch('https://oasis-inn.web.app/rooms')
            .then(res => res.json())
            .then(data => {
                setAllRooms(data);
            })
    }, [])
    // useEffect(() => {
    //     fetch('../../../rooms.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             setAllRooms(data);
    //         })
    // }, [])

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 my-[150px] gap-[50px]">
            {
                allRooms.map(room => <SingleRoom
                    key={room.title}
                    room={room}
                ></SingleRoom>)
            }
        </div>
    );
};

export default Rooms;