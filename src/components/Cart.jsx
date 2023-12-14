import { useContext } from "react";
import userContext from "../context/useContext";

// eslint-disable-next-line react/prop-types
const Cart = () => {
    const {quantities, setQuantities} = useContext(userContext);
    const { cart, setCart } = useContext(userContext)

    const handleIncrementClick = (itemId) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [itemId]: (prevQuantities[itemId] || 0) + 1
        }));
    };

    const handleDecrementClick = (itemId) => {
        if (quantities[itemId] > 0) {
            setQuantities(prevQuantities => ({
                ...prevQuantities,
                [itemId]: prevQuantities[itemId] - 1
            }));
        }
    };

    const calculateItemTotal = (item) => {
        return (item.price * 80 || 0) * (quantities[item.id] || 0);
    };

    const calculateTotalPrice = () => {
        let totalPrice = 0;
        cart.map(item => {
            totalPrice += calculateItemTotal(item);
        });
        return Math.ceil(totalPrice);
    };

    const clearCart = () => {
        setQuantities({})
        setCart([])
    }

    return (
        <div className="absolute shadow-lg bg-white z-10 left-[1000px]">
            <div>
                <h2 className="text-lg font-medium p-4">Cart Items</h2>
                {cart && cart.map((item, index) => (
                    <div key={index} className="flex mt-3">
                        <div className="m-4 flex-1">
                            <img className="" src={item.image} alt="Fashion wear" />
                        </div>
                        <div className="mt-3 flex-1">
                            <p className="font-medium">{item.category}</p>
                            <p>{item.title}</p>
                            <p className="font-medium mt-3">Rs. {item.price}</p>
                        </div>
                        <div className="ml-10 flex-1 p-2 flex">
                            <button onClick={() => handleIncrementClick(item.id)} className="bg-blue-100 h-8 w-8 rounded-md flex items-center justify-center text-lg m-1">+</button>
                            <span className="text-center flex justify-center h-5 mt-1">{quantities[item.id] || 0}</span>
                            <button onClick={() => handleDecrementClick(item.id)} className="bg-blue-100 h-8 w-8 rounded-md flex items-center justify-center text-lg m-1">-</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="m-5 flex gap-[230px]">
                <button className="bg-gray-400 rounded-md p-2 font-medium" onClick={() => clearCart()}>Checkout</button>
                {/* {cart && cart.map((item) => (
                    <div key={item.id}>
                        <p>{item.price} * {quantities[item.id] || 0} = {calculateItemTotal(item)}</p>
                    </div>
                ))} */}
                <p className="text-lg font-medium">Total Price: {calculateTotalPrice()}</p>
            </div>
        </div >
    );
};

export default Cart;
