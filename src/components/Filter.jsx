import '../assets/css/filter.css'

const Categories = ["beauty","fragrances","furniture","groceries","clothes"]
const filter = (props) => {
  return (
    <div className='filter-box'>
      <h6>Select Categories</h6>
      <div>
          {Categories.map((cat,index)=>{
            return (
              <div className='category' key={index}>
                <input type='checkbox' onClick={()=>{props.updateFilter(cat)}} id={cat}/>
                <label htmlFor={cat}>{cat}</label>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default filter