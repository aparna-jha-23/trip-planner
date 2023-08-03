import React, { useState } from 'react'
import loginImg from "../../assets/images/loginPageImg.png"
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


const LoginPage = () => {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        emailId: "",
        password: ""
    })
    const {emailId, password} = formData
    const onChange = (e) => {
        setFormData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }))
    }
    const onSubmit = (e)=>{
        e.preventDefault()
        axios.post("http://localhost:4000/api/user/login", {
            emailId,
            password
        }).then(res=> {
            sessionStorage.setItem("myToken", res.data.token)
            navigate("/")
        }).catch(err=>{
            toast("Error! Try again")
            console.log(err)
        })
        setFormData({
            emailId: "",
            password: ""
        })
    }

  return (
    <div className=' grid py-20 md:py-0 md:grid-cols-2'>
        <img className=' hidden md:flex w-screen h-screen' src={loginImg} alt="" />
        <div className='flex flex-col justify-center items-center p-12 mb-10'>
            {/* <img className=' w-1/4' src={logo} alt="" /> */}
            <h1 className=' text-center font-bold text-2xl'>TRIPPIN'</h1>
            <h2 className=' text-stone-800 text-2xl mb-8'>Welcome back!</h2>
            <form className=' flex flex-col' onSubmit={onSubmit}>
                <input 
                    className=' font-poppins py-1.5 px-3 rounded border border-[#a7a7a7] text-stone-800 placeholder-[#7e7e7e] focus:outline-none focus:border-stone-800'
                    type="text" 
                    name='emailId'
                    placeholder='EmailId' 
                    value={emailId}
                    onChange={onChange}
                />
                <input 
                    className=' mt-4 font-poppins py-1.5 px-3 rounded border border-[#a7a7a7] text-stone-800 placeholder-[#7e7e7e] focus:outline-none focus:border-stone-800'
                    type="password"
                    placeholder='Password' 
                    name='password'
                    value={password}
                    onChange={onChange}
                />
                <h2 className=' mr-32 mt-2 mb-6 text-sm'><span className=' text-stone-700'>Dont't have an account? </span><a href='/auth/register' className=' font-medium text-stone-900 hover:text-stone-600 duration-300'>Sign up</a></h2>
                <button className=' duration-300 hover:bg-white hover:text-[#292929] border hover:border hover:border-[#292929] bg-[#292929] rounded-md text-white py-[9px] font-semibold' type='submit'>Sign in</button>
            </form>
        </div>
    </div>
  )
}

export default LoginPage
