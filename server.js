import express from "express";
import Rooms from "./routes/Rooms.js";
import booking from "./routes/Booking.js";
const server = express();
server.use(express.json());

const PORT = 4500;

server.use("/rooms",Rooms);
server.use("/booking",booking);

server.listen(PORT,()=>{
    console.log("Server listen to: ",PORT);
})