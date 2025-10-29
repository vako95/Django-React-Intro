import "./Figure.css";
// import Feature from "./assets/img/feature-1.jpeg";
const Figure = ({ item }) => {

    return (
        <figure className="swap__figure">
            <div className="swap__figure-wrapper">
                <img className="swap__figure-img" src={item.cover} alt="" />
            </div>
        </figure>
    )
}

export default Figure