import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

const SingleRoom = ({ room }) => {
    const { location, availability, title, price, imageUrls } = room;
    return (
        <div className="card w-96 justify-self-center">
            <figure className='rounded-xl'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    {
                        imageUrls.map(image => <SwiperSlide
                            key={image}
                        ><img className='h-[290px]' src={image} alt="Shoes" />
                        </SwiperSlide>)
                    }
                </Swiper>
            </figure>
            <div className="">
                <div className='flex justify-between mt-3 mb-1'>
                    <h2 className="card-title">
                        {location}
                        <span className="indicator-item badge badge-secondary">
                            {
                                availability ? "AVAILABLE" : "NOT AVAILABLE"
                            }
                        </span>
                    </h2>
                </div>
                <p className='mb-1'>{title}</p>
                <p><span className='font-semibold'>${price}</span> night</p>
                <Link to="/roomDetail" className='btn btn-sm btn-primary mt-1'>Details</Link>
            </div>
        </div>

    );
};

SingleRoom.propTypes = {
    room: PropTypes.object,
}

export default SingleRoom;