import React, { useState } from 'react'
import { instance } from '../axios/Instance';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const DisplayItinerary = ({itineraryId, name, destination, startDate, endDate, activities}) => {
    const navigate = useNavigate()
    const [activityValue, setActivityValue] = useState()
    const onSubmit = (e) => {
        e.preventDefault()
        console.log(activityValue);
        instance.put(`/itinerary/update/${itineraryId}`, {activities:activityValue})
            .then(res=>{
                console.log(res.data);
                setActivityValue("")
                window.location.reload()
            })
            .catch(err=>{
                toast("Error! Try again")
                console.log(err);
            })
    }
    const updateItinerary = (e) =>{
        e.preventDefault()
        navigate(`/itineraries/update/${itineraryId}`)
    }
    const deleteItinerary = (e)=>{
        e.preventDefault()
        instance.delete(`/itinerary/${itineraryId}`)
            .then(res=>{
                window.location.reload()
            })
            .catch(err=>{
                toast("Error! Try again")
                console.log(err);
            })
    }
  return (
    <div className=' group flex flex-col shadow-xl py-4 px-7 border-2 rounded-lg'>
        <div className='flex justify-between items-center text-xl font-semibold'>
            <h1>{name}</h1>
            <span className=' duration-300 hidden group-hover:flex gap-x-2'>
                <div className='hover:text-stone-500 duration-300 cursor-pointer' onClick={updateItinerary}><ion-icon name="create"></ion-icon></div>
                <div className='hover:text-stone-500 duration-300 cursor-pointer' onClick={deleteItinerary}><ion-icon name="trash"></ion-icon></div>
            </span>
        </div>
        <h3 className=' text-sm text-stone-600  mt-0.5 mb-1'><span>{startDate}</span> to <span>{endDate}</span></h3>
        <h2>Destination: <span>{destination}</span></h2>
        <div className=' flex flex-wrap my-2 gap-2'>
            {
                activities.length>0 ?
                activities.map(ele=>{
                    return <div className=' bg-[#d2d2d2] text-[#3b3b3b] text-sm rounded-full py-1 px-3 font-medium w-fit'>{ele}</div>
                })
                :
                <div className=' bg-[#d2d2d2] text-[#3b3b3b] text-sm rounded-full py-1 px-3 font-medium w-fit'>No Activity</div>
            }
        </div>
        <form onSubmit={onSubmit} className='mt-1 gap-2 grid grid-cols-2'>
            <input className='focus:outline-none border-2 border-stone-300 rounded-lg py-0.5 px-2' value={activityValue} onChange={(e)=>setActivityValue(e.target.value)} type="text" placeholder='Activity' />
            <div className=' w-fit'>
                <button type='submit' className='group/button overflow-hidden relative text-sm font-medium bg-[#4f4f4f] border border-[#f9f9f9] py-1 px-2 rounded-lg text-[#f2f2f2]'>
                    <div className="duration-300 group-hover/button:-translate-y-8 ">Add Activity</div>
                    <div className="absolute invisible duration-300  group-hover/button:-translate-y-5 group-hover/button:visible">Add Activity</div>
                </button> 
            </div>
        </form>
    </div>
  )
}

export default DisplayItinerary