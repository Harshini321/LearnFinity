// import React from 'react'
// import {useForm } from 'react-hook-form';
// function Eval_submission() {
//     // const {register,handleSubmit}=useForm()
//     // const onSubmit=(data)=>{
//     //     console.log(data)
//     // }
//   return (
//     <div>
//         {/* <form onSubmit={handleSubmit(onSubmit)}> 
//             <input {...register('test', { required: true })} typr="file" name="evaluation_submition"></input>
//             <button>Submit</button>
//         </form> */}
//         <h1>Upload File</h1>
//         <input type="file" name="submission"></input>
//         <button>Submit</button>
//     </div>
//   )
// }

// export default Eval_submission



import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Form,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useCookies } from 'react-cookie';
import { ReactSession } from 'react-client-session';

// import { ReactSession } from 'react-client-session';

import axios from 'axios'
function Eval_submission() {

  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-4'></div>
            <div className='col-4 vertical-center'>
                <div class="card">
                    <div class="card-body">
                        <div className='form'>
                        <h3 className='text-center'>Make Submission</h3>
                        <form>
                            <input type="file" name="submission" className='mb-3' ></input>
                            <br></br>
                            <button class="btn btn-primary btn-sm" className="btn btn-primary  loginbtn">Submit</button>
                            {/* <Form.Group className='my-3'>
                                
                                <Form.Control type="text"
                                    placeholder="Email Id"
                                    value={email_id}
                                    name="email_id"
                                    onChange={(e)=>{setEmailid(e.target.value)}}
                                ></Form.Control>
                            </Form.Group>
                            
                            <Form.Group className='my-3'>
                                
                                <Form.Control type="password"
                                    placeholder="Your password"
                                    value={password}
                                    name="password"
                                    onChange={(e)=>{setPassword(e.target.value)}}
                                ></Form.Control>
                            </Form.Group>
                            
                            <Form.Group className='text-center'>
                                <Button as="sub" variant="primary" className="btn btn-primary sub-btn btn-block loginbtn" onClick={loginUser}>Login</Button>
                            </Form.Group>
                            <Form.Group className='mt-3 px-3'>
                                <small>Do not have an account? <Link to ='/signup' className='rm_ud px-3'>Create one</Link></small>
                            </Form.Group> */}
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

export default Eval_submission