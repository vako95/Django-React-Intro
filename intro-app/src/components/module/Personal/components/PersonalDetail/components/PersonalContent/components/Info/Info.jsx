const Info = () => {


    return (
        <ul className="personal__detail-info-list">
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
    )
}

export default Info;