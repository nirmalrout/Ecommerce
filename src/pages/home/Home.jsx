import Filter from '../../components/Filter'
import '../../assets/css/home.css'
import { useEffect, useMemo, useState } from 'react'

import {useQuery} from '@tanstack/react-query'
import ProductItem from '../../components/ProductItem';
import Pagination from '../../components/Pagination';


const Home = () => {
  const [selectedCategories, setSelectedCategories] = useState([])
  

  const fetchProducts = async () => {
    const res = await fetch('https://dummyjson.com/products')
    const data = await res.json()
    return data.products
  }

  const { data = [], isLoading, isError } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
    staleTime: Infinity,
    cacheTime: 1000 * 60 * 30,  
  })

 

  const filteredProducts = useMemo(() => {
    if (selectedCategories.length === 0) return data
    return data.filter(p =>
      selectedCategories.includes(p.category)
    )
  }, [data, selectedCategories])

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error loading products</p>

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