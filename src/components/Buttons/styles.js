import styled, {css} from "styled-components";

const Getbuttons = (props) =>{
    if (props.formBtn){
        return(FormBtn);
    }else{
        return( Container );
    }
}

export const Container =styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0px 35px;
    font-size: 15px;
    text-transform: uppercase;
    font-family:"Open Sans Condensed" ;
    font-weight: bolder;
    cursor: pointer;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    background-color: black;
    color: white;
    border: none;
    ${Getbuttons}
`;

export const FormBtn =css`
    width:200px;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0px 35px;
    font-size: 15px;
    text-transform: uppercase;
    font-family:"Open Sans Condensed" ;
    font-weight: bolder;
    cursor: pointer;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    background-color: black;
    color: white;
    border: 2px solid black ;
    margin-top:40px;
    &:hover{
        border: 1px solid black ;  
        background-color:white;
        color:black;
    }
`;
