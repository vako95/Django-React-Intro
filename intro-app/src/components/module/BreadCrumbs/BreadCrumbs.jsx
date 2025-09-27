import "./BreadCrumbs.css";
import { Container } from "@components/ui";
import { Link, useMatches } from "react-router-dom";

const BreadCrumbs = () => {
    const matches = useMatches();

    // Собираем все breadcrumbs из handle
    const crumbs = matches.flatMap(match => {
        if (!match.handle || !match.handle.breadcrumbs) return [];
        return match.handle.breadcrumbs(match.params);
    });
    console.log(crumbs);

    return (
        <Container>
            <nav className="breadcrumbs" aria-label="breadcrumb">
                <div className="breadcrumbs-heading">
                    <h5 className="breadcrumbs__title">{crumbs[crumbs.length - 1].label}</h5>
                </div>

                <ol className="breadcrumbs__list">
                    {crumbs.map((crumb, index) => (
                        <li key={index} className="breadcrumbs__item">
                            <Link to={crumb.path} className="breadcrumbs__item-link">
                                {crumb.label}
                            </Link>
                            {index < crumbs.length - 1 && <span className="breadcrumbs__separator">/</span>}
                        </li>
                    ))}
                </ol>
            </nav>
        </Container>
    );
};

export default BreadCrumbs;
