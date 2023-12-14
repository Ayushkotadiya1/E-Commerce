import { useState } from "react";
import { LuChevronDown } from "react-icons/lu";

// eslint-disable-next-line react/prop-types
const SortBy = ({ BrandCategorySort, HighToLowSort, LowToHighSort, RatingSort, AllNewProducts }) => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="mt-8 flex">
            <div className="ml-auto w-60 bg-blue-100 hover:bg-blue-200 mr-10 rounded-md h-9 relative">
                <button className="flex pl-16 pt-1 drop-shadow-xl" onClick={() => setIsOpen(!isOpen)}>
                    <span id="name">Sort by :</span>
                    <LuChevronDown className="mt-1.5 ml-16" />
                </button>
                {
                    isOpen && (<div className="w-60 mt-6 rounded-md border-2 h-44 bg-white absolute z-10">
                        <button className="mt-2 pr-28 w-full">Recommended</button>
                        <button className="mt-2 pr-32 w-full" onClick={() => { BrandCategorySort(AllNewProducts), setIsOpen(!isOpen) }}>Brand Name</button>
                        <button className="mt-2 pl-3" onClick={() => {LowToHighSort(AllNewProducts), setIsOpen(!isOpen)}}>Price: Low to High</button>
                        <button className="mt-2 pl-3" onClick={() => {HighToLowSort(AllNewProducts), setIsOpen(!isOpen)}}>Price: High to Low</button>
                        <button className="mt-2 pl-3" onClick={() => {RatingSort(AllNewProducts), setIsOpen(!isOpen)}}>Customer Rating</button>
                    </div>)
                }

            </div>
        </div>
    )
}

export default SortBy
