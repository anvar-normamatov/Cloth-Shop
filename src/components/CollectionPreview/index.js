import React from "react";
import "./styles.scss";
import CollectionItem from '../CollectionItem';

const CollectionPreview =({ items,title })=> {
    return(
        <>
            <h1 className="collection-title">{title}</h1>
            <div className="collection-preview">
                {
                    items .filter((item, idx) => idx < 4)
                    .map(({id, ...otherProps})=>(
                        <CollectionItem key={id}{...otherProps}/>
                    ))
                }
            </div>
        </>
      
    )
    
}


export default CollectionPreview;