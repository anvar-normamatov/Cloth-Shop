import React, {useState} from "react";
import Button from "../Buttons";
import axios from "axios"
import { 
    Input,
    Form, 
    Title 
  } from "./styles";


const SignUp = () =>{

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordtwo, setPasswordtwo] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    axios('https://jsonplaceholder.typicode.com/posts',{
      method:"POST",
      body:JSON.stringify({
        name:name,
        email:email,
        password:password,
        passwordtwo:passwordtwo,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(res=>{

    })
    .catch(err=>{

    })
  }

  const handleName = (e) =>{
    e.persist();
    setName(e.target.value);
  }
  const handleEmail = (e) =>{
    e.persist();
    setEmail(e.target.value);
  }
  const handlePassword = (e) =>{
    e.persist()
    setPassword(e.target.value);
  }
  const handlePasswordtwo = (e) =>{
    e.persist()
    setPasswordtwo(e.target.value);
  }
  

  return(
    <Form onSubmit={handleChange} >
      <Title weight>I do not have a account</Title>
      <Title size>Sign up with your email and password</Title>
      <Input name="name" placeholder="Display name" onChange={handleName} type="text"></Input>
      <Input name="email" placeholder="Email" onChange={handleEmail} type="email"></Input>
      <Input name="password" placeholder="Password" onChange={handlePassword}  type="password"></Input>
      <Input name="password" placeholder="Confirm Password"  onChange={handlePasswordtwo}  type="password"></Input>
      <Button formBtn>Sign Up</Button>
    </Form>
  )
}

export default SignUp;