import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

function ThumbnailPlugin(mainRef) {
    return (slider) => {
        function removeActive() {
            slider.slides.forEach((slide) => {
                slide.classList.remove("active")
            })
        }
        function addActive(idx) {
            slider.slides[idx].classList.add("active")
        }

        function addClickEvents() {
            slider.slides.forEach((slide, idx) => {
                slide.addEventListener("click", () => {
                    if (mainRef.current) mainRef.current.moveToIdx(idx)
                })
            })
        }

        slider.on("created", () => {
            if (!mainRef.current) return
            addActive(slider.track.details.rel)
            addClickEvents()
            mainRef.current.on("animationStarted", (main) => {
                removeActive()
                const next = main.animator.targetIdx || 0
                addActive(main.track.absToRel(next))
                slider.moveToIdx(Math.min(slider.track.details.maxIdx, next))
            })
        })
    }
}



const RoomDetailsSlider = ({ imageUrls }) => {
    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
    })
    const [thumbnailRef] = useKeenSlider(
        {
            initial: 0,
            slides: {
                perView: 4,
                spacing: 10,
            },
        },
        [ThumbnailPlugin(instanceRef)]
    )

    return (
        <>
            <div ref={sliderRef} className="keen-slider">
                {
                    imageUrls.map((image, index) => <div
                        className="keen-slider__slide"
                        key={index}
                    >
                        <img className="h-[100%] rounded-[5px]" src={image} alt="" />
                    </div>)
                }
            </div>

            <div ref={thumbnailRef} className="keen-slider thumbnail mt-2">
                {
                    imageUrls.map((image, index) => <div
                        className="keen-slider__slide number-slide1"
                        key={index}
                    >
                        <img className="md:h-[120px] rounded-[5px]" src={image} alt="" />
                    </div>)
                }
            </div>
        </>
    );
};

export default RoomDetailsSlider;