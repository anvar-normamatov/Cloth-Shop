import React from "react";
import {Container, Title} from "./styles.js";
import CollectionItem from '../CollectionItem';

const CollectionPreview =({ items,title })=> {
    return(
        <>
            <Title>{title}</Title>
            <Container>
                {
                    items .filter((item, idx) => idx < 4)
                    .map(({id, ...otherProps})=>(
                        <CollectionItem key={id}{...otherProps}/>
                    ))
                }
            </Container>
        </>
      
    )
    
}


export default CollectionPreview;