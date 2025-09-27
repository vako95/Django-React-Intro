import { Container } from "@components/ui"

import "./PersonalDetail.css";
import { Link } from "react-router-dom";

const PersonalDetail = () => {

    return (
        <Container>
            <section className="personal__detail">
                <div className="personal__detail-container">
                    .personal__detail-
                    <figure className="personal__detail-column-wrapper">
                        <img className="personal__detail-column-img" src="https://dev24.kodesolution.com/hoexr/wp-content/uploads/2023/11/team1.jpg" alt="" />
                    </figure>
                    <div className="personal__detail-column-content">
                        <h4 className="personal__detail-column-content-title">
                            Expertise & Skills
                        </h4>
                        <span className="personal__detail-column-content-desc">
                            Bring to the table win-win at survival strategies win to ensure with proactiv other domination going with forward, a new normal that has evolved from generation X is on the streamled solution

                        </span>
                        <span className="personal__detail-column-content-desc">
                            Bring to the table win-win at survival strategies win to ensure with proactiv other domination going with forward, a new normal that has evolved from generation X is on the streamled solution

                        </span>
                    </div>
                </div>

                <div className="personal__detail-column-heading">
                    <h4 className="personal__detail-column-heading-name">
                        Frank Bruton
                    </h4>
                    <p className="personal__detail-column-heading-desc">
                        Bring to the table win-win survival strategies to ensure proactive which domination.
                        At the end of the day going new normal
                    </p>
                </div>
                <ul className="personal__detail-column-list">
                    <li className="personal__detail-column-item">
                        <strong className="personal__detail-column-item-label">Email:</strong>
                        <span className="personal__detail-column-item-value">info@yourdomain.com</span>
                    </li>
                    <li className="personal__detail-column-item">
                        <strong className="personal__detail-column-item-label">Blood Group:</strong>
                        <span className="personal__detail-column-item-value">AB+</span>
                    </li>
                    <li className="personal__detail-column-item">
                        <strong className="personal__detail-column-item-label">Phone:</strong>
                        <span className="personal__detail-column-item-value">+012-3456-789</span>
                    </li>
                    <li className="personal__detail-column-item">
                        <strong className="personal__detail-column-item-label">Age:</strong>
                        <span className="personal__detail-column-item-value">25 Years</span>
                    </li>
                    <li className="personal__detail-column-item">
                        <strong className="personal__detail-column-item-label">Website:</strong>
                        <span className="personal__detail-column-item-value">www.yourdomain.com</span>
                    </li>
                    <li className="personal__detail-column-item">
                        <strong className="personal__detail-column-item-label">Address:</strong>
                        <span className="personal__detail-column-item-value">121 King Street, Melbourne</span>
                    </li>
                </ul>


                <ul className="personal__detail-column-socials">
                    <li className="personal__detail-column-social">
                        <Link className="personal__detail-column-social-link">
                            <i class="personal__detail-column-social-icon ri-twitter-x-fill"></i>
                        </Link>
                    </li>
                    <li className="personal__detail-column-social">
                        <Link className="personal__detail-column-social-link">

                            <i className="personal__detail-column-social-icon ri-facebook-fill"></i>
                        </Link>
                    </li>
                    <li className="personal__detail-column-social">
                        <Link className="personal__detail-column-social-link">
                            <i className="personal__detail-column-social-icon ri-youtube-fill"></i>
                        </Link>
                    </li>
                    <li className="personal__detail-column-social">
                        <Link className="personal__detail-column-social-link">
                            <i className="personal__detail-column-social-icon ri-instagram-fill"></i>
                        </Link>
                    </li>
                </ul>
                <div className="personal__detail-column-content">
                    <h4 className="personal__detail-column-content-title">
                        Expertise & Skills
                    </h4>
                    <div className="personal__detail-column-content-skills">

                    </div>
                </div>


            </section>
        </Container>
    )
}

export default PersonalDetail;