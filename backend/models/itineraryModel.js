const mongoose = require("mongoose")

const blogSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    destination:{
        type: String,
        required: true
    },
    startDate:{
        type: String,
        required: true
    },
    endDate:{
        type: String,
        required: true
    },
    activities: {
        type: [String],
        default: null
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
},{
    timestamps: true,
})

module.exports = mongoose.model("Itinerary", blogSchema)