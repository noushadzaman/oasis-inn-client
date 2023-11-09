import { useEffect, useState } from "react";
import SingleRoom from "./SingleRoom";

const Rooms = () => {
    const [allRooms, setAllRooms] = useState([]);
    const [selectedValue, setSelectedValue] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/rooms')
            .then(res => res.json())
            .then(data => {
                setAllRooms(data);
            })
    }, []); 

    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
    };

    useEffect(() => {
        if (selectedValue === 'option1') {
            const sorted = [...allRooms].sort((a, b) => parseInt(b.price) - parseInt(a.price));
            setAllRooms(sorted);
        } else if (selectedValue === 'option2') {
            const sorted = [...allRooms].sort((a, b) => parseInt(a.price) - parseInt(b.price));
            setAllRooms(sorted);
        }
    }, [selectedValue]); 

    return (
        <div>
            <div className="flex gap-5">
                <select className="select select-secondary w-full max-w-xs" onChange={handleSelectChange}>
                    <option disabled defaultValue>Default</option>
                    <option value="option1">Price High To Low</option>
                    <option value="option2">Price Low To High</option>
                </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 my-[150px] gap-[50px]">
                {
                    allRooms.map(room => <SingleRoom
                        key={room.title}
                        room={room}
                    ></SingleRoom>)
                }
            </div>
        </div>
    );
};

export default Rooms;
