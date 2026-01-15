import React, { useEffect, useMemo, useState } from 'react'

const Pagination = (props) => {
    const [currentPage, setCurrentPage] = useState(1);
    const Items_Per_Page = props.items_per_page;
    const page_length = Math.ceil(props.data.length /Items_Per_Page)
    const displayPagination = page_length > 5 ? 5 : page_length

    const pagination = useMemo(() =>{
        const startItem = Math.max(1,currentPage-2);
        const endItem = Math.min(page_length,startItem+displayPagination -1);
        return Array.from({length: endItem - startItem + 1},(_,i) => startItem + i)
    },[props,currentPage])

    const PaginatedProduct = useMemo(() => { 
        const startIndex = (currentPage - 1)*Items_Per_Page;
        const lastIndex = startIndex + Items_Per_Page;
        return props.data.slice(startIndex,lastIndex)
    },[props,currentPage])

    

    const prevHandle = ()=>{
        if(currentPage == 1) return
        setCurrentPage(prev => prev-1)
    }
    const nextHandle = ()=>{
        if(currentPage == page_length) return
        setCurrentPage(prev => prev+1)
    }
    useEffect(()=>{
        setCurrentPage(1)
    },[props])
    
  return (
    <>
    <div className='card-container'>
        {PaginatedProduct.map((item)=>
            <props.component key={item.id} item={item} />
        )}
    </div>
    <div className='pagination'>
        <div className='page prevNext' onClick={prevHandle}>prev</div>
        {
            pagination.map((p)=> <div key={p} onClick={()=>{setCurrentPage(p)}} className={` ${currentPage == p ? 'active page' : 'page'}`}>{p}</div>)
        }
        <div className='page prevNext' onClick={nextHandle}>Next</div>
    </div>
    </>
  )
}

export default Pagination