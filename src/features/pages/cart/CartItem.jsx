import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './../../styles/styles.css'
import { removeFromCart } from './cartSlice';

function CartItem({ item }) {
    // const { id, name, price,image } = item;
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const handleRemove =(item)=>{
        dispatch(removeFromCart(item))
    }

    const getProductDetails = (product)=>{
        navigate(`/products/${product.id}`)
  }

    return (
        <div className='cart_item' key={item.id}>
                
                <div className="item_view">
                <h5 className='item_name'>{item.name}</h5>
                <img src={item.image} alt={item.title} className="item_img" onClick={()=>getProductDetails(item)}/>
                
                </div>
                <div>
                <p className='item_price'> Price:{item.price} $</p>
                </div>

                
                
                <div className="item_delete_container">
                <button className='remove_btn' onClick={()=>(handleRemove(item))}>remove</button>
                </div>
        </div>
    )
}

export default CartItem