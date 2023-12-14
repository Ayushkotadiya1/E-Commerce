import './App.css'
import Category from './components/Category'
import Navbar from './components/Navbar'
import SortBy from './components/SortBy'
import Price from './components/Price'
import Products from './components/Products'
import useProductInfo from './hooks/useProductInfo'
import { useCallback, useEffect, useState } from 'react'
import { UserContextProvider } from './context/userContextProvider'
import Spinner from './components/Spinner'

function App() {

  const [limit, setLimit] = useState(0)
  const [pages, setPages] = useState(1)
  const products = useProductInfo()
  const [productsInfo, setProductsInfo] = useState(products)
  const [newProducts, setNewProducts] = useState([]);
  const [query, setQuery] = useState()


  useEffect(() => {
    if (products && products.length > 0) {
      setProductsInfo(products);
    }
  }, [products]);

  const slicedProducts = productsInfo.slice(limit, limit + 5);
  useEffect(() => {
    setNewProducts(slicedProducts);
  }, [limit, productsInfo]);

  const prevClick = () => {
    setLimit(limit - 5)
    setPages(pages - 1)
  }

  const nextClick = () => {
    setLimit(limit + 5)
    setPages(pages + 1)
  }

  const BrandCategorySort = (productArray) => {
    productArray.sort((a, b) => {
      const first = a.title.toLowerCase()
      const second = b.title.toLowerCase()
      if (first < second) {
        return -1
      }
      else if (first > second) {
        return 1
      }
      else {
        return 0
      }
    })
    setProductsInfo(productArray)
    setNewProducts(productsInfo.slice(limit, limit + 5))
  }

  const HighToLowSort = (productArray) => {
    productArray.sort((a, b) => {
      const first = a.price
      const second = b.price
      return second - first
    })
    setProductsInfo(productArray)
    setNewProducts(productsInfo.slice(limit, limit + 5))
  }

  const LowToHighSort = (productArray) => {
    console.log(productArray)
    productArray.sort((a, b) => {
      const first = a.price
      const second = b.price
      return first - second
    })
    setProductsInfo(productArray)
    setNewProducts(productsInfo.slice(limit, limit + 5))
  }

  const RatingSort = (productArray) => {
    productArray.sort((a, b) => {
      const first = a.rating.rate
      const second = b.rating.rate
      return second - first
    })
    setProductsInfo(productArray)
    setNewProducts(productsInfo.slice(limit, limit + 5))
  }

  const AllCategory = (categorys) => {
    const MensProduct = products.filter(item => item.category === categorys)
    setProductsInfo(MensProduct)
    setNewProducts(productsInfo.slice(limit, limit + 5))
  }

  const AllProducts = () => {
    setProductsInfo(products)
    setNewProducts(products.slice(limit, limit + 5))
  }

  const PriceCategory = (lessPrice, Maxprice, productArray) => {
    const PriceProducts = productArray.filter((items) => items.price * 80 >= lessPrice && items.price * 80 < Maxprice)
    setProductsInfo(PriceProducts)
    setNewProducts(productsInfo)
  }

  const searchFilter = useCallback((e) => {
    const searchTerm = e.target.value.trim().toLowerCase();
    setQuery(searchTerm);

    const filteredTasks = products.filter(
      (item) => item.title.toLowerCase().includes(searchTerm)
    );

    setProductsInfo(filteredTasks);
    setNewProducts(filteredTasks.slice(limit, limit + 5)); // Update newProducts separately
  }, [products]);


  return (
    <>
      <UserContextProvider>
        <Navbar searchFilter={searchFilter} />
        <div className='flex justify-center'>
          <Price AllNewProducts={productsInfo} PriceCategory={PriceCategory} />
          <Category AllCategory={AllCategory} AllProducts={AllProducts} />
          <SortBy BrandCategorySort={BrandCategorySort} HighToLowSort={HighToLowSort} LowToHighSort={LowToHighSort} RatingSort={RatingSort} AllNewProducts={productsInfo} />
        </div>
        <div className='flex w-full justify-center h-full'>
          {newProducts.length > 0 ? (<div className='mt-10 w-[900px] gap-5 grid grid-cols-3 place-items-center'>
            <Products product={newProducts} />
          </div>) : <Spinner />}
        </div>
        <div className='flex justify-center mt-5 gap-[800px]'>
          <button disabled={pages === 1} onClick={() => prevClick()} className='bg-blue-300 rounded-md w-16 h-8 disabled:cursor-not-allowed'>Prev</button>
          <button disabled={pages === Math.ceil(productsInfo.length / 5)} onClick={() => nextClick()} className='bg-blue-300 rounded-md w-16 h-8 disabled:cursor-not-allowed'>Next</button>
        </div>
      </UserContextProvider>
    </>
  )
}

export default App
