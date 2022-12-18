import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './../../styles/styles.css'
import { favoritesSelector, removeFromFavorites } from './favoritesSlice'

function Favorite() {
    const favorites = useSelector(favoritesSelector)
    const dispatch = useDispatch()
    const navigate = useNavigate()
   
    const removeFavory = (favory)=>{
         dispatch(removeFromFavorites(favory))
    }

    const getProductDetails = (favory)=>{
      navigate(`/products/${favory.id}`)
      }

    const content = favorites.map(favory=>{
      const {image,title,id,description,price} = favory
      return <div key={id} className="favorite_product">
         <span className='favorite_title'>{title}</span>
          <div className="favorite_img_wrapper">
          <img src={image} className="favory_img" alt={title} onClick={()=>getProductDetails(favory)}/>
          </div>
          <span className='favorite_description'>{description.substring(1,80)}</span>
          <button type='button' className='remove_btn' onClick={()=>removeFavory(favory)}>remove</button>
      </div>
    })


    if(content.length <=0){
       return <h3 className='text_center title'>You haven't choosen yet...</h3>
    }
    
  return (
    <div className="favorite page">
       <div className="favorite_container ">
       {content}
       </div>
    </div>
  )
}

export default Favorite