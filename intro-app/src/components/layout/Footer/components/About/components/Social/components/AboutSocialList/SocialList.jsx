import SocialItem from "./components/SocialItem";
import "./SocialList.css";

const SocialList = () => {

    return (
        <ul className="footer__about-social-links">
            <SocialItem icon="ri-twitter-x-fill" />
            <SocialItem icon="ri-facebook-fill" />
            <SocialItem icon="ri-youtube-fill" />
            <SocialItem icon="ri-instagram-fill" />
        </ul>
    )
}
export default SocialList;