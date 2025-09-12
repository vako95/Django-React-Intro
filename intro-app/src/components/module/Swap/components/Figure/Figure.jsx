import "./Figure.css";
import Feature from "./assets/img/feature-1.jpeg";
const Figure = () => {

    return (
        <figure className="swap__figure">
            <div className="swap__figure-wrapper">
                <img className="swap__figure-img" src={Feature} alt="" />
            </div>
        </figure>
    )
}

export default Figure