import React from 'react';
import './landingpage.css';
import logo from '../../images/logo_black.png';
import Login_btn from '../../components/login';
import Register_btn from '../../components/register'
export default function landingpage() {
    return (
        <div class='container-fluid landing  min-vh-100'>
            <div class="bg-image" id="inf"></div>
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
                            {/* <Register_btn></Register_btn> */}
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
                                Learnfinity is a powerful and innovative platform that enables educators to create, manage, and deliver engaging and effective learning experiences for students. With its comprehensive suite of tools, features, and functionalities, our LMS provides educators with the ability to create content, track learner progress, deliver personalized instruction, and facilitate communication and collaboration among learners and instructors. It is an essential tool for anyone looking to optimize their learning and development initiatives.
                            </h4>
                        </div>
                        <div class="col-1"></div>
                    </div>
                </div>
                <div class="container-fluid btm">
                    <div class="row">
                        <div class="col-4"></div>
                        <div class="col-4"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}