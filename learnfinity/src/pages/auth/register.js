import React,{useState} from 'react'
import { Form,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {useForm } from 'react-hook-form'
function Register() {
    // const [username,setUsername]=useState('')
    // const [email,setEmail]=useState('')
    // const [password,setPassword]=useState('')
    // const [confirmPassword,setConfirmPassword]=useState('')
    
    const {register, watch, handleSubmit,reset, formState:{errors}}=useForm();
    const submitForm =(data) =>{
        if (data.password===data.confirmPassword){

            const body={
                username:data.username,
                email:data.email,
                password:data.password
            }
            const requestOptions={
                method:"POST",
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(body)
            }
            fetch('/signup',requestOptions)
            .then(res=>res.json())
            .then(data=>console.log(data))
            .catch(err=>console.log(err))
            reset() 
        }else{
            alert("Passwords did not match")
        }
        
        // setUsername('')
        // setEmail('')
        // setPassword('')
        // setConfirmPassword('')
    }
  return (
    <div className='container'>
        <div className='form'>
            <h1>Sign Up Page</h1>
            <form>
                <Form.Group>
                    <Form.Label>UserName</Form.Label>
                    <Form.Control type="text"
                        placeholder="Your username"
                        {...register("username",{required:true})}
                        // value={username}
                        // name="username"
                        // onChange={(e)=>{setUsername(e.target.value)}}
                    ></Form.Control>
                    {errors.username && <span style={{color:"red"}}>Username is required</span>}
                </Form.Group>
                
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email"
                        placeholder="Your email"
                        {...register("email",{required:true})}
                        // value={email}
                        // name="email"
                        // onChange={(e)=>{setEmail(e.target.value)}}
                    ></Form.Control>
                    {errors.email && <span style={{color:"red"}}>Email is required</span>}
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password"
                        placeholder="Your password"
                        {...register("password",{required:true})}
                        // value={password}
                        // name="password"
                        // onChange={(e)=>{setPassword(e.target.value)}}
                    ></Form.Control>
                    {errors.password && <span style={{color:"red"}}>Password is required</span>}
                </Form.Group>
                <Form.Group>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password"
                        placeholder="Confirm Password"
                        {...register("confirmPassword",{required:true})}
                        // value={confirmPassword}
                        // name="confirmPassword"
                        // onChange={(e)=>{setConfirmPassword(e.target.value)}}
                    ></Form.Control>
                    {errors.confirmPassword && <span style={{color:"red"}}>confirmPassword is required</span>}
                </Form.Group>
                <Form.Group>
                    <Button as="sub" variant="primary" onClick={handleSubmit(submitForm)}>Register</Button>
                </Form.Group>
                <Form.Group>
                    <small>Already have an account? <Link to ='/signin'>SignIn</Link></small>
                </Form.Group>
            </form>
        </div>
    </div>
  )
}

export default Register