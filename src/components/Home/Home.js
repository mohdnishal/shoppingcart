import React from 'react'
import {CartState} from "../../Context/Context";
import Filters from '../Filter/Filters';
import SingleProduct from '../SingleProduct/SingleProduct';
import "./Home.css"

function Home() {

  const{
    state:{products}, productState:{byStock,byFastDelivery,byRating,sort,searchQuery}
  }=CartState();
  const transformProduct=()=>{
    let SortedProducts=products;

    if(sort)
    {
      SortedProducts=SortedProducts.sort((a,b)=>sort ==="lowToHigh" ?a.price-b.price:b.price-a.price)
    }
    if(!byStock)
    {
      SortedProducts=SortedProducts.filter((item)=>item.inStock)
    }
    if(byFastDelivery)
    {
      SortedProducts=SortedProducts.filter((item)=>item.fastDelivery)
    }
    if(byRating)
    {
      SortedProducts=SortedProducts.filter((item)=>item.ratings >= byRating)
    }
    if(searchQuery)
    {
      SortedProducts=SortedProducts.filter((item)=>item.name.toLowerCase().includes(searchQuery))
    }
    
    return SortedProducts
  }

  return (
    <div className='home'>
      <Filters />
      <div className="productsContainer">
        {transformProduct().map((item)=>{
            return(<SingleProduct prod={item} key={item.id}/>)
        })}
        
      </div>
    </div>
  )
}

export default Home
