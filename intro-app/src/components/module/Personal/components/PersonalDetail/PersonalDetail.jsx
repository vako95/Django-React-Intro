import { Container } from "@components/ui"

import "./PersonalDetail.css";
import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";

const PersonalDetail = () => {
    const ref = useRef();
    const [isVisible, setIsVisible] = useState(false);
    const [progress, setProgress] = useState(40);

    useEffect(() => {

        const observer = new IntersectionObserver(
            ([entry]) => {
                console.log("rr", entry);
                if (entry.isIntersecting)
                    setIsVisible(entry.isIntersecting);
            }, {
            threshold: 0.5,

        }
        );
        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => {
            if (ref.current) observer.unobserve(ref.current);
            observer.disconnect();
        }

    }, []);

    // useEffect(() => {
    //     const start = null;
    //     const count = 40;
    //   if()
    // },[]) 

    return (
        <Container>
            <section className="personal__detail">
                <div className="personal__detail-area">
                    <figure className="personal__detail-wrapper">
                        <img
                            className="personal__detail-wrapper-img"
                            src="https://dev24.kodesolution.com/hoexr/wp-content/uploads/2023/11/team1.jpg"
                            alt="Portrait of Frank Bruton"
                        />
                    </figure>

                    <article className="personal__detail-content">
                        <div className="personal__detail-content-heading">
                            <h2 className="personal__detail-name">Frank Bruton</h2>
                            <p className="personal__detail-desc">
                                Bring to the table win-win survival strategies to ensure proactive which domination.
                                At the end of the day going new normal
                            </p>
                        </div>


                        <ul className="personal__detail-info">
                            <li className="personal__detail-info-item">
                                <strong className="personal__detail-info-item-label">
                                    Email:
                                </strong >
                                <span className="personal__detail-info-item-value">
                                    info@yourdomain.com
                                </span>
                            </li>
                            <li className="personal__detail-info-item">
                                <strong className="personal__detail-info-item-label">
                                    Blood Group:
                                </strong>
                                <span className="personal__detail-info-item-value">
                                    AB+
                                </span>
                            </li>
                            <li className="personal__detail-info-item">
                                <strong className="personal__detail-info-item-label">
                                    Phone:
                                </strong>
                                <span className="personal__detail-info-item-value">
                                    +012-3456-789
                                </span>
                            </li>
                            <li className="personal__detail-info-item">
                                <strong className="personal__detail-info-item-label">
                                    Age:
                                </strong>
                                <span className="personal__detail-info-item-value">
                                    25 Years
                                </span>
                            </li>
                            <li className="personal__detail-info-item">
                                <strong className="personal__detail-info-item-label">
                                    Website:
                                </strong>
                                <span className="personal__detail-info-item-value">  www.yourdomain.com</span>
                            </li>
                            <li className="personal__detail-info-item">
                                <strong className="personal__detail-info-item-label">
                                    Address:
                                </strong>
                                <span className="personal__detail-info-item-value">  121 King Street, Melbourne</span>
                            </li>
                        </ul>

                        <ul className="personal__detail-info-socials">
                            <li className="personal__detail-info-social">
                                <Link className="personal__detail-info-social-link">
                                    <i className="personal__detail-info-social-icon ri-twitter-x-fill"></i>
                                </Link>
                            </li>
                            <li className="personal__detail-info-social">
                                <Link className="personal__detail-info-social-link">
                                    <i className="personal__detail-info-social-icon ri-facebook-fill"></i>
                                </Link>
                            </li>
                            <li className="personal__detail-info-social">
                                <Link className="personal__detail-info-social-link">
                                    <i className="personal__detail-info-social-icon ri-youtube-fill"></i>
                                </Link>
                            </li>
                            <li className="personal__detail-info-social">
                                <Link className="personal__detail-info-social-link">
                                    <i className="personal__detail-info-social-icon ri-instagram-fill"></i>
                                </Link>
                            </li>
                        </ul>
                    </article>


                    <article className="personal__detail-skills">
                        <div className="personal__detail-skills-heading">
                            <h4 className="personal__detail-skills-title">Expertise & Skills</h4>
                        </div>

                        <div className="personal__detail-skills-content">
                            <span className="personal__detail-skills-desc">
                                Bring to the table win-win at survival strategies win to ensure with proactiv other domination going with forward,
                                a new normal that has evolved from generation
                                X is on the streamled solution
                            </span>
                            <span className="personal__detail-skills-desc">
                                Bring to the table win-win at survival strategies win to ensure with proactiv other domination going with forward,
                                a new normal that has evolved from generation
                                X is on the streamled solution
                            </span>
                        </div>


                    </article>


                    <section className="personal__detail-skills">
                        <div className="personal__detail-skills-heading">
                            <h4 className="personal__detail-skills-title">Expertise & Skills</h4>
                        </div>
                        <ul className="personal__detail-skills-list">
                            <li className="personal__detail-skills-item" ref={ref}>
                                <div className="personal__detail-skills-content">
                                    <span className="personal__detail-skills-name">Executive Chef</span>
                                    <span className="personal__detail-skills-value">{progress}%</span>
                                </div>
                                <div className="personal__detail-skills-bar" >

                                    <div className="personal__detail-skills-progress" style={{ width: isVisible ? `${progress}%` : "0%" }}>

                                    </div>


                                </div>
                            </li>
                            <li className="personal__detail-skills-item">
                                <div className="personal__detail-skills-content">
                                    <span className="personal__detail-skills-name">Executive Chef</span>
                                    <span className="personal__detail-skills-value">90%</span>
                                </div>
                                <div className="personal__detail-skills-bar">
                                    <div className="personal__detail-skills-progress" style={{ width: "90%" }}></div>
                                </div>
                            </li>


                        </ul>
                    </section>


                </div>
            </section>

        </Container>
    )
}

export default PersonalDetail;