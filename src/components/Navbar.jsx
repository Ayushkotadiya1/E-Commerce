import { useContext, useEffect, useState } from "react";
import { LuShoppingCart } from "react-icons/lu";
import Cart from "./Cart";
import UserContext from "../context/useContext";

const Navbar = ({ searchFilter }) => {

    const [isOpen, setIsOpen] = useState(false)
    const [cartItems, setCartItems] = useState(0)
    const { cart } = useContext(UserContext)

    useEffect(() => {
        const cartLength = cart.length
        const cartItemBtn = document.getElementById('cartItemBtn')
        if (cartLength === 0) {
            cartItemBtn.classList.add('hidden')
        }
        else {
            cartItemBtn.classList.remove('hidden')
            setCartItems(cartLength)
        }
    }, [cart])

    return (
        <>
            <div className="w-full h-20 bg-slate-100">
                <nav className="flex ml-28 pt-7">
                    <div className="text-lg font-medium">LOGO</div>
                    <div>
                        <ul className="flex mx-28">
                            <li className="px-10"><a href=""></a>Men</li>
                            <li className="px-10"><a href=""></a>Women</li>
                            <li className="px-10"><a href=""></a>Kids</li>
                        </ul>
                    </div>
                    <div>
                        <input type="search" placeholder="Search" className="w-72 rounded-lg h-8 pl-4 -mt-1" onChange={searchFilter} inputMode=""/>
                    </div>
                    <div className="flex">
                        <button className="ml-40 -mt-2 bg-blue-400 rounded-lg w-20 text-white h-10">Login</button>
                        <button className="ml-20 text-2xl" onClick={() => { setIsOpen(!isOpen) }} >
                            <LuShoppingCart />
                        </button>
                        <button className="bg-red-500 w-3 h-4 text-white rounded-xl " id="cartItemBtn"><sup>{cartItems}</sup></button>
                    </div>
                </nav>
            </div>
            {
                isOpen && <Cart />
            }
        </>
    )
}

export default Navbar
