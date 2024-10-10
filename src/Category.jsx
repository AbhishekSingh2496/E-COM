import React from 'react';
import './App.css';
const Category = ({finalCategory,setcatName}) => {
    let cat=finalCategory.map((v,i)=>{
        return(
            <li onClick={()=>setcatName(v)} key={i} className='bg-[#ccc] p-[7px] cursor-pointer text-[20px] font-serif font-[500] mb-2'>{v}</li>
        )
    })
    return(
        <>
        <div className='Arr2'>
            <h1 className='test-[25px] font-[500] p-[10px]'>Product Category</h1>
            <ul>
                {cat}
            </ul>
        </div>
        </>
    )
}
export default Category;