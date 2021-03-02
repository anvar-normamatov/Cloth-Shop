import React from "react";
import data from "../../mock/collection"
import  { Container, CategoryRow, ItemAbove, CategoryItem, ItemLabel, ItemName, ItemText} from "./styles.js";


const Collection = () => {
    return (
        <Container Container>
            <CategoryRow>
                {
                    data.slice(0, 3)
                    .map(({id, title,image }) =>(
                        <ItemAbove key={id} style={{backgroundImage: `url(${image})`}}>
                            <ItemLabel>
                                <ItemName>
                                   {title}      
                                </ItemName>
                                < ItemText>
                                    Shop Now
                                </ ItemText>
                            </ItemLabel>
                        </ItemAbove>
                    ))
                }
            </CategoryRow>
            <CategoryRow>
                {
                    data.slice(3, 5)
                    .map(({id, title,image }) =>(
                        <CategoryItem key={id} style={{backgroundImage: `url(${image})`}}>
                            <ItemLabel>
                                <ItemName>
                                   {title}      
                                </ItemName>
                                <ItemText>
                                    Shop Now
                                </ItemText>
                            </ItemLabel>
                        </CategoryItem>
                    ))
                }
            </CategoryRow>
        </Container>
    )
};


export default Collection;