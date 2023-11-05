import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


const FeaturedRooms = () => {
    return (
        <div className='my-[80px]'>
            <h1 className='text-black text-center text-[20px] md:text-4xl lg:text-5xl font-semibold ml-10 mb-[15px]'>Featured Premium Rooms</h1>
            <p className='text-black text-center text-[12px] md:text-xl ml-10 mb-[15px]'>Experience the Pinnacle of Comfort and Elegance</p>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide><img className='max-w-[450px] h-[300px] object-cover' src="https://i.ibb.co/D88RqYg/frames-for-your-heart-Fqqi-Av-Jejto-unsplash-1.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='max-w-[450px] h-[300px] object-cover' src="https://i.ibb.co/gDKWnfx/ciudad-maderas-MXb-M1-Nr-Rqt-I-unsplash-1-1.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='max-w-[450px] h-[300px] object-cover' src="https://i.ibb.co/D88RqYg/frames-for-your-heart-Fqqi-Av-Jejto-unsplash-1.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='max-w-[450px] h-[300px] object-cover' src="https://i.ibb.co/D88RqYg/frames-for-your-heart-Fqqi-Av-Jejto-unsplash-1.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='max-w-[450px] h-[300px] object-cover' src="https://i.ibb.co/D88RqYg/frames-for-your-heart-Fqqi-Av-Jejto-unsplash-1.jpg" alt="" /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default FeaturedRooms;