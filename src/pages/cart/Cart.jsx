import '../../assets/css/cart.css'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../../feature/cart/cartSlice'

const Cart = () => {
  const cartItem = useSelector(state => state.cart)
  const dispatch = useDispatch()
  return (
    <div className='cart-page'>
      <h4>Order Summary</h4>
      <div className='order-table'>
        {
          cartItem.length && cartItem.map((item)=>{
            return (
                <div className="order" key={item.id}>
                  <div className="item-details">
                    <img src={item.thumbnail} alt=''/>
                    <div className='item-info'>
                      <p className='item-name'>{item.title}</p>
                      <p className='item-price'>{item.price}</p>
                    </div>
                  </div>
                  <div className='quantity'>
                    <div className='button-div'>
                      <button onClick={()=>{dispatch(removeFromCart(item))}}>-</button>
                      <p>{item.quantity || 0}</p>
                      <button onClick={()=>{dispatch(addToCart(item))}}>+</button>
                    </div>
                  </div>
                  <div className='item-total-price'>
                    <p>{item.price*item.quantity}</p>
                  </div>
                </div>
            )
          })
        }
      </div>
      <div className='order-total'>
        <div className='inner-div'>
          <p>Order Subtotal:</p>
          <p>
            {
              cartItem.reduce((total,item)=> total+item.quantity*item.price,0).toFixed(2 )
            }
          </p>
        </div>
      </div>
    </div>
  )
}

export default Cart