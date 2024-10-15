"use client";

import React, { useState } from 'react'
import './Signin.css'
import Button from '../Buttons/Buttons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { createUserWithEmailAndPassword, auth, signInWithEmailAndPassword } from '../../firebase/firebaseConfig'


const Signin = () => {
  interface userObject {
    name: string,
    email: string,
    password: string,
  }
  const [inputs, setInputs] = useState({
    email: '',
    password: ''
  })
  const handleInputF = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value })
  }

  // ------------ firebase ------------------

  const handleSubmitF = (e: React.MouseEvent<HTMLDivElement>) => {

    if (inputs.email.trim() !== '' && inputs.password.trim() !== '') {
      const target = e.target as HTMLDivElement;
      target.innerText = 'Loading...'
      signInWithEmailAndPassword(auth, inputs.email, inputs.password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
          console.log(user);
          // ...
          target.innerText = 'Signin'
          setInputs({email: '', password: '' })
        })
        .catch((error) => {
          const errorMessage = error.message;
          alert(errorMessage);
          target.innerText = 'Signin'
        });
      
    } else {
      alert('please fill all the fields')
    }
  }


  return (
    <div className='Signin'>

      {/* ========== form side ======== */}
      <div className="formSide">
        <div className="logo" onClick={() => window.location.href = '/'}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh8iJvDm9cFn8OxVQlRhuB5IRY0VXqw_d-kQTZjitYMKGr1tGsumy-6ygGrZL0FIUd4so&usqp=CAU" alt="logo" />
        </div>
        <div className="heading headingH1">
          Sign in to Ideas
        </div>
        <div className="icons">
          <FontAwesomeIcon className='icon' icon={faFacebook} />
          <FontAwesomeIcon className='icon' icon={faGoogle} />
          <FontAwesomeIcon className='icon' icon={faLinkedin} />
        </div>
        <span className='paragraph1'>or use your email account</span>

        {/* form */}
        <div className="form">
          <div className="emailInput">
            <FontAwesomeIcon className='icon' icon={faEnvelope} />
            <input onChange={handleInputF} value={inputs.email} name='email' type="email" placeholder='Email' />
          </div>
          <div className="passwordInput">
            <FontAwesomeIcon className='icon' icon={faLock} />
            <input onChange={handleInputF} name='password' value={inputs.password} type="password" placeholder='Password' />
          </div>
        </div>
        <span className='paragraph1' id='forgotPassword'>Forgot your password?</span>
        <div onClick={handleSubmitF} className="signinBtn">
          <Button text={"Sigin"} bg={"--secondaryColor"} />
        </div>
      </div>


      {/* ========== welcome side ======== */}
      <div className="welcomeSide">
        <div className="heading headingH3">
          Welcome Back!
        </div>
        <div className="signup paragraphP1">
          <p>Don't have an account?</p>
          <div onClick={() => window.location.href = '/components/signup'} className="signupBtn">
            <Button text={"Signup"} bg={"--primaryColor"} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signin 