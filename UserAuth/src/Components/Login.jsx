import React, { useState } from 'react'
import logo from "../assets/demoLogo.png"
import InputBox from "./IputBox"
import { Link } from 'react-router-dom'
import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri'

const Login = () => {
    const [passwordShow , setPasswordShow] = useState(true)
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    })
    const handleLogin = (e) => {

        console.log(loginData);
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
            <form className="bg-primary rounded-3xl p-10">
                <h5 className='text-4xl font-semibold text-center'>Login Here</h5>
                <div action="" className='py-10 m-auto'>

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
                    <button className='px-4 py-2 rounded-md  bg-theme hover:bg-[#5f22aed4] active:bg-[#4d2284]  text-primary w-full block mt-6' onSubmit={handleLogin}>LOG-IN</button>
                    <p className='tex-base text-secondary capitalize mt-6'>Not a member ?
                        <Link to="/registration" >
                            <span className='text-theme ml-2 font-semibold'>registration Now</span>
                        </Link>
                    </p>
                </div>
            </form>
        </div>
    )
}

export default Login