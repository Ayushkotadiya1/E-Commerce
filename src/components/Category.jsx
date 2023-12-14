import { useState } from "react"
import { LuChevronDown } from "react-icons/lu"

// eslint-disable-next-line react/prop-types
const Category = ({ AllCategory, AllProducts }) => {

    const [isOpen, setIsOpen] = useState()

    return (
        <div>
            <div className="mt-8 flex">
                <div className="ml-auto w-60 bg-blue-100 hover:bg-blue-200 mr-10 rounded-md h-9 relative">
                    <button className="flex pl-16 pt-1 drop-shadow-xl" onClick={() => setIsOpen(!isOpen)}>
                        <span>Category :</span>
                        <LuChevronDown className="mt-1.5 ml-16" />
                    </button>
                    {
                        isOpen && (<div className="w-60 mt-6 rounded-md border-2 absolute z-10 bg-white">
                            <button className="mt-2 pr-40 w-full" onClick={() => { AllCategory("men's clothing"), setIsOpen(!isOpen) }}>Men</button>
                            <button className="mt-2 pr-36 w-full" onClick={() => { AllCategory("women's clothing"), setIsOpen(!isOpen) }}>Women</button>
                            <button className="mt-2 pr-44 w-full" onClick={() => AllProducts()}>All</button>
                        </div>)
                    }

                </div>
            </div>
        </div>
    )
}

export default Category
