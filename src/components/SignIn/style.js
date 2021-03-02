import styled from "styled-components";

export const Input = styled.input`
  width:98%;
  height:55px;
  color:black;
  font-size:18px;
  margin-top:20px;
  outline:none;
  border:none;
  border-bottom:0.5px solid rgb(128,128,128);
  ::placeholder{
    font-size:18px;
    font-family:"Open Sans Condensed";;
    font-weight:400;
  }
`;

export const Form = styled.form`
  width:100%;
  height:100%;
  display:flex;
  flex-direction:column;
  justify-content:center;
`;

export const Container = styled.div`
  width:30%;
  height:fit-content;
  display:flex;
  flex-direction:column;
`;

export const Title = styled.h1`
  line-height:8px;
  font-size: ${props => props.fontsize ? "18px": "24px"};
  font-weight: ${props =>props.weight ? "700" : "300"};
  font-family:"Open Sans Condensed";
  font-style:normal;
  color:black;
`;
