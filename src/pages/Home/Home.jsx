import FeaturedRooms from "./FeaturedRooms";
import PromotionSection from "./PromotionSection";
import SwiperJs from "./SwiperJs";
import Testimonial from "./Testimonial";

const Home = () => {
    return (
        <div className="xl:px-[100px]">
            <SwiperJs></SwiperJs>
            <FeaturedRooms></FeaturedRooms>
            <PromotionSection></PromotionSection>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;