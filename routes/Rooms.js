import express from "express";
import { rooms,customers,room_booked } from "../data.js";
import {v4 as uuidv4} from "uuid";

const Rooms = express.Router();


//  1) Add Rooms
Rooms.post("/",(req,res)=>{
    const roomData = req.body;
    const roomsobj = {
        id:uuidv4(),
        ...roomData
    };
    rooms.push(roomsobj);
    res.json({msg:"Rooms Added Successfully"});
})

// 3) List all the rooms with Booked Data
Rooms.get("/bookings",(req,res)=>{
    const result  = rooms.map((room)=>{
        const booking = room_booked.find((b)=>b.room_id === room.id);
        return {
            room_name:room.name,
            booked_status:booking ? "Booked" : "Available",
            customer_name: booking ? booking.customer_name : null,
            date: booking ? booking.date : null,
            start_time: booking ? booking.start_time : null,
            end_time: booking ? booking.end_time : null,
        };
    })
    res.json(result); 
});


export default Rooms;
