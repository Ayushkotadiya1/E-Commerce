import { useContext, useState } from "react"
import userContext from "../context/useContext"
import Spinner from "./Spinner";

const Products = ({ product }) => {

    const {cart, setCart} = useContext(userContext)
    const {quantities, setQuantities} = useContext(userContext);

    const addToCart = (items) => {
        setQuantities({...quantities, 
            [items.id]:1})
        setCart([...cart, items])
    }

    return (
         product && product.map((items, index) =>
            <>
                <div key={index} className="h-84 shadow-lg p-5">
                    <div className="flex justify-center">
                        <img className="h-48 w-48" src={items.image} alt="men's cloth" />
                    </div>
                    <p className="font-medium text-lg flex justify-center">{items.category}</p>
                    <p className="flex justify-center">{items.title}</p>
                    <div className="flex gap-12 justify-center mt-4">
                        <p className="font-medium">Rs. {Math.floor(items.price * 80)}</p>
                        <p className="">{items.rating.rate} <i className="bi bi-star-fill"></i> | {items.rating.count}</p>
                    </div>
                    <div className="bg-blue-200 text-center mt-2 rounded-md h-8 flex justify-center w-20">
                        <button onClick={() => addToCart(items)}>Add Cart</button>
                    </div>
                </div>
            </>
        ) 
    )
}

export default Products
