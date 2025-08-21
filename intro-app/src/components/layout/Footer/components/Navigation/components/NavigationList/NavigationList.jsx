import NavigationItem from "./components/NavigationItem/NavigationItem";


const NavigationList = ({ items }) => {

    return (
        <ul className="navigation__links">
            {items.map((item) => (
                <NavigationItem item={item} key={item.id} />
            ))}
        </ul>
    )
}

export default NavigationList;