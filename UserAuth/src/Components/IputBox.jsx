import React from 'react'

const IputBox = ({label , type , placeholder , className , name , onChange , value}) => {
    return (
        <div className={`${className}`}>
            <label htmlFor="firstName text-{">{label}</label> <br />
        <input type={type} placeholder={placeholder} className='bg-[#f1e6ff] px-4 rounded-md mt-2 outline-none border-2 border-theme focus-visible:outline-theme focus-visible:border-theme py-2 w-full' name ={name} value={value} onChange={onChange}/>
        </div>
    )
}

export default IputBox