import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../feature/cart/cartSlice.js'
import { useNavigate } from 'react-router-dom';

const ProductItem = ({item}) => {
  const cartItem = useSelector(state => state.cart)
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const handleRedirect = () => {
    navigate(`/product?id=${item.id}`)
  }
  return (
    <div className="card" onClick={handleRedirect}>
      <img src={item.thumbnail} alt={item.title} loading='lazy' />
      <div className='card-body'>
        <p className='title'>{item.title}</p>
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
  )
}

export default ProductItem