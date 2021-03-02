import React from "react";
import { Container } from "./styles";
import Button from "../Buttons";

class CardPopup extends React.Component{
    render() {
        return(
            <Container className="card-popup-container">
                <Button> Go to Checkout</Button>
            </Container>
        )
    }
        
}


export default CardPopup;