import { useEffect, useState } from "react";

const productsData = [
    { id: 1, name: "Товар 1", price: 100, qunty: 1 },
    { id: 2, name: "Товар 2", price: 200, qunty: 1 },
    { id: 3, name: "Товар 3", price: 300, qunty: 1 },
];

const Test = () => {
    const [cart, setCart] = useState(productsData);

    const addHandler = (product) => {
        setCart(prev => prev.map(item =>
            item.id === product.id
                ? { ...item, qunty: Math.min(item.qunty + 1, 4) }
                : item
        ));

    };
    const addhandler = (product) => {
        console.log(product);
        if (!product) {
            console.log("no priduct");
            return;
        }

        setCart((prev) => {
            const newItem = prev.find((item) => item.id === product.id);
            // console.log("listim", newItem)
            if (newItem) {
                const updatedCart = prev.map((item) =>
                    item.id === product.id ?
                        {
                            ...item, qunty: item.qunty + 1,
                            totalPrice: (item.qunty + 1) * item.price
                        } : item
                )
                console.log("new product", updatedCart)
                return updatedCart
            }
            return [...prev, { ...product, qunty: 1, totalPrice: product.price }];
        });
    };

    const deleteHandler = (product) => {
        setCart((prev) => {
            const findler = prev.find(prev => prev.id === product.id);
            if (findler) {
                console.log("findler", findler)
                return prev.filter(item => item.id !== product.id)

            }

        })
        return alert("продукт удален")
    }

    useEffect(() => {
        // const total = cart.reduce((acc, item) => acc + item.price * item.qunty, 0)
        // console.log("ttotal", total);
        console.log("cart update", cart);

        const rr = addhandler();
        console.log("cart update", rr);
    }, [cart])

    return (
        <div>

            {cart.map((product) => (
                <>
                    <button key={product.id} onClick={() => addhandler(product)}>
                        Add {product.name} Count:{product.qunty}
                    </button>
                    <button key={product.id} onClick={() => addHandler(product)}>
                        new cart {product.name} Count:{product.qunty}
                    </button>
                    <br />
                    <br />
                    <div key={product.id}>{product.name} — {product.qunty} шт — {product.price * product.qunty}$</div>
                    <br />
                    <button key={product.id} onClick={() => deleteHandler(product)}>
                        Delete
                    </button>
                    <div className="cart-list">
                        {cart.map((item) => (
                            <div key={item.id} className="cart-item">
                                <h3>{item.name}</h3>
                                <p>Цена: {item.price}$</p>
                                <p>Количество: {item.qunty}</p>
                            </div>
                        ))}
                    </div>
                </>

            ))}
        </div>
    );
}
export default Test;
