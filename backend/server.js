const express = require("express")
const app = express()
const cors = require("cors")
const colors = require("colors")
const dotenv = require("dotenv").config()
const connectDB = require("./config/db")
const {errorHandler} = require("./middlewares/errorMiddleware")

app.use(cors())
app.use(express.json({limit: '50mb'}))
app.use(express.urlencoded({ extended: false, limit: '50mb' }))

connectDB()


app.use("/api/itinerary", require("./routes/itineraryRoutes"))
app.use("/api/user", require("./routes/userRoutes"))

app.use(errorHandler)

app.listen(process.env.PORT||4000, ()=>{
    console.log(`The server is running at port ${process.env.PORT}`);
})