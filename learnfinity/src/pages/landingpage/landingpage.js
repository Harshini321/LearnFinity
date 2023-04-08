import React from 'react';
import './landingpage.css';
import logo from '../../images/logo_black.png';
import Login_btn from '../../components/login';
import Register_btn from '../../components/register'
export default function landingpage() {
  return (
    <div class='container-fluid landing  min-vh-100'>
        <div class="bg-image"></div>
        <div class="bg-text1">
            <div class="row">
                <div class="col-1 logo">
                <a class='navbar-brand ' href='/'>
					<img src={logo} alt='CAIC' width='100' height='60' />
				</a>
                </div>
                <div class="col-7"></div>
                <div class="col-4">
                    <div class="row">
                        <div class="col-4"></div>
                        <Login_btn></Login_btn>
                        <Register_btn></Register_btn>
                        <div class="col-2 l_btn2"></div>
                    </div>
                </div>             
            </div>

        </div>
        <div class="bg-text">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-2"></div>
                    <div class="col-8 main_ttl_div">
                        <h1 class='main_ttl'>LEARNFINITY</h1>
                    </div>
                    <div class="col-2"></div>
                </div>
            </div>
            <div class="container-fluid">
                <div class="row py-1">
                    <div class="col-1"></div>
                    <div class="col-10 ">
                        <h4 class='lp_txt'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </h4>
                    </div>
                    <div class="col-1"></div>
                </div>
            </div>
            <div class="container-fluid btm">
                <div class="row">
                    <div class="col-4"></div>
                    <div class="col-4 rmbtn_div">
                        <button type="button" class="btn btn-primary rmbtn">Read More</button>
                    </div>
                    <div class="col-4"></div>
                </div>
            </div>
        </div>
    </div>
  );
}