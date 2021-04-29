import React from 'react'
import './Item_for_review.css' ;
function Item_for_review({ image , review , name }) {
    return (
        <div className="item_for_review">
            <div className="item_for_review_con1"><img src={image} alt="" id="item_for_review_img"/></div>
            <div className="item_for_review_con2"><span className="content">{review}</span></div>
            <div className="item_for_review_con3">- by {name}</div>
        </div>
    )
}

export default Item_for_review
