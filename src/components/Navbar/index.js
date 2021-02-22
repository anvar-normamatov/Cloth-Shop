import React from 'react';
import { Link } from "react-router-dom"
import CardPopup from "../CardPopup"
import './styles.scss'
import IconBag from '../../assets/icon/shopping-bag.png'
import Iconcrown from "../../assets/icon/royal-crown-of-three-triangles.png";


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
            <div className="Navbar-container">
                <div className ="logo-container">
                    <Link to="/">
                        <img id="logo" src={Iconcrown} alt="logo"/>
                    </Link>
                </div>
                <div className="navbar-links">
                    <Link to="/shop">Shop</Link>
                    <Link to="/contact">Contact</Link>
                    <a href="#">Sign in</a>
                    <img onClick={this.handleClick} src={IconBag} alt="bag"/>
                </div>
                {
                    this.state.show === true ? (<CardPopup/>) :null
                }
            </div>

        )
    }
} 

export default Navbar;