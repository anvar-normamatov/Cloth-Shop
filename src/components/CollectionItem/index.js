import React from "react";
import {Container, ShopItemContainer, ShopItemFooter,ClothName,CollectionButton} from "./styles.js";


const CollectionItem = ({ img,name,price }) => {
    return(
        <Container>
            <ShopItemContainer>
                <img src={img} alt=".."/>
                <CollectionButton className="btn">
                    <p>Add to card</p>
                </CollectionButton>
            </ShopItemContainer>
            <ShopItemFooter>
                <ClothName>{name}</ClothName>
                <ClothName>{price}</ClothName>
            </ShopItemFooter>
        </Container>
    )  
}



export default CollectionItem;