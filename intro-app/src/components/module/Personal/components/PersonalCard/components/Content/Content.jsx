import { Link } from "react-router-dom";
import "./Content.css";

const Content = ({ role, name, id }) => {

    return (
        <div className="personal__card-member">
            <h5 className="personal__card-member-title">
                {role}
            </h5>
            <Link to={`/team/${id}`} className="personal__card-member-link">
                {name}
            </Link>
        </div>
    )
}
export default Content;