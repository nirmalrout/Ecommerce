import Filter from '../../components/Filter'
import '../../assets/css/home.css'
import { useEffect, useMemo, useState } from 'react'

import {useQuery} from '@tanstack/react-query'
import ProductItem from '../../components/ProductItem';
import Pagination from '../../components/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { productFetch } from '../../feature/product/productSlice'


const Home = () => {
  const [selectedCategories, setSelectedCategories] = useState([])
  const dispatch = useDispatch();
  const {items,error,status} = useSelector((state)=> state.product)

  // const { data = [], isLoading, isError } = useQuery({
  //   queryKey: ['products'],
  //   queryFn: items,
  //   staleTime: Infinity,
  //   cacheTime: 1000 * 60 * 30,  
  // })

  
 

  const filteredProducts = useMemo(() => {
    if (selectedCategories.length === 0) return items
    return items.filter(p =>
      selectedCategories.includes(p.category)
    )
  }, [items, selectedCategories])

  useEffect(()=>{
    dispatch(productFetch())
  },[dispatch])

  // if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error loading products</p>

  return (
    <div className="home-page">
      <Filter updateFilter={fil =>
        setSelectedCategories(prev =>
          prev.includes(fil)
            ? prev.filter(p => p !== fil)
            : [...prev, fil]
        )
      } />
      <div>
        <div className="box-container">
          <Pagination data={filteredProducts} items_per_page={5} component={ProductItem} />
        </div>
      </div>
    </div>
  )
}

export default Home