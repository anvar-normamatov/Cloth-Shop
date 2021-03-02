import React from 'react';
import {Container} from "./styles.js";
import collection from "../../mock/collection";
import CollectionPreview from '../../components/CollectionPreview';


const CollectionOverview = () =>{
    return(
        <Container>
            {
                collection.map(({id, ...otherProps}) => (
                    <CollectionPreview key={id}{...otherProps}/>
                ))
            }
        </Container>
       
    )
}


export default CollectionOverview;