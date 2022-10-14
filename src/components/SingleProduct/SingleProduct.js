import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { CartState } from '../../Context/Context'
import Rating from '../Filter/Rating/Rating'
import "./singleproducts.css"

function SingleProduct({prod}) {
  const {
    state:{cart},dispatch,
  }=CartState();
  
  return (
    <div className='products'>
      <Card id="card">
        <Card.Img variant='top' src={prod.image} alt={prod.name} />
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Subtitle style={{paddingBottom:10}}>
            <span>${prod.price.split(".")[0]}</span>
            {prod.fastDelivery? (<div>Fast Delivery</div>):(<div>4 days Delivery</div>)}
            <Rating Rating={prod.ratings}/>
          </Card.Subtitle>
          {cart.some((p)=>p.id===prod.id)?( <Button onClick={()=>{dispatch({
            type:"REMOVE_FROM_CART",
            payload:prod,
          })}} variant ="danger">Remove From cart</Button>)
          :
          (<Button disabled={!prod.inStock}  onClick={()=>{dispatch({
            type:"ADD_TO_CART",
            payload:prod,
          })}}>
            {!prod.inStock ? "out of stock" :"Add to Cart"}
          </Button>)}
         
          
        </Card.Body>
      </Card>
      
    </div>
  )
}

export default SingleProduct
