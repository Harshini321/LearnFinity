import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useCookies } from 'react-cookie';
import { ReactSession } from 'react-client-session';

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