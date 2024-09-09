import React from 'react'
import { Link } from 'react-router-dom'
export default function choose() {
    return (
        <div className='container py-4'>
            <h1>Welcome to HealthLink!</h1>
            <p>HealthLink is your go-to platform for finding and booking appointments with doctors, anytime and from anywhere. Whether you're looking for a specialist or the nearest doctor, our app makes it effortless to connect with healthcare providers. Simply search by specialty, find doctors closest to your location, and book your appointment with just a few taps. Once you've booked, you'll receive a confirmation notification right within the app, ensuring your healthcare needs are met without any hassle. Your health, your schedule—made easy with HealthLink.</p>

            <Link to ="/select" type="button" class="btn btn-primary color1Btn">
                Book Now with HealthLink – Your Appointment, Just a Tap Away!
            </Link>
        </div>
    )
}
 