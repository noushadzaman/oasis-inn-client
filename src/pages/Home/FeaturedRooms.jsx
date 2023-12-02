import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const FeaturedRooms = () => {
    const [allRooms, setAllRooms] = useState([]);
    const [featuredRooms, setFeaturedRooms] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://oasis-inn-server.vercel.app/rooms')
            .then(res => res.json())
            .then(data => setAllRooms(data))
    }, []);

    useEffect(() => {
        if (allRooms) {
            const featuredRooms = allRooms.filter(room => room.featured === true);
            setFeaturedRooms(featuredRooms);
        }
    }, [allRooms]);

    return (
        <div className='my-[80px]'>
            <h1 className='text-[#B99D75] text-center text-[20px] md:text-4xl lg:text-5xl font-semibold ml-10 mb-[15px] '>Featured Premium Rooms</h1>
            <p className='text-black text-center text-[12px] md:text-xl ml-10 mb-[15px]'>Experience the Pinnacle of Comfort and Elegance</p>
            {/* <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    featuredRooms.map(featuredRoom => <SwiperSlide
                        key={featuredRoom}
                    >
                        <img
                            onClick={navigate(`/roomDetail/${featuredRoom._id}`)}
                            className='max-w-[450px] h-[100px] md:h-[300px] object-cover rounded-lg' src={featuredRoom.imageUrls[0]} alt="" />
                    </SwiperSlide>)
                }
            </Swiper> */}
        </div>
    );
};

export default FeaturedRooms;