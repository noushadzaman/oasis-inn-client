import { useEffect, useState } from "react";
import SingleRoom from "./SingleRoom";


const Rooms = () => {
    const [allRooms, setAllRooms] = useState([])

    useEffect(() => {
        fetch('../../../rooms.json')
            .then(res => res.json())
            .then(data => {
                setAllRooms(data);
            })
    }, [])
    console.table(allRooms);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mt-[250px] gap-[50px]">
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