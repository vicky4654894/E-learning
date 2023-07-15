import React, { useState } from 'react';
import Navbar from './Navbar';
import Login from './Login';
import Footer from './Footer';
import SignUp from './Signup';
import Cource from './Cource';
import About  from './About';
import Home from './Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Parent() {
  let data = {
    Email: '',
    password:''
}
  const[authentication,setAuthentication] = useState(false);
  const[verifyData,setverifyData] = useState(data);
  const[showLogout,setshowLogout] = useState(false);
  const handleSignUp = (signUp) => {
    // Access the form data here and perform necessary actions
    data.Email=signUp.email;
    data.password=signUp.password;
    setverifyData(data);
    console.log(data.Email,data.password);
      alert('SignUp Successful')
  };

  const handleLogout=()=>{
    setAuthentication(false);
    setshowLogout(false);
    alert('Logout Successful');
  }

  const handleLogin = (formData) =>{
    console.log(typeof verifyData.Email);
    console.log(typeof formData.email)
    if(verifyData.Email==='' || formData.password===''){
    
      alert('Please Sign Up');
    }

   else if(verifyData.Email === formData.email){
        if(verifyData.password=== formData.password){
          setAuthentication(true);
          setshowLogout(true);
          alert('Login Successful Now you can access the cource')
        }
        else{
          setAuthentication(false);
          setshowLogout(true);

          alert('Password is incorrect please check again')
        }
    }
    else{
      setAuthentication(false);
      setshowLogout(true);

      alert('Invalid please check again')

    }
     
    console.log(formData)
      

  }

 

  return (
    <div>
      <BrowserRouter>
        <Navbar title='E-Learning' home='Home' about='About' cource='Cource' valid = {showLogout} handleLogout={handleLogout} />
        <Routes>
          <Route path='/cource' element={<Cource authorised={authentication}/>} />
          <Route path='/signUp' element={<SignUp handleSignUp={handleSignUp} />} />
          <Route path='/login' element={<Login handleLogin = {handleLogin}/>} />
          <Route path='/about' element={<About />} />
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}