import express from "express";
import { room_booked } from "../data.js";
import { v4} from "uuid";

const booking = express.Router();

// Helper function to check if the room is available
function isRoomAvailable(room_id, date, start_time, end_time) {
    return !room_booked.some((booking) => 
        booking.room_id === room_id &&
        booking.date === date &&
        ((start_time >= booking.start_time && start_time < booking.end_time) || 
        (end_time > booking.start_time && end_time <= booking.end_time))
    );
}


// 2) Booking the room if the room is already booked it does not book
booking.post("/", (req, res) => {
    const { room_id, date, start_time, end_time } = req.body;

    if (!isRoomAvailable(room_id, date, start_time, end_time)) {
        return res.status(400).json({ msg: "Rooms are already booked at the particular time" });
    } else {
        room_booked.push({
            id: v4(),
            ...req.body
        });
        res.status(201).json({ msg: "Room booked successfully!" });
    }
});

// 4) List all customers with booked data
booking.get("/customers", (req, res) => {
    const result = room_booked.map(booking => ({
        customer_name: booking.customer_name,
        room_name: booking.room_id,
        date: booking.date,
        start_time: booking.start_time,
        end_time: booking.end_time,
    }));
    res.json(result);
});

//5. List how many times a customer has booked the room

booking.get("/customers/:customer_name",(req,res)=>{
    const customerData = room_booked.filter((data)=>data.customer_name === req.params.customer_name);
    const result = customerData.map(booking=>({
        customer_name:booking.customer_name,
        room_name:booking.room_id,
        date:booking.date,
        start_time:booking.start_time,
        end_time:booking.end_time,
        Booking_id:booking.id,
        Booking_status:"Booking"
    }));
    res.json(result);
})

export default booking;
