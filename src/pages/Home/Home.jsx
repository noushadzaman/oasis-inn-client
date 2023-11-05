import Banner from "./Banner";
import FeaturedRooms from "./FeaturedRooms";
import PromotionSection from "./PromotionSection";

const Home = () => {
    return (
        <div className="xl:px-[100px]">
            <Banner></Banner>
            <FeaturedRooms></FeaturedRooms>
            <PromotionSection></PromotionSection>
        </div>
    );
};

export default Home;