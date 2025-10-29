import { FadeInRight } from "@components/animation"
import SliderRaiting from "../SlideRaiting/SlideRaiting";
import "./Slider.css";
const Slider = ({ slide }) => {

    return (
        <div className="slide-content">

            <div className="slide-content-wrapper">
                <img
                    src={slide.img}
                    alt="Reviewer"
                    className="slide-content-cover"
                />
            </div>


            <div className="slide-review">
                <div className="slide-review-stars">
                    <SliderRaiting rating={slide.rating} />
                </div>
                <div className="slide-review-comment">
                    <span className="slide-review-comment-desc">
                        {slide.desc}
                    </span>
                    <cite className="slide-review-comment-author">{slide.author}</cite>
                    <strong className="slide-review-comment-role">{slide.role}</strong>
                </div>
            </div>

        </div>
    )
}

export default Slider;