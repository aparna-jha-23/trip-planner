import React, { useState } from 'react'
import registerImg from "../../assets/images/loginPageImg.png"
// import logo from '../../assets/images/calcoloLogo.png'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


const RegisterPage = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        userName: "",
        emailId: "",
        password: "",
        password2: ""
    })
    const { userName, emailId, password, password2 } = formData

    const onChange = (e) => {
        setFormData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }))
    }
    const onSubmit = (e) => {
        e.preventDefault()
        
        if(password === password2){
            axios.post("http://localhost:4000/api/user/", {
                userName,
                emailId,
                password
            }).then(res=> {
                sessionStorage.setItem("myToken", res.data.token)
                navigate("/auth/login")
            }).catch(err=>{
                toast("Error! Try again")
                console.log(err)
            })
        }

        setFormData({
            userName: "",
            emailId: "",
            password: "",
            password2: ""
        })
    }

  return (
    <>
    <div className=' grid py-20 md:py-0 md:grid-cols-2'>
        <img className=' hidden md:flex w-screen h-screen' src={registerImg} alt="" />
        <div className='flex flex-col justify-center items-center py-12 px-8 mb-10'>
            {/* <img className=' w-1/4' src={logo} alt="" /> */}
            <h1 className=' font-bold text-2xl text-center'>TRIPPIN'</h1>
            <h2 className=' text-stone-800 text-2xl mb-8'>Get's started</h2>
            <form className=' flex flex-col gap-y-3' onSubmit={onSubmit}>
                <input 
                    className=' w-80 font-poppins py-1.5 px-3 rounded border border-[#a7a7a7] text-stone-800 placeholder-[#7e7e7e] focus:outline-none focus:border-stone-800'
                    type="text" 
                    name="userName"
                    value={userName}
                    onChange={onChange}
                    placeholder='Username'
                />
                <input 
                    className=' font-poppins py-1.5 px-3 rounded border border-[#a7a7a7] text-stone-800 placeholder-[#7e7e7e] focus:outline-none focus:border-stone-800'
                    type="text" 
                    name='emailId'
                    value={emailId}
                    onChange={onChange}
                    placeholder='EmailId' 
                />
                <input 
                    className=' font-poppins py-1.5 px-3 rounded border border-[#a7a7a7] text-stone-800 placeholder-[#7e7e7e] focus:outline-none focus:border-stone-800'
                    type="password"
                    name='password'
                    value={password}
                    onChange={onChange}
                    placeholder='Password' 
                />
                <input 
                    className=' font-poppins py-1.5 px-3 rounded border border-[#a7a7a7] text-stone-800 placeholder-[#7e7e7e] focus:outline-none focus:border-stone-800'
                    type="password" 
                    name='password2'
                    value={password2}
                    onChange={onChange}
                    placeholder='Confirm Password' 
                />
                <button type='submit' className=' duration-300 hover:bg-white hover:text-[#292929] border hover:border hover:border-[#292929] bg-[#292929] rounded-md text-white py-[9px] font-semibold'>Sign up</button>
            </form>
            <h2 className=' mr-32 mt-3 mb-4 text-sm'><span className=' text-stone-700'>Already have an account? </span><a href='/auth/login' className=' font-medium text-stone-900 hover:text-stone-600 duration-300'>Sign in</a></h2>
        </div>
    </div>
    </>
  )
}

export default RegisterPage