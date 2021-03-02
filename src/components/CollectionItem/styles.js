import styled from "styled-components";


export const Container =styled.div`
     width: 23.8%;
     height: 370px;
     display: flex;
     flex-direction: column;
     margin-bottom: 50px;  
`;

export const ShopItemContainer =styled.div`
     width: 100%;
     height: 90%;
     display:flex;
     justify-content: center;
     align-items: flex-end;
     img{
          width: 100%;
          height: 100%;
          object-fit: cover;
     }
     &:hover{
          .btn{
               display:block;
          }
     }
`;

export const ShopItemFooter =styled.div`
     width: 100%;
     height: 10%;
     display: flex;
     flex-direction: row;
     justify-content: space-between;
`;

export const ClothName =styled.h1`
     width: fit-content;
     font-size: 18px;
     font-weight:300;
     font-family:"Open Sans Condensed";
     font-style:normal ;
`;

export const CollectionButton =styled.button`
     width:250px;
     height:50px;
     display:none;
     margin-bottom:20px;
     position: absolute;
     background-color: white;
     color: black;
     text-transform:uppercase;
     font-family:"Open Sans Condensed";
     font-weight:400;
     font-size:16px;
     border:1px solid black;
     opacity:0.8;
     cursor: pointer;
     &:hover{
          display: block;
          background-color: black;
          color:white;
     }
`;