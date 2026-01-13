import Filter from '../../components/Filter'
import '../../assets/css/home.css'
import { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../../feature/cart/cartSlice'
import {useQuery} from '@tanstack/react-query'

const Home = () => {
  const [selectedCategories, setSelectedCategories] = useState([])
  const cartItem = useSelector(state => state.cart)
  const dispatch = useDispatch()

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

      <div className="card-container">
        {filteredProducts.map(item => (
          <div className="card" key={item.id}>
            <img src={item.thumbnail} alt={item.title} loading='lazy' />
            <div className='card-body'>
            <p>{item.title}</p>
            <p>{item.price}</p>

            {!cartItem.some(c => c.id === item.id) ? (
              <button className='add-btn' onClick={() => dispatch(addToCart(item))}>
                Add to Cart
              </button>
            ) : (
              <div className='button-div'>
                <button onClick={() => dispatch(removeFromCart(item))}>-</button>
                <span>
                  {cartItem.find(c => c.id === item.id)?.quantity || 0}
                </span>
                <button onClick={() => dispatch(addToCart(item))}>+</button>
              </div>
            )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home