import React,{useState} from 'react'
import { Form,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import "./admin.css"
function Create_Ann() {
    const {register,handleSubmit,rest,formState:{errors}}=useForm()
    const createAnn=(data)=>{
        console.log(data)
        // const token=localStorage.getItem('REACT_TOKEN_AUTH_KEY');
        // console.log(token)
        const requestOptions={
            method : 'POST',
            headers:{
                'content-type':'application/json'
            },
            body : JSON.stringify(data)
        }
        fetch('/announcement',requestOptions)
        .then(res=>res.json())
        .then(data=>console.log(data))
        .catch(err=>console.log(err))
    }
  return (
    <div class='container-fluid'>
        <div class='row'>
            <div class='col-4'></div>
            <div class='col-4 vertical-center'>
                <div class="card">
                    <div class="card-body">
                        <div class='form'>
                        <h3 class='text-center'>Create Announcement</h3>
                        <form>
                            <Form.Group className='my-3'>
                                <Form.Label>Course Id</Form.Label>
                                <Form.Control type="text"
                                    {...register('course_id',{required:true})}
                                ></Form.Control>
                            </Form.Group>
                            {errors.course_id && <p style={{color:'red'}}>Course Id is Required</p>}
                            <Form.Group className='my-3'>
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text"
                                    {...register('title',{required:true,maxLength:200})}
                                ></Form.Control>
                            </Form.Group>
                            {errors.title && <p style={{color:'red'}}>Title is Required</p>}
                            
                            <Form.Group class='my-3'>
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" rows={5}
                                    placeholder="Type here..."
                                    {...register('body',{required:true})}
                                ></Form.Control>
                            </Form.Group>
                            {errors.body && <p style={{color:'red'}}>Body is Required</p>}
                            
                            <Form.Group className='text-center'>
                                <Button as="sub" variant="primary" className="btn btn-primary sub-btn btn-block loginbtn" onClick={handleSubmit(createAnn)} >Create</Button>
                            </Form.Group>
                            
                        </form>
                    </div>
                    </div>
                </div>
                
            </div>
            <div class='col-4'></div>
        </div>
    </div>
  )
}

export default Create_Ann