import React from 'react';
import './footer.css';
import lg from '../../images/logo_black.png';
export default function footer() {
  return (      
    <div class="card mt-3" >
            <footer>
                <div class="card-body">
                    <div class="row ftr  text-center" >
                        <div class="col-1">
                            <a className='navbar-brand nav-logo' href='/'>
                                <img src={lg} alt='CAIC' width='100' height='60' />
                            </a>
                        </div>
                        <div class="col-11">
                            <h6>You are logged in as Sakshi (log out)</h6>
                            <small>© Copyright LearnFinity  </small>
                        </div>
                    </div>
                </div>
                </footer>
            </div>
  );
}