import Banner from "./Banner";
import FeaturedRooms from "./FeaturedRooms";
import PromotionSection from "./PromotionSection";
import Testimonial from "./Testimonial";

const Home = () => {
    return (
        <div className="xl:px-[100px]">
            <Banner></Banner>
            <FeaturedRooms></FeaturedRooms>
            <PromotionSection></PromotionSection>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;