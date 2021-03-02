import styled from "styled-components";


export const Container =styled.div`
    width: 95%;
    height: 75px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
`;

export const LogoContainer =styled.div`
    width: fit-content;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: auto;
    margin-bottom: auto;
    img{
        width: 50px;
        height: 60px;
        cursor: pointer;
    }
`;

export const NavbarLinks =styled.div`
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    a{
        font-size: 16px;
        font-weight: 400;
        font-family: 'Open Sans Condensed';
        font-style: normal;
        margin-left: 20px;
        color: #000000;
        text-transform: uppercase;
        text-decoration: none;
        cursor: pointer;
    }
    img{
        width: 30px;
        height: auto;
        cursor: pointer;
        margin-left: 20px;
    }
`;

