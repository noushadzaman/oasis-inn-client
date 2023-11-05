import Banner from "./Banner";
import FeaturedRooms from "./FeaturedRooms";

const Home = () => {
    return (
        <div className="xl:px-[100px]">
            <Banner></Banner>
            <FeaturedRooms></FeaturedRooms>
        </div>
    );
};

export default Home;