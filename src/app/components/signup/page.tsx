"use client";

import { useState } from 'react'
import './Signup.css'
import Button from '../Buttons/Buttons'
import { useNavigate } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { createUserWithEmailAndPassword, auth } from '../../firebase/firebaseConfig'

const Signup = () => {

  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: ''
  })
  const handleInputF = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value })
  }


  // ------------ firebase ------------------

  const handleSubmitF = (e: React.MouseEvent<HTMLDivElement>) => {

    if (inputs.name.trim() !== '' && inputs.email.trim() !== '' && inputs.password.trim() !== '') {
      const target = e.target as HTMLDivElement;
      target.innerText = 'Loading...'
      createUserWithEmailAndPassword(auth, inputs.email, inputs.password)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log(user);
          // ...
          target.innerText = 'Signup'
          setInputs({ name: '', email: '', password: '' })
        })
        .catch((error) => {
          const errorMessage = error.message;
          alert(errorMessage);
          target.innerText = 'Signup'
          // ..
        });
    } else {
      alert('please fill all the fields')
    }
  }




  return (
    <div className='Signup'>

      {/* ============= welcome side =============== */}
      <div className="welcomeSide">
        <div className="logo" onClick={() => window.location.href = '/'}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh8iJvDm9cFn8OxVQlRhuB5IRY0VXqw_d-kQTZjitYMKGr1tGsumy-6ygGrZL0FIUd4so&usqp=CAU" alt="logo" />
        </div>
        <div className="heading headingH3">
          Style Redefined!
        </div>
        <div className="signup paragraphP1">
          <p>Already have an account??</p>
          <div onClick={() => window.location.href = '/components/signin'} className="signinBtn">
            <Button text={"Signin"} bg={"--primaryColor"} />
          </div>
        </div>
      </div>


      {/* =============== form side ================== */}
      <div className="formSide">

        <div className="heading headingH1">
          Create Account
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
            <FontAwesomeIcon className='icon' icon={faUser} />
            <input name='name' onChange={handleInputF} value={inputs.name} type="text" placeholder='Name' />
          </div>
          <div className="emailInput">
            <FontAwesomeIcon className='icon' icon={faEnvelope} />
            <input name='email' onChange={handleInputF} value={inputs.email} type="email" placeholder='Email' />
          </div>
          <div className="passwordInput">
            <FontAwesomeIcon className='icon' icon={faLock} />
            <input name='password' onChange={handleInputF} value={inputs.password} type="password" placeholder='Password' />
          </div>
        </div>
        <span className='paragraph1' id='forgotPassword'>Forgot your password?</span>
        <div onClick={handleSubmitF} className="signupBtn">
          <Button text={"Sigup"} bg={"--secondaryColor"} />
        </div>
      </div>



    </div>
  )
}

export default Signup