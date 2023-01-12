import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"
import cookieParser from "cookie-parser"
import cors from "cors"
const app = express()
dotenv.config()

const connect = async () =>{   
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to mongoDB!!")
    } catch (error) {
        throw error;
    }
};

mongoose.connection.on("disconnected", ()=>{
    console.log("mongoDB disconnected!")
})

//middlewares
app.use(cors()) //Cross origin, but we are using proxy in this project
app.use(cookieParser()) //to read cookies
app.use(express.json()) //to parse JSON data


app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

app.use((err,req, res,next)=>{
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong!"
    return res.status(errorStatus).json({
        success:false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
});

app.listen(3000, ()=>{
    connect()
    console.log("Connected to backend..");
})