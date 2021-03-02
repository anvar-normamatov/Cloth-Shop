import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;
`;

export const Title = styled.h1`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    font-size: 28px ;
    font-weight:700 ;
    font-style: normal;
    font-family:"Open Sans Condensed";
    text-transform: uppercase;
    &:hover{
        color:#808080;
    }
`;

