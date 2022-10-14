import React from 'react'
import {FaShoppingCart} from "react-icons/fa"
import {Badge, Container, Dropdown, FormControl, Nav, Navbar,Button}from "react-bootstrap"
import "./Header.css"
import {Link} from "react-router-dom"
import {CartState} from "../../Context/Context";
import { AiFillDelete } from 'react-icons/ai'

function Header() {
    const {
        state:{cart},
        dispatch,  productDispatch 
    }=CartState()

   

  return (
    <Navbar bg="dark" variant='dark' style={{height:80}}>
        <Container>
            <Navbar.Brand>
                <Link to="/">Shopping Cart</Link>
            </Navbar.Brand>
            <Navbar.Text className='search'>
                <FormControl style={{width:500}}
                placeholder="search a product"
                className='m-auto' 
                onChange={(e)=>{productDispatch({
                    type:"FILTER_BY_Search",
                    payload:e.target.value
    
                })}}/>
            </Navbar.Text>
            <Nav>
                <Dropdown  alignRight>
                    <Dropdown.Toggle variant='success'>
                        <FaShoppingCart color="white" fontSize="25px" />
                        <Badge>{cart.length}</Badge>
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{minWidth:290,margin:"0 -180px"}} className='drop'>
                        {cart.length>0 ?(
                            cart.map((item)=>(
                                <span className='cartitem' key={item.id}>
                                    <img src={item.image} className="cartItemImg" alt={item.name} />
                                    <div className='cartItemDetail'>
                                        <span>{item.name}</span>
                                        <span>$ {item.price.split(".")[0]}</span>
                                    </div>
                                    <AiFillDelete fontSize="20px" style={{cursor:"pointer"}} onClick={()=>
                                    dispatch({
                                        type:"REMOVE_FROM_CART",
                                        payload:item,
                                    })}/>
                                </span>
                            ))
                            
                
                        ):(<span style={{padding:10}}>Cart is empty</span>)}
                        <Link to="/cart">
                                <Button style={{width:"95%",margin:"0 10px"}}>Got To Cart</Button>

                            </Link>
                        
                    </Dropdown.Menu>
                </Dropdown>
            </Nav>
        </Container>
    </Navbar>
  )
}

export default Header
