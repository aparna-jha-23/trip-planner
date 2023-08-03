import React, { useEffect, useState } from 'react'
import Navbar from '../../components/common/Navbar'
import NewItinerary from '../../components/common/NewItinerary'
import DisplayItinerary from '../../components/common/DisplayItinerary'
import { instance } from '../../components/axios/Instance'
import { toast } from 'react-toastify'

const Index = () => {
  const [userId, setUserId] = useState()
  const [itineraryData, setItineraryData] = useState([])

  useEffect(()=>{
    instance.get('/user/data')
        .then(response => {
            setUserId(response.data.id)
            console.log(userId);
        })
    instance.get(`/itinerary/${userId}`)
        .then(res=>{
          setItineraryData(res.data)
          console.log(itineraryData)
        })
        .catch(err=>{
          toast("Error! Try again")
          console.log(err);
      })
  }, [userId])

  return (
    <>
      <Navbar/>
      <div className=' py-10 px-5 md:px-16'>
        <div>
          <h1 className=' font-bold text-3xl text-[#1e1e1e] mb-2'>Create a New Itinerary</h1>
          <NewItinerary/>
        </div>
        <div className=' mt-10'>
          <h1 className=' font-bold text-2xl mb-2'>Recent Itineraries</h1>
          <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-3'>
            {
              itineraryData.length>0? itineraryData.map(item1=>{
                return <DisplayItinerary
                          itineraryId = {item1._id}
                          name = {item1.name}
                          destination = {item1.destination}
                          startDate = {item1.startDate}
                          endDate = {item1.endDate}
                          activities = {item1.activities}
                        />
              }) : <div className=' bg-stone-900 text-slate-50 rounded py-1 px-5'>No Recent Itinerary</div>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Index