import Cover from "./components/Cover/Cover.jsx";
import Decorate from "./components/Decorate/Decorate.jsx";
import "./Content.css";

const Content = ({ item }) => {

    return (
        <article className="swap__content">
            <div className="swap__content-box">
                <div className="swap__heading">
                    <div className="swap__holder">
                        <Decorate item={item} />
                        <Cover />
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Content;