import { useState } from "react"
import { LuChevronDown } from "react-icons/lu"

const Category = ({ PriceCategory, AllNewProducts }) => {

    const [isOpen, setIsOpen] = useState()

    return (
        <div>
            <div className="mt-8 flex">
                <div className="ml-auto w-60 bg-blue-100 hover:bg-blue-200 mr-10 rounded-md h-9 relative">
                    <button className="flex pl-16 pt-1 drop-shadow-xl" onClick={() => setIsOpen(!isOpen)}>
                        <span>Price :</span>
                        <LuChevronDown className="mt-1.5 ml-16" />
                    </button>
                    {
                        isOpen && (<div className="w-60 mt-6 rounded-md border-2 absolute z-10 bg-white">
                            <button className="mt-2 pr-12 w-full" onClick={() => { PriceCategory('0', '1000', AllNewProducts), setIsOpen(!isOpen) }}>Rs. 100 To Rs. 1000</button>
                            <button className="mt-2 pr-10 w-full" onClick={() => { PriceCategory('1000', '2000', AllNewProducts), setIsOpen(!isOpen) }}>Rs. 1000 To Rs. 2000</button>
                            <button className="mt-2 pr-11 w-full" onClick={() => { PriceCategory('2000', '3000', AllNewProducts), setIsOpen(!isOpen) }}>Rs. 2000 To Rs.3000</button>
                            <button className="mt-2 pr-11 w-full" onClick={() => { PriceCategory('3000', '500000', AllNewProducts), setIsOpen(!isOpen) }}>Rs. 3000 above</button>
                        </div>)
                    }

                </div>
            </div>
        </div>
    )
}

export default Category
