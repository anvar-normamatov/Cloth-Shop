import React from "react";
import Navbar from "../../components/Navbar";
import SignIn from '../../components/SignIn';
import SignUp from "../../components/SignUp";

import { Container } from "./styles";




const SignPage = () =>{
  return(
    <>
      <Navbar/>
      < Container>
        <SignIn/>
        <SignUp />
      </Container>
    </>
  )
}

export default SignPage;