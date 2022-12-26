import React from 'react'
import '../index.css'

export function CardInformation() {
  return (
    <div className='infoContainer'>
        <h3>
          SNEAKER COMPANY
        </h3>
        <h1>
          Fall Limited Edition Sneakers
        </h1>
        <p>
          These low-profile sneaker are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everithing the weather can offer.
        </p>
        <div className="price">
          <span id="currentPrice">
            $125
          </span>
          <div id="discount">
            <span>
              50%
            </span>
          </div>
        </div>
        <div className="realPrice">
          <h2 className="hr-lines">
            <span>
              250$
            </span>
          </h2>
        </div>

    </div>
  )
}
