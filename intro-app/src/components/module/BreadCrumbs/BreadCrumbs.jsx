import "./BreadCrumbs.css";
import { Container } from "@components/ui"
import { useLocation, Link } from "react-router-dom";

const BreadCrumbs = ({ children }) => {
    const locationpath = useLocation().pathname.split("/").filter((b) => b)

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
                    {locationpath.map((name, index) => {
                        const routeTo = "/" + locationpath.slice(0, index + 1).join("/");
                        const isLast = index === locationpath.length - 1;
                        return (

                            <li key={index} className="breadcrumbs__item">
                                {isLast ? (
                                    <span className="breadcrumbs__current">{name}</span>
                                ) : (
                                    <Link to={routeTo} className="breadcrumbs__item-link">
                                        {name}
                                    </Link>
                                )}
                            </li>
                        );
                    })}

                </ol>
            </nav>
        </Container>
    );
};

export default BreadCrumbs;
