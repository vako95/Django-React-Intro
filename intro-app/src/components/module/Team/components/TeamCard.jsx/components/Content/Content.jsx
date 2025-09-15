import { Link } from "react-router-dom";
import "./Content.css";

const Content = ({ role, name }) => {

    return (
        <div className="team__card-member">
            <h5 className="team__card-member-title">
                {role}
            </h5>
            <Link className="team__card-member-link">
                {name}
            </Link>
        </div>
    )
}
export default Content;