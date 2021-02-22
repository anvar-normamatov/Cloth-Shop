import React from "react";
import data from "../../mock/collection"
import "./styles.scss";


const Collection = () => {
    return (
        <div className="categories-container">
            <div className="categories-row">
                {
                    data.slice(0, 3)
                    .map(({id, title,image }) =>(
                        <div key={id} style={{backgroundImage: `url(${image})`}} className="category-item-above">
                            <div className='item-label'>
                                <h1 className="item-name">
                                   {title}      
                                </h1>
                                <h1 className="item-text">
                                    Shop Now
                                </h1>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="categories-row">
                {
                    data.slice(3, 5)
                    .map(({id, title,image }) =>(
                        <div key={id} style={{backgroundImage: `url(${image})`}} className="category-item">
                            <div className='item-label'>
                                <h1 className="item-name">
                                   {title}      
                                </h1>
                                <h1 className="item-text">
                                    Shop Now
                                </h1>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
};


export default Collection;