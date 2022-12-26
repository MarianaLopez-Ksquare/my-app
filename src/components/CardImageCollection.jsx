import React from 'react'
import '../index.css'

export function CardImageCollection() {
  return (
    <div className='container'>
          <div className="imgShopContainer">
        <div className="bigImg">
            <img src="./media/img1.jpeg" alt=""/>
        </div>
        <div className="smallImg">
            <img className="imgClick" src="./media/img2.jpeg" alt=""/>
            <img src="./media/img4.jpeg" alt=""/>
            <img src="./media/img1.jpeg" alt=""/>      
        </div>
    </div>
    </div>

  )
}
