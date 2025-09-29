import "./BreadCrumbs.css";

import { Link, useMatches } from "react-router-dom";
import { teamMembers } from "../../../app/routers/routers";

const BreadCrumbs = () => {
    const matches = useMatches();

    const crumbs = matches.flatMap(match => {
        if (!match.handle || !match.handle.breadcrumbs) return [];
        return match.handle.breadcrumbs(match.params);
    });

    const lastMatch = matches[matches.length - 1];
    const userId = lastMatch?.params?.id;
    const user = teamMembers.find(u => u.id === userId);

    return (
        <nav className="breadcrumbs" aria-label="breadcrumb">
            <div className="breadcrumbs-heading">
                <h5 className="breadcrumbs__title">
                    {user ? user.name : crumbs[crumbs.length - 1]?.label}
                </h5>
            </div>

            <ol className="breadcrumbs__list">
                {crumbs.map((crumb, index) => {
                    let label = crumb.label;
                    if (crumb.path.includes(":id") && user) label = user.name;

                    return (
                        <li key={index} className="breadcrumbs__item">
                            <Link to={crumb.path} className="breadcrumbs__item-link">
                                {label}
                            </Link>
                            {index < crumbs.length - 1 && (
                                <span className="breadcrumbs__separator">/</span>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default BreadCrumbs;
