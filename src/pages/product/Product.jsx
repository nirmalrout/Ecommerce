import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../../feature/cart/cartSlice.js'
import { useSearchParams } from 'react-router-dom'
import { productFetch } from '../../feature/product/productSlice'
import { FaRegUserCircle } from "react-icons/fa";
import { useEffect } from 'react'
import './product.css'
import Rating from '../../components/Rating.jsx';

const Product = () => {
  const cartItem = useSelector(state => state.cart)
  const [idParam, setIdParam]  = useSearchParams()
  const dispatch = useDispatch();
  const id = Number(idParam.get('id'));
  const {items,status,error} = useSelector((state)=>state.product)
  useEffect(()=>{
    if(items.length === 0){
      dispatch(productFetch())
    }
  },[items.length,dispatch])
  const prop = items.find((p) => p.id === id)
  console.log(prop)
  return (
    <div className='product-page'>
      <div className='product-details-section'>
        {/* {carousel Image} */}
        <div className="left-side">
          <img src={prop.thumbnail} alt={prop.title} />
        </div>
        {/* {Product Desciption} */}
        <div className="right-side">
          <h2>{prop.title}</h2>
          <p>{prop.description}</p>
          <h6>{prop.price}</h6>
          {!cartItem.some(c => c.id === prop.id) ? (
            <button className='add-btn' onClick={() => dispatch(addToCart(prop))}>
              Add to Cart
            </button>
          ) : (
            <div className='button-div'>
              <button onClick={() => dispatch(removeFromCart(prop))}>-</button>
              <span>
                {cartItem.find(c => c.id === prop.id)?.quantity || 0}
              </span>
              <button onClick={() => dispatch(addToCart(prop))}>+</button>
            </div>
          )}
        </div>
      </div>

      {/* {comment section} */}
      <div className="comment-section">
        <h5>Comments</h5>
        <div className='overAll-rating'>

        </div>
        {
          prop.reviews.map((rev)=>{
            return (
                <div className='comment'>
                  <div className='user-detail'>
                    <div className='user'>
                      <FaRegUserCircle/>
                      <p>{rev.reviewerName}</p>
                    </div>
                    <div className='star-rating'>
                      <Rating num={rev.rating} />
                    </div>
                  </div>
                  <div className='user-comment'>
                    <p>{rev.comment}</p>
                  </div>
                </div>
            )
          })
        }

      </div>
    </div>
  )
}

export default Product