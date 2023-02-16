import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css';
import { FcGoogle } from 'react-icons/fc'
import loginbg from './loginbg.png';
const Login = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email, password
      })
    });

    const data = res.json();
    if (res.status === 400 || !data) {
      window.alert("Invalid Credentials");
    } else {
      window.alert("Login Successfull")
      navigate("/");
    }

  }
  return (
    <div>
      <section className='signin'>
        <div className='login_container'>
          <div className='left_collumn'>
            <div className='signin-content'>
              <div className='signin_form'>
                <h2 className='form_title'>Welcome back, to Trustify</h2>
                <h3 className='form_title2'>Welcome back! Please enter your details.</h3>


                <button className='login_google'><span className='google_logo'><FcGoogle />  </span>Log in with Google</button>

                <h3 className='or_line'>------------------ or ------------------</h3>

                <form method='POST' className='register-form' id='register-form'>

                  <div className='form-group'>
                    <label htmlFor='email'>
                      {/* icon logo */}
                    </label>
                    <input className='form-control' type='text' email='email' id='email' autoComplete='off' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Your email' />
                  </div>


                  <div className='form-group'>
                    <label htmlFor='password'>
                      {/* icon logo */}
                    </label>
                    <input className='form-control ' type='text' password='password' id='password' autoComplete='off' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter password' />
                  </div>
                  <div className='remember'>
                    <input type="checkbox" id="remember_me" name="remember_me" value="Remember me" />
                    <label for="remember_me"> Remember me</label>
                    <Link to='/forgotpass' className='forgot_password'>Forgot password</Link>

                  </div>

                  <div className='form-group form-button'>
                    <input type='submit' name='signin' id='signin' className='form-submit signinbtn' value='Log in' onClick={loginUser} />
                  </div>
                </form>
                <div className='signin-image'>
                  {/* svg image  */}
                  <h2 className='create_new'>Don't have an account? <Link to='/signup' className='create_new2'>Create a account</Link></h2>
                </div>
              </div>
            </div>
          </div>

          <div className='right_collumn'>
            <img className='loginbg' src={loginbg} />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login