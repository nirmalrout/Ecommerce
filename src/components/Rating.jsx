import { IoStar , IoStarHalf , IoStarOutline } from "react-icons/io5";

const Rating = ({num}) => {
    const array = Array.from({length:5},(_,i) => <IoStarOutline/>)
    array.fill(<IoStar/>,0,num)
    if(Math.ceil(num%1)){
        array.fill(<IoStarHalf/>,num,num+1)
    }
  return (
    <>
        {
            array.map((r)=>r)
        }
    </>
  )
}

export default Rating