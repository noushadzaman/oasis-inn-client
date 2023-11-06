import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';

const SingleRoom = ({ room }) => {
    const { _id, location, availability, title, price, imageUrls, reviews } = room;
    const navigate = useNavigate();

    return (
        <div
            onClick={() => navigate(`/roomDetail/${_id}`)}
            className="card w-96 justify-self-center cursor-pointer">
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
                <div className='flex mt-3 justify-between mb-1'>
                    <div className="card-title">
                        {location}
                    </div>
                    <div className="indicator-item badge rounded-lg badge-secondary whitespace-nowrap">
                        {
                            availability ? "AVAILABLE" : "NOT AVAILABLE"
                        }
                    </div>
                </div>
                <p className='mb-1'>{title}</p>
                <div className='flex justify-between items-center'>
                    <p><span className='font-semibold'>${price}</span> night</p>
                    {
                        !reviews.length > 0 ?
                            <div className="indicator-item badge rounded-lg badge-secondary">{reviews.length}</div>
                            : ""
                    }
                </div>
            </div>
        </div>

    );
};

SingleRoom.propTypes = {
    room: PropTypes.object,
}

export default SingleRoom;