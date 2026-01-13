import { FaGoogle , FaFacebookF } from "react-icons/fa";
import { useState } from "react";
import '../../assets/css/login.css'
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
// import {auth} from '../../firebase.js'
import { useNavigate } from "react-router-dom";
const provider = new GoogleAuthProvider();

const App = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const handleSubmit = async(e)=>{
        e.preventDefault();
        navigate('/home')
        try{
           await signInWithEmailAndPassword(auth, email, password)
           console.log("Login Successfully");
           navigate('/home')
        }
        catch(err){
          console.log(err.message);
        }
        
    }

    const handleGoogleLogin = async()=>{
      await signInWithPopup(auth, provider)
      console.log("Google Login successfully")
    }
  return (
    <div className='login-page w-dvw h-dvh flex items-center justify-center relative'>
      <div className="login-container w-md">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center p-8">Sign In.</h2>

          <div className='flex flex-col g-4'>
            <button className="flex items-center justify-center g-4 black-button mb-5" onClick={handleGoogleLogin}> <FaGoogle size={16} color="#FFF" /> Continue with Google</button>
            <button className="flex items-center justify-center g-4 black-button"> <FaFacebookF size={16} color="#FFF" /> Continue with Facebook</button>
          </div>

          <p className="text-center m-8">Or</p>

          <div className="flex flex-col">
            <form onSubmit={handleSubmit} className="flex flex-col">
                <label htmlFor="email" className="sr-only">Email</label>
                <input 
                    className="py-3 px-5 mb-4 rounded-lg border border-grey-300" 
                    type="email" placeholder="E-mail" id="email"
                    onChange={(e)=>{setEmail(e.target.value)}}
                    value={email} 
                />
                <label htmlFor="password" className="sr-only">Password</label>
                <input 
                    className="py-3 px-5 mb-4 rounded-lg border border-grey-300" 
                    type="text" placeholder="Password" id="password"
                    onChange={(e)=>{setPassword(e.target.value)}}
                    value={password} 
                />
                <button className="login-button">Sign In.</button>
            </form>
          </div>
          <div className="flex flex-col mt-5 text-center">
            <span className="mb-3">You don't have an account? <a href="" >Create a Account</a></span> 
            <a href="">Forgot Password</a>
          </div>
      </div>
      <div className="pink-circle"></div>
      <div className="black-circle"></div>
    </div>
  )
}

export default App