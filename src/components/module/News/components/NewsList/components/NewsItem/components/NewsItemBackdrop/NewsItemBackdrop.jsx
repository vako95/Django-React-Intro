

import "./NewsItemBackdrop.css";

const NewsItemBackdrop = ({ image }) => {

    return (
        <div className="news__item-backdrop">
            <img className="news__item-backdrop-img" src={image.src} alt="" />
        </div>
    )
}

export default NewsItemBackdrop;