import { useState } from "react";
import { data } from "./data"
import { TestimonialStyled } from "./components/styles/Testimonial.styled";

export default function Testimonial() {
    const [activeIndex, setActiveIndex] = useState(0)
    function handlePrevious() {
        if (activeIndex === 0) {
            return;
        }
        setActiveIndex((index) => index - 1)
    }

    function handleNext() {
        if (data.length - 1 === activeIndex) {
            return;
        }
        setActiveIndex((index) => index + 1)
    }

    return (
        <TestimonialStyled>
            <div className="image-wrapper">
                <img src={data[activeIndex].picture} alt="author picture" />
                <div className="buttons">
                    <button onClick={handlePrevious}><img src="/images/icon-prev.svg" alt="previous-testimonial" /></button>
                    <button onClick={handleNext}><img src="/images/icon-next.svg" alt="next-testimonial" /></button>
                </div>
            </div>
            <div className="testimonial-wrapper">
                <p>{data[activeIndex].testimonial}</p>
                <div className="author">
                    <span>{data[activeIndex].author}</span>
                    <small>{data[activeIndex].position}</small>
                </div>
            </div>
        </TestimonialStyled>

    )
}