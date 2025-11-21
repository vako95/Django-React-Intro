
;
import "./NewsList.css";
import NewsItem from "./components/NewsItem/NewsItem";

const images = [
    { id: 1, src: "https://wallpapers.com/images/high/restaurant-in-grand-resort-lagonissi-greece-znonmfdj26fii6ol.webp" },
    { id: 2, src: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 3, src: "https://wallpapers.com/images/high/restaurant-in-grand-resort-lagonissi-greece-znonmfdj26fii6ol.webp" },
    { id: 4, src: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 5, src: "https://wallpapers.com/images/high/restaurant-in-grand-resort-lagonissi-greece-znonmfdj26fii6ol.webp" },
    { id: 6, src: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },

];
const NewsList = () => {

    return (
        <div className="news__list">
            {images.map(image => (
                <NewsItem image={image} />
            ))}

        </div>
    )
}

export default NewsList;