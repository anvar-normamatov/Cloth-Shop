import React, {useState} from "react";
import axios from "axios"
import Button from "../Buttons"
import { 
  Input, 
  Form, 
  Title,  
  Container  
} from "./style";


const SignIn = () =>{

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handlesubmit = (e) =>{
    e.preventDefault();
    axios('https://jsonplaceholder.typicode.com/posts' ,{
      method:"POST",
      body:JSON.stringify({
        name:name,
        email:email
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(res =>{

    })
    .catch(err =>{
      
    })
  };

  const handleName = (e) =>{
    e.persist();
    setName( e.target.value);
  };
  const handleEmail = (e) =>{
    e.persist();
    setEmail( e.target.value);
  };
 
  return(
    <Container>
      <Title weight>I already have an account</Title>
      <Title fontsize>Sign in with your email and password</Title>
      <Form  onSubmit={handlesubmit}>
        <Input name="email" onChange={handleName} type="text" placeholder="email"/>
        <Input name="password" onChange={handleEmail} type="password" placeholder="password"/>
        <Button formBtn >Sign in</Button>
      </Form>
    </Container>
  )
}

export default SignIn;