import React, { useEffect, useState } from 'react'
import logo from "../assets/demoLogo.png"
import InputBox from "./IputBox"
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
const Signup = () => {
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        gender: ""
    })
    const handleChange = (e) => {
        setUserData({
            ...userData, [e.target.name]: e.target.value
        })
    }
    const navigate = useNavigate()

    // database data send

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { firstName, lastName, email, password, gender } = userData
        if (!firstName) {
            setError("Enter First Name");
        }
        else if (!lastName) {
            setError("Enter Last Name");
        }
        else if (!email) {
            setError("Enter Email Address");
        }
        else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            setError("Enter Valid Email Address");
        }
        else if (!password) {
            setError("Enter a Password ");

        }
        else if (!/[A-Za-z\d]{6,}/.test(password)) {
            setError("Password should be  Six characters:")
        }


        else if (!/^(?=.*\d)/.test(password)) {
            setError("Give One Number:")
        }
        else if (!/^(?=.*[A-Za-z])/.test(password)) {
            setError("Give One string:")
        }

        else if (!gender) {
            setError("Select Your Gender")
        }
        else {
            setError("")
            
            setSuccess("Registration data susseccfully Done")
            const submited =await axios.post("http://localhost:3000/registration" , {
                firstName: userData.firstName,
                lastName: userData.lastName,
                email: userData.email,
                password: userData.password,
                gender: userData.gender

            }) 
            setUserData({
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                gender: ""
            })
            console.log(userData);
            setTimeout(() => {
                navigate("/login")
            },[1000])
        }
    }
    return (
        <div className='grid items-center grid-cols-1 md:grid-cols-2 w-full h-screen gap-10'>
            <div className=''>
                <img src={logo} alt="" className='w-[60%]' />
            </div>
            <div className="bg-primary rounded-3xl p-10">
                <h5 className='text-4xl font-semibold text-center'>Registration Here</h5>
                {
                    error ? <div className={`error bg-red-300 text-secondary border-l-[10px] border-red-400 ${error && "py-2"} px-4 my-5 rounded-sm text-base`}>
                        {error}
                    </div> :
                        <div className={`success bg-purple-300 text-secondary border-l-[10px] border-purple-400 ${success && "py-2"}  px-4 my-5 rounded-sm text-base`}>
                            {success}
                        </div>
                }
                <div action="" className='pb-10 m-auto pt-6' >
                    <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-x-4 ">
                        <InputBox name="firstName" value={userData.firstName} label="FirstName :" type="text" placeholder="Your Name" onChange={handleChange} />
                        <InputBox name="lastName" label="LastName :" type="text" placeholder="Your LastName" value={userData.lastName} onChange={handleChange} />
                    </div>
                    <InputBox name="email" value={userData.email} label="Email :" type="email" placeholder="Your Email" className="mt-4" onChange={handleChange} />
                    <InputBox name="password" value={userData.password} label="Password :" type="password" placeholder="Your Password" className="mt-4" onChange={handleChange} />
                    <div className='mt-4'>
                        <label htmlFor="gender">Gender :</label>
                        <div className='flex gap-6'>
                            Male<input type="radio" value="male" name='gender' checked={userData.gender === "male"} onChange={handleChange} />
                            Female<input type="radio" value="female" name='gender' checked={userData.gender === "female"} onChange={handleChange} />
                        </div>
                    </div>
                    <button className='px-4 py-2 rounded-md  bg-theme hover:bg-[#5f22aed4] active:bg-[#4d2284]  text-primary w-full block mt-5' onClick={handleSubmit} >SIGN-UP</button>
                    <p className='tex-base text-secondary capitalize mt-6'>alreary have an account ?
                        <Link to="/login">
                            <span className='text-theme ml-2 font-semibold'>Login Now</span>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Signup