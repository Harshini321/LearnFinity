import React,{useState} from 'react'
import { Form,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import "./admin.css"
import {useForm} from 'react-hook-form'
function Create_Ann() {
    const {register,handleSubmit,rest,formState:{errors}}=useForm()
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
                            <Form.Group class='my-3'>
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text"
                                    placeholder=""
                                    // value={username}
                                    name="username"
                                    // onChange={(e)=>{setUsername(e.target.value)}}
                                ></Form.Control>
                            </Form.Group>
                            
                            <Form.Group class='my-3'>
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" rows={5}
                                    placeholder="Type here..."
                                    // value={password}
                                    name="password"
                                    // onChange={(e)=>{setPassword(e.target.value)}}
                                ></Form.Control>
                            </Form.Group>
                            
                            <Form.Group class='text-center'>
                                <Button as="sub" variant="primary" class="btn btn-primary sub-btn btn-block loginbtn" >Create</Button>
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