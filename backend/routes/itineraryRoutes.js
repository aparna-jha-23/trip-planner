const express = require("express")
const router = express.Router()

const { protect } = require("../middlewares/authMiddleware")
const { getItineraries, setItinerary, updateItinerary, deleteItinerary, updateItineraries, getSingleItinerary } = require("../controllers/itineraryControllers")

router.get("/:id", protect, getItineraries)
router.post("/newItinerary", protect, setItinerary)
router.put("/update/:id", protect, updateItinerary)
router.delete("/:id", protect, deleteItinerary)
router.put("/update-whole/:id", protect, updateItineraries)
router.get("/single/:id", protect, getSingleItinerary)


module.exports = router