import React from 'react';
const Product = ({finalProduct}) => {
    let pro=finalProduct.map((v,i)=>{
        return(
            <div className='shadow-lg' key={i}>
            <img src={v.thumbnail} className='w-[100%] h-[220px]'/>
            <h4>{v.title}</h4>
            <b>Rs{v.price}</b>
            </div>
        )
    })
    return (
        <>
        {pro}
        </>
    )
}
export default Product;