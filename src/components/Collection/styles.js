import styled from "styled-components"



export const Container =styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
`;

export const CategoryRow =styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 10px;
`;


export const ItemAbove =styled.div`
    width: 30%;
    height: 300px;
    border: 2px solid black;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-size: 100%;
    transition: 3s ease background-size;
    &:hover{
        background-size: 110%;
    }
`;

export const ItemLabel =styled.div`
    width: 120px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1.5px solid black;
    position: absolute;
    background-color: white;
    opacity: 0.7;
    &:hover{
        opacity: 0.9;
    }
`;


export const ItemName =styled.h1`
    font-size: 22px;
    font-weight: 700;
    font-family: 'Open Sans Condensed';
    text-transform: uppercase;
    color: #4a4a4a;
    line-height: 5px;
`;

export const ItemText =styled.h1`
    font-size: 16px;
    font-family: 'Open Sans Condensed';
    font-weight: 100;
    text-transform: uppercase;
    color: grey;
    line-height: 5px;
`;

export const CategoryItem =styled.div`
    width: 47%;
    height: 55vh;
    border: 2px solid black;
    display: flex;
    cursor: pointer;
    flex-direction: column ;
    justify-content: center;
    align-items: center;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-size: 100%;
    transition: 3s ease background-size;
    &:hover{
        background-size: 110%;
    }
`;

