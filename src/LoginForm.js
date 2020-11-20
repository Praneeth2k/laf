import React, {useEffect, useState} from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {Link, useHistory} from "react-router-dom";
import axios from "./axios";

function LoginForm(){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const history = useHistory()
    function handleChange(event){
        const { name, value } = event.target
        name == "email"? setEmail(value): setPassword(value)
    }
    
    function handleSubmit(event){
        event.preventDefault()
        axios.post('/login', {
            email,
            password
        }).then((response) => {
            console.log(response)
            if(response.data.msg){
                setError(response.data.msg)
            }
            else{
                history.push('/lost', {
                    token: response.data.token,
                    user: response.data.user
                })
                console.log(response)
            }
        })
        .catch(error => {
            console.log(error)
        })
          
    }
    return (
        <div style = {{width:"30rem", border: "solid", borderWidth:"1px", borderRadius:"2%"}} >
            <h1>{error? error: ""}</h1>
            <Form style = {{width:"25rem", padding:"1rem"}}>
                <h2>Login</h2>
                <FormGroup style = {{padding:"1rem",width:"20rem"}}>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name = "email" onChange = {handleChange} value = {email}  placeholder="enter e-mail" />
                </FormGroup>
                <FormGroup style = {{padding:"1rem", width:"20rem"}}>
                    <Label for="examplePassword">Password</Label>
                    <Input type="password" name = "password" onChange = {handleChange} value = {password} placeholder="password placeholder" />
                </FormGroup>
                <Button color="success" onClick = {handleSubmit}>Log in</Button>
                

            </Form>
            
        </div>
    )

}
export default LoginForm;