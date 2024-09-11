# Hall Booking Application API

This API allows users to manage room bookings for a hall. It includes endpoints to create rooms, book rooms, and retrieve booking data.

## Table of Contents
- [Endpoints](#endpoints)
  - [1. Create a Room](#1-create-a-room)
  - [2. Book a Room](#2-book-a-room)
  - [3. List All Rooms with Booked Data](#3-list-all-rooms-with-booked-data)
  - [4. List All Customers with Booked Data](#4-list-all-customers-with-booked-data)
  - [5. List Customer Booking History](#5-list-customer-booking-history)


 

## Endpoints

### 1. Create a Room:
**Endpoint**: /rooms

**Method**: POST

**Description**: Creates a new room with specified details.

**Request Body**:
```json
{
  "room_name": "Room A",
  "seats_available": 50,
  "amenities": ["Projector", "Whiteboard", "WiFi"],
  "price_per_hour": 1000
}
```
**Response**:
```json
{
  "msg":"Rooms Created Successfully",
}
```

### 2. Book a Room:
**Endpoint**: /bookings

**Method**: POST

**Description**: Books a room for a specified date and time, if the room is available.

**Request Body**:
```json
{
  "room_id": "600489ae-2885-444c-ad28-299c6f3ec56a",
  "customer_name": "Sathish",
  "date": "2024-09-12",
  "start_time": "10:00",
  "end_time": "12:00"
}
```
**Response**:
```json
{
  "msg":"Room booked successfully!",
}
```
or
```json
{
  "msg":"Rooms are already booked at the particular time",
}
```

### 3. List All Rooms with Booked Data:
**Endpoint**: /rooms/bookings

**Method**: GET

**Description**: Retrieves a list of all rooms with their booking status and booking details.

**Response**:
```json
[
  {
      "room_name": "Room A",
      "booked_status": "Booked",
      "customer_name": "Sathish",
      "date": "2024-09-12",
      "start_time": "10:00",
      "end_time": "12:00"
    },
]
```

### 4. List All Customers with Booked Data
**Endpoint**: /booking/customers

**Method**: GET

**Description**: Retrieves a list of all customers along with their booking details.s.

**Response**:
```json
[
  {
    "customer_name": "sathish",
    "room_name": "600489ae-2885-444c-ad28-299c6f3ec56a",
    "date": "2024-09-14",
    "start_time": "10:00",
    "end_time": "12:00"
  },
]
```

### 5. List Customer Booking History:
**Endpoint**: /booking/customers/:customer_name

**Method**: GET

**Description**: Retrieves the booking history of a specific customer.

**Path parameters**: customer_nme: The name of the customer.

**Response**:
```json
[
    {
        "customer_name": "sathish",
        "room_name": "600489ae-2885-444c-ad28-299c6f3ec56a",
        "date": "2024-09-14",
        "start_time": "10:00",
        "end_time": "12:00",
        "Booking_id": "8e66b7cf-fe35-4488-aaa1-0527d5a4cb2b",
        "Booking_status": "Booking"
    },
]
```



