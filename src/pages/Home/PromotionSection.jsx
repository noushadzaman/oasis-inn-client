import { Link } from "react-router-dom"

const PromotionSection = () => {
    return (
        <div className="promotion-section mb-[150px]">
            <div className="h-full flex flex-col justify-center space-y-3 md:space-y-5 w-full pt-[90px]">
                <h2 className="text-white text-[20px] md:text-3xl lg:text-7xl font-semibold ml-10">Only at<br></br> Oasis Inn</h2>
                <p className="text-white text-[15px] md:text-[25px] ml-10">Love & Savings: 50% Off for Young Couples</p>
                <div className="flex">
                    <div className="tooltip tooltip-right mt-3 ml-10" data-tip="Only couples aged between 18-23 are eligible">
                        <Link to="/myBookings" className="btn bg-[#ccb89b] border-0 rounded-[2px] text-white">50% OFF</Link >
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PromotionSection;