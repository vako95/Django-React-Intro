import "./PerosnalWrapper.css";
import { teamMembers } from "../../../../../../../constants/sections";
import { useParams } from "react-router-dom";
const PerosnalWrapper = () => {
    const { id } = useParams();
    const member = teamMembers.find((m) => m.id === id);

    if (!member) return <p>User not found</p>;
    return (
        <figure className="personal__detail-wrapper">
            <img
                className="personal__detail-wrapper-img"
                src={member.image}
                alt="Portrait of Frank Bruton"
            />
        </figure>
    )
}
export default PerosnalWrapper;