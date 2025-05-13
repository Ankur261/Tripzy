import { useState } from 'react';
import { useEffect } from 'react';
import { FaPlane, FaUser, FaCalendarAlt, FaClock, FaChair } from 'react-icons/fa';
import { getUserBookings } from '../../services/bookFlight';
import Navbar from '../../components/navbar/Navbar';

const BookingListPage = () => {

    const [bookings, setbookings] = useState();
    // const bookings = [
    //     {
    //         flight: {
    //             fromCity: {
    //                 name: "Cochin International Airport",
    //                 city: "Kochi",
    //                 code: "COK"
    //             },
    //             toCity: {
    //                 name: "Chennai International Airport",
    //                 city: "Chennai",
    //                 code: "MAA"
    //             },
    //             travellerCount: 2,
    //             selectedDate: "2025-05-13T07:31:08.598Z",
    //             flightDetails: {
    //                 airline: "IndiGo",
    //                 logo: "indigo.png",
    //                 code: "6E 101",
    //                 departure: "06:00",
    //                 arrival: "08:00",
    //                 duration: "2h 0m",
    //                 stops: "Non-stop",
    //                 economyPrice: 4500,
    //                 businessPrice: 12000
    //             },
    //             isEco: true
    //         },
    //         travellerInfo: {
    //             gender: "male",
    //             firstName: "Ankur",
    //             lastName: "Agrawal"
    //         }
    //     }
    // ];
    const user = JSON.parse(localStorage.getItem('user'));
    const token = localStorage.getItem('token');
     const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function getBookings() {
            setbookings(await getUserBookings(user._id));
            console.log()
            setLoading(false)
        }
        getBookings();
    }, [])

    if (loading) {
    return (<>
      <p>Loading.....</p>
    </>)
  }
    const formatDate = (dateString) => {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };
console.log(bookings[0].flight.flightDetails.logo)
    return (
        <>
       <Navbar/>
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-[#009] mb-8">Your Bookings</h1>

                {bookings.map((booking, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden mb-6 transition-all hover:shadow-lg">
                        <div className="p-6">
                            {/* Flight Header */}
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h2 className="text-xl font-bold text-[#009]">
                                        {booking.flight.fromCity.city} ({booking.flight.fromCity.code})
                                        <FaPlane className="inline mx-3 text-[#009]" />
                                        {booking.flight.toCity.city} ({booking.flight.toCity.code})
                                    </h2>
                                    <p className="text-gray-600">{formatDate(booking.flight.selectedDate)}</p>
                                </div>
                                <div className="bg-[#009] text-white px-3 py-1 rounded-full text-sm font-medium">
                                    {booking.flight.isEco ? 'Economy' : 'Business'} Class
                                </div>
                            </div>

                            {/* Flight Details */}
                            <div className="flex flex-col sm:flex-row gap-6 mb-6">
                                <div className="flex-1">
                                    <div className="flex items-center mb-2">
                                        <img
                                            src={`/airlines/${booking.flight.flightDetails.logo}`}
                                            alt={booking.flight.flightDetails.airline}
                                            className="h-8 mr-3"
                                        />
                                        <div>
                                            <h3 className="font-semibold">{booking.flight.flightDetails.airline}</h3>
                                            <p className="text-sm text-gray-500">{booking.flight.flightDetails.code}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-4">
                                        <div className="flex items-center">
                                            <FaClock className="text-[#009] mr-2" />
                                            <span>{booking.flight.flightDetails.duration}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <FaChair className="text-[#009] mr-2" />
                                            <span>{booking.flight.flightDetails.stops}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex-1">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <p className="text-sm text-gray-500">Departure</p>
                                            <p className="font-medium">{booking.flight.flightDetails.departure}</p>
                                            <p className="text-sm">{booking.flight.fromCity.name}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Arrival</p>
                                            <p className="font-medium">{booking.flight.flightDetails.arrival}</p>
                                            <p className="text-sm">{booking.flight.toCity.name}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Traveller and Price Info */}
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-t pt-4">
                                <div className="flex items-center mb-4 sm:mb-0">
                                    <FaUser className="text-[#009] mr-2" />
                                    <span>
                                        {booking.travellerInfo.firstName} {booking.travellerInfo.lastName}
                                        <span className="text-gray-500 ml-2">({booking.flight.travellerCount} {booking.flight.travellerCount > 1 ? 'persons' : 'person'})</span>
                                    </span>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm text-gray-500">Total Price</p>
                                    <p className="text-2xl font-bold text-[#009]">
                                        ₹{(booking.flight.isEco ?
                                            booking.flight.flightDetails.economyPrice :
                                            booking.flight.flightDetails.businessPrice) * booking.flight.travellerCount}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {bookings.length === 0 && (
                    <div className="bg-white rounded-xl shadow-md p-8 text-center">
                        <FaPlane className="mx-auto text-4xl text-[#009] mb-4" />
                        <h3 className="text-xl font-medium text-gray-700 mb-2">No bookings found</h3>
                        <p className="text-gray-500 mb-4">You haven't made any bookings yet</p>
                        <button className="px-6 py-2 bg-[#009] text-white rounded-lg hover:bg-[#006] transition-colors">
                            Book a Flight
                        </button>
                    </div>
                )}
            </div>
        </div>
        </>
    );
};

export default BookingListPage;