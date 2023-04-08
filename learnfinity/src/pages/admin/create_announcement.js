import React,{useState} from 'react'
import { Form,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./admin.css"
function Create_Ann() {
    const {register,handleSubmit,rest,formState:{errors}}=useForm()
  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-4'></div>
            <div className='col-4 vertical-center'>
                <div class="card">
                    <div class="card-body">
                        <div className='form'>
                        <h3 className='text-center'>Create Announcement</h3>
                        <form>
                            <Form.Group className='my-3'>
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text"
                                    placeholder=""
                                    // value={username}
                                    name="username"
                                    // onChange={(e)=>{setUsername(e.target.value)}}
                                ></Form.Control>
                            </Form.Group>
                            
                            <Form.Group className='my-3'>
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" rows={5}
                                    placeholder="Type here..."
                                    // value={password}
                                    name="password"
                                    // onChange={(e)=>{setPassword(e.target.value)}}
                                ></Form.Control>
                            </Form.Group>
                            
                            <Form.Group className='text-center'>
                                <Button as="sub" variant="primary" className="btn btn-primary sub-btn btn-block loginbtn" >Create</Button>
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

export default Create_Ann