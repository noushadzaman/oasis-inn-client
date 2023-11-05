import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const SwiperJs = () => {
    return (
        <div>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="h-full flex flex-col justify-center left-0 top-0 absolute space-y-3 md:space-y-5  w-full md:w-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">

                        <h2 className="text-white text-[20px] md:text-3xl lg:text-7xl font-semibold ml-10">Welcome to Oasis Inn</h2>
                        <p className="text-white text-[12px] md:text-xl ml-10">Your Gateway to Unwind and Relax</p>
                        <div className="flex">
                            <Link to="/rooms" className="py-1 btn bg-[#ccb89b] border-0 rounded-[2px] mr-5 text-white ml-10">Explore Our Rooms</Link>
                        </div>
                    </div>
                    <img src="https://i.ibb.co/gDKWnfx/ciudad-maderas-MXb-M1-Nr-Rqt-I-unsplash-1-1.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>

                    <div className="h-full flex flex-col justify-center left-0 top-0 absolute space-y-3 md:space-y-5  w-full md:w-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">

                        <h2 className="text-white text-[20px] md:text-3xl lg:text-7xl font-semibold ml-10">Book Your Stay at Oasis Inn</h2>
                        <p className="text-white text-[12px] md:text-xl ml-10">Escape to Serenity, Your Oasis Awaits</p>
                        <div className="flex">
                            <Link to="/rooms" className="py-1 btn bg-[#ccb89b] border-0 rounded-[2px] mr-5 text-white ml-10">Explore Our Rooms</Link>
                        </div>
                    </div>
                    <img src="https://i.ibb.co/gDKWnfx/ciudad-maderas-MXb-M1-Nr-Rqt-I-unsplash-1-1.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-full flex flex-col justify-center left-0 top-0 absolute space-y-3 md:space-y-5  w-full md:w-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">

                        <h2 className="text-white text-[20px] md:text-3xl lg:text-7xl font-semibold ml-10">Oasis Inn Reservations Made Easy</h2>
                        <p className="text-white text-[12px] md:text-xl ml-10">Discover Your Slice of Paradise</p>
                        <div className="flex">
                            <Link to="/rooms" className="py-1 btn bg-[#ccb89b] border-0 rounded-[2px] mr-5 text-white ml-10">Explore Our Rooms</Link>
                        </div>
                    </div>
                    <img src="https://i.ibb.co/gDKWnfx/ciudad-maderas-MXb-M1-Nr-Rqt-I-unsplash-1-1.jpg" alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default SwiperJs;

