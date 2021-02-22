import React from "react";
import "./styles.scss";


const CollectionItem = ({ img,name,price }) => {
    return(
        <div className="shop-item">
            <div className="shop-item-container">
                <img src={img} alt=".."/>
                <div className="collection-button">
                    <p>Add to card</p>
                </div>
            </div>
            <div className="shop-item-footer">
                <h1>{name}</h1>
                <h1>{price}</h1>
            </div>
        </div>
    )  
}



export default CollectionItem;