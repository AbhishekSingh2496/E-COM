import logo from './logo.svg';
import './App.css';
import Category from './Category';
import Product from './Product';
import axios from 'axios';
import { useEffect,useState } from 'react';
import Footer from './Footer';
import Header from './Header';
function App(){
  let [finalCategory,setFinalCategory]=useState([])
  let [finalProduct,setFinalgetProduct]=useState([])
  let [catName,setcatName]=useState("")
  const getCategory=()=>{
    axios.get('https://dummyjson.com/products/category-list')
    .then((res)=>res.data)
    .then((finalRes)=>{
    setFinalCategory(finalRes)
    })
  }
  const getProduct=()=>{
    axios.get('https://dummyjson.com/products?sortBy=title&order=asc')
    .then((proRes)=>proRes.data)
    .then((finalRes)=>{
    setFinalgetProduct(finalRes.products)
    })
  }
  useEffect(()=>{
    getCategory();
    getProduct();
  },[])
  useEffect(()=>{
    if(catName!==""){
    axios.get(`https://dummyjson.com/products/category/${catName}`)
    .then((proRes)=>proRes.data)
    .then((finalRes)=>{
    setFinalgetProduct(finalRes.products)
    console.log(JSON.stringify(finalRes.products));
    })
  }
  },[catName])
  return (
   <>
   <Header/>
   <div className='Arr1'>
   <div className='py-[40px]'>
   <div className='max-w-[1320] h-[40px]'>
    <h1 className='text-center text-[40px] font-bold mb-[30px] pt-4'>Our Products</h1>
    <div className='grid grid-cols-[30%_auto] gap-[20px]'>
        <div>
           <Category finalCategory={finalCategory} setcatName={setcatName}/>
        </div>
        <div className='grid grid-cols-3 gap-5 h-20'>
          <Product finalProduct={finalProduct}/>
        </div>
    </div>
   </div>
   </div>
   </div>
   <Footer/>
   </> 
  );
}

export default App;
