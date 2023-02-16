import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import './Signup.css';
import signupbg from './signupbg.png';

const Signup = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    fname: "", lname: "", email: "", password: "", cpassword: ""
  });

  let name, value;

  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  }

  const PostData = async (e) => {
    e.preventDefault();

    const { fname, lname, email, password, cpassword } = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        fname, lname, email, password, cpassword
      })
    });

    const data = await res.json();

    if (res.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert("Registration successful");
      console.log("successful Registration");

      navigate("/login");
    }
  }

  return (
    <div>
      <section className='signup'>
        <div className='login_container'>
          <div className='left_collumn'>
            <div className='signup-content'>
              <div className='signin_form'>
                <h2 className='form_title'>Create an account</h2>
                <h3 className='form_title2'>Welcome to Trustify!Please give your details.</h3>
                <button className='login_google'><span className='google_logo'><FcGoogle />  </span>Sign up with Google</button>
                <h3 className='or_line'>------------------ or ------------------</h3>

                <form method='POST' className='register-form' id='register-form'>


                  <label htmlFor='fname'>
                    {/* icon logo */}
                  </label>
                  <input className='form-control' type='text' name='fname' id='fname' autoComplete='off' value={user.lname} onChange={handleInputs} placeholder='Your fname' />




                  <label htmlFor='lname'>
                    {/* icon logo */}
                  </label>
                  <input className='form-control' type='text' name='lname' id='lname' autoComplete='off' value={user.fname} onChange={handleInputs} placeholder='Your lname' />



                  <label htmlFor='email'>
                    {/* icon logo */}
                  </label>
                  <input className='form-control' type='text' name='email' id='email' autoComplete='off' value={user.email} onChange={handleInputs} placeholder='Your email' />




                  <label htmlFor='password'>
                    {/* icon logo */}
                  </label>
                  <input className='form-control' type='text' name='password' id='password' autoComplete='off' value={user.password} onChange={handleInputs} placeholder='Set password' />




                  <label htmlFor='cpassword'>
                    {/* icon logo */}
                  </label>
                  <input className='form-control ' type='text' name='cpassword' id='cpassword' autoComplete='off' value={user.cpassword} onChange={handleInputs} placeholder='Confirm password' />



                  <input type='submit' name='signup' id='signup' className='form-submit signinbtn' value='register' onClick={PostData} />


                </form>

                <div className='signup-image'>
                  {/* svg image  */}
                  <h2 className='create_new'>Already a user?<Link className='create_new2' to='/login'> Back to login</Link></h2>
                </div>
              </div>
            </div>
            </div>
            <div className='right_collumnsignup'>
              <img className='loginbgsignup' src={signupbg} />
            </div>
          
        </div>
      </section>
    </div>
  )
}

export default Signup