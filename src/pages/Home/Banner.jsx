import SwiperJs from "./SwiperJs";


const Banner = () => {
    return (
        <div>
            {/* <SwiperJs></SwiperJs> */}
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/gDKWnfx/ciudad-maderas-MXb-M1-Nr-Rqt-I-unsplash-1-1.jpg" className="w-full" />
                    <div className="absolute hidden md:flex justify-end md:gap-24 gap-2 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide3" className="btn btn-circle bg-[#ccb89b] border-0">❮</a>
                        <a href="#slide2" className="btn btn-circle bg-[#ccb89b] border-0">❯</a>
                    </div>

                    <div className="h-full flex flex-col justify-center left-0 top-0 absolute space-y-3 md:space-y-5  w-full md:w-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">

                        <h2 className="text-white text-[20px] md:text-3xl lg:text-7xl font-semibold ml-10">Welcome to Oasis Inn</h2>
                        <p className="text-white text-[12px] md:text-xl ml-10">Your Gateway to Unwind and Relax</p>
                        <div>
                            <a href="#slide3" className="py-1 btn bg-[#ccb89b] border-0 rounded-[2px] mr-5 text-white ml-10">Explore Our Rooms</a>
                        </div>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/gDKWnfx/ciudad-maderas-MXb-M1-Nr-Rqt-I-unsplash-1-1.jpg" className="w-full" />
                    <div className="absolute hidden  md:flex justify-end md:gap-24 gap-2 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle bg-[#ccb89b] border-0">❮</a>
                        <a href="#slide3" className="btn btn-circle bg-[#ccb89b] border-0">❯</a>
                    </div>
                    <div className="h-full flex flex-col justify-center left-0 top-0 absolute space-y-3 md:space-y-5  w-full md:w-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <h2 className="text-white text-[20px] md:text-3xl lg:text-7xl font-semibold ml-10">Book Your Stay at Oasis Inn</h2>
                        <p className="text-white text-[12px] md:text-xl ml-10">Escape to Serenity, Your Oasis Awaits</p>
                        <div>
                            <a href="#slide1" className="py-1 btn bg-[#ccb89b] border-0 rounded-[2px] mr-5 text-white ml-10">Explore Our Rooms</a>
                        </div>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/gDKWnfx/ciudad-maderas-MXb-M1-Nr-Rqt-I-unsplash-1-1.jpg" className="w-full" />
                    <div className="absolute hidden  md:flex justify-end md:gap-24 gap-2 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide2" className="btn btn-circle bg-[#ccb89b] border-0">❮</a>
                        <a href="#slide1" className="btn btn-circle bg-[#ccb89b] border-0">❯</a>
                    </div>
                    <div className="h-full flex flex-col justify-center left-0 top-0 absolute space-y-3 md:space-y-5  w-full md:w-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <h2 className="text-white text-[20px] md:text-3xl lg:text-7xl font-semibold ml-10">Oasis Inn Reservations Made Easy</h2>
                        <p className="text-white text-[12px] md:text-xl ml-10">Discover Your Slice of Paradise</p>
                        <div>
                            <a href="#slide2" className="py-1 btn bg-[#ccb89b] border-0 rounded-[2px] mr-5 text-white ml-10">Explore Our Rooms</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;