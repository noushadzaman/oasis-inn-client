import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { Link } from "react-router-dom";

const Banner = () => {
    const [sliderRef] = useKeenSlider(
        {
            loop: true,
        },
        [
            (slider) => {
                let timeout
                let mouseOver = false
                function clearNextTimeout() {
                    clearTimeout(timeout)
                }
                function nextTimeout() {
                    clearTimeout(timeout)
                    if (mouseOver) return
                    timeout = setTimeout(() => {
                        slider.next()
                    }, 1500)
                }
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = true
                        clearNextTimeout()
                    })
                    slider.container.addEventListener("mouseout", () => {
                        mouseOver = false
                        nextTimeout()
                    })
                    nextTimeout()
                })
                slider.on("dragStarted", clearNextTimeout)
                slider.on("animationEnded", nextTimeout)
                slider.on("updated", nextTimeout)
            },
        ]
    )

    return (
        <div ref={sliderRef} className="keen-slider">

            <div className="keen-slider__slide number-slide1">
                <div className="h-full flex flex-col justify-center left-0 top-0 absolute space-y-3 md:space-y-5  w-full md:w-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">

                    <h2 className="text-white text-[20px] md:text-3xl lg:text-7xl font-semibold ml-10">Welcome to Oasis Inn</h2>
                    <p className="text-white text-[12px] md:text-xl ml-10">Your Gateway to Unwind and Relax</p>
                    <div className="flex">
                        <Link to="/rooms" className="py-1 button-primari bg-[#ccb89b] border-0 rounded-[2px] mr-5 text-white ml-10">Explore Our Rooms</Link>
                    </div>
                </div>
                <img className="h-full" src="https://i.ibb.co/jkZHZWq/bryan-angelo-1-Jt-f-Mmw9-E-unsplash.jpg" alt="" />
            </div>

            <div className="keen-slider__slide number-slide2">

                <div className="h-full flex flex-col justify-center left-0 top-0 absolute space-y-3 md:space-y-5  w-full md:w-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">

                    <h2 className="text-white text-[20px] md:text-3xl lg:text-7xl font-semibold ml-10">Oasis Inn Reservations Made Easy</h2>
                    <p className="text-white text-[12px] md:text-xl ml-10">Escape to Serenity, Your Oasis Awaits</p>
                    <div className="flex">
                        <Link to="/rooms" className="py-1 button-primari bg-[#ccb89b] border-0 rounded-[2px] mr-5 text-white ml-10">Explore Our Rooms</Link>
                    </div>
                </div>
                <img className="h-full" src="https://i.ibb.co/dGHr7Rf/sara-dubler-Koei-7y-Yt-Io-unsplash.jpg" alt="" />
            </div>

            <div className="keen-slider__slide number-slide3">
                <div className="h-full flex flex-col justify-center left-0 top-0 absolute space-y-3 md:space-y-5  w-full md:w-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">

                    <h2 className="text-white text-[20px] md:text-3xl lg:text-7xl font-semibold ml-10">Book Your Stay at Oasis Inn</h2>
                    <p className="text-white text-[12px] md:text-xl ml-10">Discover Your Slice of Paradise</p>
                    <div className="flex">
                        <Link to="/rooms" className="py-1 button-primari bg-[#ccb89b] border-0 rounded-[2px] mr-5 text-white ml-10">Explore Our Rooms</Link>
                    </div>
                </div>
                <img className="h-full" src="https://i.ibb.co/jgxQSZ2/asael-pena-6-upk8tng-HI-unsplash.jpg" alt="" />
            </div>
        </div>
    );
};

export default Banner;