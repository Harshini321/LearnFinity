import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
function Register() {
    const { register, watch, handleSubmit, reset, formState: { errors } } = useForm();
    const submitForm = (data) => {
        if (data.password === data.confirmPassword) {

            const body = {
                username: data.username,
                email: data.email,
                password: data.password
            }
            const requestOptions = {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(body)
            }
            fetch('/signup', requestOptions)
                .then(res => res.json())
                .then(data => console.log(data))
                .catch(err => console.log(err))
            reset()
        } else {
            alert("Passwords did not match")
        }
    }
    return (
        <div class='container-fluid'>
            <div class='row'>
                <div class='col-4'></div>
                <div class='col-4 vertical-center'>
                    <div class="card">
                        <div class="card-body">
                            <div class='form'>
                                <h3 class='text-center'>Sign Up</h3>
                                <form>
                                    <Form.Group class='my-3'>

                                        <Form.Control type="text"
                                            placeholder="Username"
                                            {...register("username", { required: true })}
                                        ></Form.Control>
                                        {errors.username && <span style={{ color: "red" }}>Username is required</span>}
                                    </Form.Group>

                                    <Form.Group class='my-3'>

                                        <Form.Control type="email"
                                            placeholder="Email"
                                            {...register("email", { required: true })}
                                        ></Form.Control>
                                        {errors.email && <span style={{ color: "red" }}>Email is required</span>}
                                    </Form.Group>
                                    <Form.Group class='my-3'>

                                        <Form.Control type="password"
                                            placeholder="Password"
                                            {...register("password", { required: true })}
                                        ></Form.Control>
                                        {errors.password && <span style={{ color: "red" }}>Password is required</span>}
                                    </Form.Group>
                                    <Form.Group class='my-3'>

                                        <Form.Control type="password"
                                            placeholder="Confirm Password"
                                            {...register("confirmPassword", { required: true })}
                                        ></Form.Control>
                                        {errors.confirmPassword && <span style={{ color: "red" }}>confirmPassword is required</span>}
                                    </Form.Group>
                                    <Form.Group>
                                        <Button as="sub" variant="primary" onClick={handleSubmit(submitForm)} class="btn btn-primary sub-btn btn-block loginbtn">Register</Button>
                                    </Form.Group>
                                    <Form.Group class='mt-3 px-2'>
                                        <small>Already have an account? <Link to='/signin' class='rm_ud px-3'>SignIn</Link></small>
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

export default Register