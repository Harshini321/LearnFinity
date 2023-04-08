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
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-4'></div>
            <div className='col-4 vertical-center'>
                <div class="card">
                    <div class="card-body">
                    <div className='form'>
                        <h3 className='text-center'>Sign Up</h3>
                        <form>
                            <Form.Group className='my-3'>
                                
                                <Form.Control type="text"
                                    placeholder="Username"
                                    {...register("username",{required:true})}
                                    // value={username}
                                    // name="username"
                                    // onChange={(e)=>{setUsername(e.target.value)}}
                                ></Form.Control>
                                {errors.username && <span style={{color:"red"}}>Username is required</span>}
                            </Form.Group>
                            
                            <Form.Group className='my-3'>
                                
                                <Form.Control type="email"
                                    placeholder="Email"
                                    {...register("email",{required:true})}
                                    // value={email}
                                    // name="email"
                                    // onChange={(e)=>{setEmail(e.target.value)}}
                                ></Form.Control>
                                {errors.email && <span style={{color:"red"}}>Email is required</span>}
                            </Form.Group>
                            <Form.Group className='my-3'>
                                
                                <Form.Control type="password"
                                    placeholder="Password"
                                    {...register("password",{required:true})}
                                    // value={password}
                                    // name="password"
                                    // onChange={(e)=>{setPassword(e.target.value)}}
                                ></Form.Control>
                                {errors.password && <span style={{color:"red"}}>Password is required</span>}
                            </Form.Group>
                            <Form.Group className='my-3'>
                                
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
                                <Button as="sub" variant="primary" onClick={handleSubmit(submitForm)} className="btn btn-primary sub-btn btn-block loginbtn">Register</Button>
                            </Form.Group>
                            <Form.Group className='mt-3 px-2'>
                                <small>Already have an account? <Link to ='/signin' className='rm_ud px-3'>SignIn</Link></small>
                            </Form.Group>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
            <div className='col-4'></div>
        </div>
        
    </div>
  )
}

export default Register