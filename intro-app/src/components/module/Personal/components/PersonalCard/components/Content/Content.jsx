import { Link } from "react-router-dom";
import "./Content.css";

const Content = ({ role, name }) => {

    return (
        <div className="personal__card-member">
            <h5 className="personal__card-member-title">
                {role}
            </h5>
            <Link className="personal__card-member-link">
                {name}
            </Link>
        </div>
    )
}
export default Content;