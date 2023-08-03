import React, { useEffect, useState } from 'react'
import { instance } from '../axios/Instance'
import { toast } from 'react-toastify'

const NewItinerary = () => {
    const [formData, setFormData] = useState({
        name: "",
        destination: "",
        startDate: "",
        endDate: "",
    })
    const { name, destination, startDate, endDate } = formData
    const [user, setUser] = useState()

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    useEffect(()=>{
        instance.get('/user/data')
        .then(response => {
            setUser(response.data.id)
            console.log(user);
        })
    }, [user])

    const onSubmit = (e) =>{
        e.preventDefault()
        instance.post("/itinerary/newItinerary",{name, destination, startDate, endDate, user})
            .then(response=>{
                console.log(response.data);
                window.location.reload()
                setFormData({
                    name: "",
                    destination: "",
                    startDate: "",
                    endDate: "",
                    user: "",
                })
        }).catch(err=>{
            toast("Error! Try again")
            console.log(err)
        })
    }

  return (
    <div className=' ml-0.5 shadow-xl w-fit py-5 px-8 border-2 rounded-lg'>
        <h1 className=' font-bold text-xl'>New Itinerary</h1>
        <form onSubmit={onSubmit} className=' mt-3 gap-y-2'>
            <div className=' flex flex-col'>
                <label htmlFor="name" className=' font-semibold text-[#2c2c2c]'>Name</label>
                <input onChange={onChange} value={name} type="text" name="name" id="name" placeholder='Name' className=' ml-1 w-[16rem] sm:w-80 px-3 py-0.5 border-2 focus:outline-none border-stone-400 rounded' required/>
            </div>
            <div className=' flex flex-col'>
                <label htmlFor="destination" className=' font-semibold text-[#2c2c2c]'>Destination</label>
                <input onChange={onChange} value={destination}  type="text" name="destination" id="destination" placeholder='Destination' className=' ml-1   w-[16rem] sm:w-80 px-3 py-0.5 border-2 focus:outline-none border-stone-400 rounded' required />
            </div>
            <div className=' flex flex-col'>
                <label htmlFor="startDate" className=' font-semibold text-[#2c2c2c]'>Start date</label>
                <input onChange={onChange} value={startDate}  type="date" name="startDate" id="startDate" className=' ml-1   w-[16rem] sm:w-80 px-3 py-0.5 border-2 focus:outline-none border-stone-400 rounded' required/>
            </div>
            <div className=' flex flex-col'>
                <label htmlFor="endDate" className=' font-semibold text-[#2c2c2c]'>End Date</label>
                <input onChange={onChange} value={endDate}  type="date" name="endDate" id="endDate" className=' ml-1   w-[16rem] sm:w-80 px-3 py-0.5 border-2 focus:outline-none border-stone-400 rounded' required />
            </div>
            <div>
                <button type='submit' className='group/button ml-1 mt-3 overflow-hidden relative font-semibold bg-[#363738] border border-[#ffffff] py-1 px-4 rounded text-[#f2f2f2]'>
                    <div className="duration-300 group-hover/button:-translate-y-8 ">Create</div>
                    <div className="absolute invisible duration-300  group-hover/button:-translate-y-6 group-hover/button:visible">Create</div>
                </button>            
            </div>
        </form>
    </div>
  )
}

export default NewItinerary