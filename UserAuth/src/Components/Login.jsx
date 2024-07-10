import React, { useState } from 'react'
import logo from "../assets/demoLogo.png"
import InputBox from "./IputBox"
import { Link, useNavigate } from 'react-router-dom'
import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri'
import axios from 'axios'

const Login = () => {
    const [passwordShow , setPasswordShow] = useState(true)
    const [error , setError] = useState("")
    const  [success , setSuccess] = useState("")
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    })
    const navigate = useNavigate()
    const handleLogin = async (e) => {
        e.preventDefault()
        const {email , password} = loginData
        if(!email){
            setError("Enter Your Email Address")
        }
        else if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)){
            setError("Enter Valid Email ")
        }
        else if (!password) {
            setError("Enter Your Password")
        }
        else {
        const data = await axios.get("http://localhost:3000/registration")
        const loginInfo = data.data.find((user) => user.email === email)
        if(loginInfo){
            setError("")
            if (loginInfo.password === password){
                setSuccess("Login Successfully Done")
            setTimeout(() => {
                navigate("/")
            },[1000])
            }
            else{
                setError("incorrect password");
            }
        }
        else{
            setError("Invalid account")
        }

        }
    }
    const handleChange = (e) => {
        setLoginData({
            ...loginData, [e.target.name]: e.target.value
        })
    }
    return (
        <div className='grid items-center grid-cols-1 md:grid-cols-2 w-full h-screen'>
            <div className=''>
                <img src={logo} alt="" className='w-[60%]' />
            </div>
            <div className="bg-primary rounded-3xl p-10">
                <h5 className='text-4xl font-semibold text-center'>Login Here</h5>
                {
                    error ? <div className={`error bg-red-300 text-secondary border-l-[10px] border-red-400 ${error && "py-2"} px-4 my-5 rounded-sm text-base`}>
                        {error}
                    </div> :
                        <div className={`success bg-purple-300 text-secondary border-l-[10px] border-purple-400 ${success && "py-2"}  px-4 my-5 rounded-sm text-base`}>
                            {success}
                        </div>
                }
                <div action="" className=' m-auto'>

                    <InputBox label="Email :" type="email" placeholder="Your Email" className="mt-4" onChange={handleChange} name="email" />
                    <div className='relative'>
                        <InputBox label="Password :" type={passwordShow ? "text" : "password"} placeholder="Your Password" className="mt-4" onChange={handleChange} name="password" />
                        <div className='absolute right-[5%] top-[60%] ' onClick={() => setPasswordShow(!passwordShow)}>
                        {
                            passwordShow ? 
                            <RiEyeFill />
                            :
                            <RiEyeOffFill />

                        }
                        </div>

                    </div>
                    <button className='px-4 py-2 rounded-md  bg-theme hover:bg-[#5f22aed4] active:bg-[#4d2284]  text-primary w-full block mt-6' onClick={handleLogin}>LOG-IN</button>
                    <p className='tex-base text-secondary capitalize mt-6'>Not a member ?
                        <Link to="/registration" >
                            <span className='text-theme ml-2 font-semibold'>registration Now</span>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login