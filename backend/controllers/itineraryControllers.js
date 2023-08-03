const asyncHandler = require("express-async-handler")
const Itinerary = require("../models/itineraryModel")

// @desc    post all itineraries
// @route   POST /api/itinerary
// @access  private
const getItineraries = asyncHandler(async(req, res)=>{
    const userId = req.params.id

    try {
        const itineraries = await Itinerary.find({user: userId})
        res.status(200).json(itineraries)
    } catch (error) {
        console.log(error);
    }
})

// @desc    post all itineraries
// @route   POST /api/itinerary
// @access  private
const setItinerary = asyncHandler(async(req, res)=>{
    const { name, destination, startDate, endDate, user } = req.body

    try {
        const itinerary = await Itinerary.create({
            name,
            destination,
            startDate,
            endDate,
            user
        })
        res.status(200).json(itinerary)
    } catch (error) {
        console.log(error);
    }
})

// @desc    post all itineraries
// @route   POST /api/itinerary
// @access  private
const updateItinerary = asyncHandler(async(req, res)=>{
    const activities = req.body.activities
    const itineraryId = req.params.id
     try {
        const itinerary = await Itinerary.findByIdAndUpdate(itineraryId, {$push:{activities: [activities]}},{new: true})
        res.status(200).json(itinerary)
     } catch (error) {
        console.log(error);
     }
})

// @desc    post all itineraries
// @route   POST /api/itinerary
// @access  private
const deleteItinerary = asyncHandler(async(req, res)=>{
    const itinerary = await Itinerary.findById(req.params.id)
    await Itinerary.deleteOne(itinerary)
    res.status(200).json({id: req.params.id})
})

const updateItineraries = asyncHandler(async(req, res)=>{
    const {name, destination, startDate, endDate} = req.body
    const itineraryId = req.params.id
    try {
        const itineraries = await Itinerary.findByIdAndUpdate(itineraryId, {name, destination, startDate, endDate}, {new:true})
        res.status(200).json(itineraries)
    } catch (error) {
        console.log(error);
    }
})

const getSingleItinerary = asyncHandler(async(req, res)=>{
    const itinerary = await Itinerary.findById(req.params.id)
    res.status(200).json(itinerary)
})

module.exports = {
    getItineraries,
    setItinerary,
    updateItinerary,
    deleteItinerary,
    updateItineraries,
    getSingleItinerary
}