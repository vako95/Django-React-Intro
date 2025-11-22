import clsx from "clsx";
import "./Faq.css";
import FaqList from "./components/FaqList/FaqList.jsx";

const items = [
    {
        id: 1, q: "Where do I find my Office product key?", a: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor"
    },
    {
        id: 2, q: "Where do I find my Office product key?", a: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor Where do I find my Office product key? Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor"
    },
    {
        id: 3, q: "Where do I find my Office product key?", a: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor"
    },
    {
        id: 4, q: "Where do I find my Office product key?", a: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor"
    },

    {
        id: 5, q: "Where do I find my Office product key?", a: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor Where do I find my Office product key? Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor"
    },
    {
        id: 6, q: "Where do I find my Office product key?", a: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor"
    },
    {
        id: 7, q: "Where do I find my Office product key?", a: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor"
    },
];


const Faq = ({
    columns,
    className
}) => {

    const classes = clsx(
        "faq",
        className
    )

    const total = items.length;  //7

    const step = Math.ceil(total / columns)  //2
    // const first = Math.floor(rr / (idx + 1)) - step
    // console.log("--", rr % columns === 0.5 ? );
    // 7 => 4
    // 7 - 4 => 3

    return (
        <section className={classes}>
            {Array.from({ length: columns }).map((_, idx) => {
                const start = idx * step
                const end = start + step
                const columnItems = items.slice(start, end);
                if (columnItems.length === 0) return null;
                return (
                    <div className="faq__content" key={idx} >
                        <FaqList items={items.slice(start, end)} />
                    </div>
                )
            })
            }
        </section >
    )
}

export default Faq;