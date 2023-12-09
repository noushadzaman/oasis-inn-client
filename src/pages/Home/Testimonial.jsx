import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"


const Testimonial = () => {
    const [sliderRef] = useKeenSlider({
        slides: {
            perView: 2,
        },
    })

    return (
        <div className="mb-[50px]">
            <div ref={sliderRef} className="keen-slider">
                <div className="keen-slider__slide number-slide1">
                    <div className="flex flex-col  ml-5">
                        <div className="flex gap-5 items-center">
                            <div className="avatar">
                                <div className="w-[80px] h-[80px] rounded-full mx-auto">
                                    <img src="https://i.ibb.co/D88RqYg/frames-for-your-heart-Fqqi-Av-Jejto-unsplash-1.jpg" />
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <h1 className=' font-semibold'>Name:</h1>
                                <p className='mt-[15px] font-semibold'>Review:</p>
                            </div>
                        </div>
                    </div>
                </div>
               


            </div>
        </div>
    );
};

export default Testimonial;