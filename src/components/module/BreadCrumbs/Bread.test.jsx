import "./BreadCrumbs.css";
import { Container } from "@components/ui"
import { useLocation, Link } from "react-router-dom";

const BreadCrumbs = ({ children }) => {
    const location = useLocation();
    const path = location.pathname.replace("/").to(">").filter((b) => b);

    return (
        <Container>
            <nav className="breadcrumbs" aria-label="breadcrumb">
                <div className="breadcrumbs-heading">
                    <h5 className="breadcrumbs__title">{children}</h5>
                </div>

                <ol className="breadcrumbs__list">
                    <li className="breadcrumbs__item">
                        <Link to="/" className="breadcrumbs__item-link">Home</Link>
                    </li>

                    {path && (
                        <li className="breadcrumbs__item">
                            <span className="breadcrumbs__current">{path}</span>
                        </li>
                    )}



                </ol>
            </nav>
        </Container>
    );
};

export default BreadCrumbs;
