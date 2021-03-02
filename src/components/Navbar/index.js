import React from 'react';
import { Link } from "react-router-dom"
import CardPopup from "../CardPopup"
import { Container,  LogoContainer,NavbarLinks } from './styles.js'
import IconBag from '../../assets/icon/shopping-bag.png'
import Iconcrown from "../../assets/icon/crown.png";



//state
///class Component
class Navbar extends React.Component{
    constructor () {
        super ()
        this.state= {
            show: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    ////handles click
    handleClick(){
        const showState = this.state.show;
        this.setState({show:  !showState})
    }
    render () {
        return(
            <Container>
                < LogoContainer>
                    <Link to="/">
                        <img id="logo" src={Iconcrown} alt="logo"/>
                    </Link>
                </ LogoContainer>
                <NavbarLinks >
                    <Link to="/shop">Shop</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/sign">Sign in</Link>
                    <img onClick={this.handleClick} src={IconBag} alt="bag"/>
                </NavbarLinks>
                {
                    this.state.show === true ? (<CardPopup/>) :null
                }
            </Container>

        )
    }
} 

export default Navbar;