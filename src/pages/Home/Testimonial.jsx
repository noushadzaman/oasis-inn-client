import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Testimonial = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='flex flex-col justify-center items-center'>
                        <div className="avatar">
                            <div className="w-[25%] rounded-full mx-auto">
                                <img src="https://i.ibb.co/D88RqYg/frames-for-your-heart-Fqqi-Av-Jejto-unsplash-1.jpg" />
                            </div>
                        </div>
                        <h1 className='mt-[35px] font-semibold'>Name:</h1>
                        <p className='mt-[15px] font-semibold'>Rating:</p>
                        <p className='mt-[15px] font-semibold'>Comment:</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col justify-center items-center'>
                        <div className="avatar">
                            <div className="w-[25%] rounded-full mx-auto">
                                <img src="https://i.ibb.co/D88RqYg/frames-for-your-heart-Fqqi-Av-Jejto-unsplash-1.jpg" />
                            </div>
                        </div>
                        <h1 className='mt-[35px] font-semibold'>Name:</h1>
                        <p className='mt-[15px] font-semibold'>Rating:</p>
                        <p className='mt-[15px] font-semibold'>Comment:</p>
                    </div>
                </SwiperSlide>
                <div className="autoplay-progress text-white" slot="container-end">
                    <svg viewBox="0 0 0 0" ref={progressCircle}>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </div>
    );
};

export default Testimonial;