import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('') 
  const navigate = useNavigate()
  const handleRegister = () =>{
      console.log(password,email,confirmPassword)
      if(!email || !password || !confirmPassword || password != confirmPassword){
        console.log("please enter valid details")
        return 
      }

      const users = JSON.parse(localStorage.getItem("users"))
      const userExist = users.some((u)=>{u.email==email})
      if(userExist){
        console.log("user already exist")
        return
      }
      const newUser = {
        id: Date.now(),
        email: email,
        password: password,
        role: "User"
      }

      users.push(newUser)

      localStorage.setItem("users",JSON.stringify(users))
      navigate('/')
  }
  return (
    <div className='register-container'>
        <div className="input-form">
          <label htmlFor='email' >Email</label>
          <input type='text' id='email' placeholder='Please enter your Email'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div className="input-form">
          <label htmlFor='password' >Password</label>
          <input type='text' id='password' placeholder='Please enter your Passoword'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
        <div className="input-form">
          <label htmlFor='repassword' >Confirm Password</label>
          <input type='text' id='repassword' placeholder='Please re-enter your Passoword'
            value={confirmPassword}
            onChange={(e)=>setConfirmPassword(e.target.value)}
          />
        </div>
        <button onClick={handleRegister}>Click to Register</button>
    </div>
  )
}

export default Register