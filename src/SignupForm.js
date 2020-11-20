import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {useHistory} from "react-router-dom";
import axios from "./axios";

function SignupForm(){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory()
    function handleChange(event){
        const {name, value} = event.target
        if(name == "name") setName(value)
        else if(name == "email") setEmail(value)
        else setPassword(value)
    }

    function handleSubmit(event){
        event.preventDefault()
        axios.post('/signup', {
            name,
            email,
            password
        }).then(response => {
            console.log(response.data)
            history.push('/lost')
        })
          .catch(error => console.log(error))
        
    }
    return(
        <div style = {{width:"30rem", border: "solid", borderWidth:"1px", borderRadius:"2%"}} >
            <Form style = {{width:"25rem", padding:"1rem"}}>
                <h2>Sign up</h2>
                <FormGroup>
                    <Label>Name</Label>
                    <Input name = "name" onChange = {handleChange} value = {name} placeholder = "Name"/>
                </FormGroup>
                <FormGroup style = {{padding:"1rem",width:"20rem"}}>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name="email" onChange = {handleChange} value = {email} id="exampleEmail" placeholder="enter e-mail" />
                </FormGroup>
                <FormGroup style = {{padding:"1rem", width:"20rem"}}>
                    <Label for="examplePassword">Password</Label>
                    <Input type="password" name="password" onChange = {handleChange} value = {password} id="examplePassword" placeholder="password placeholder" />
                </FormGroup>
                <Button color="success" onClick = {handleSubmit}>Sign up</Button>
                

            </Form>
            
        </div>
    )
}
export default SignupForm;