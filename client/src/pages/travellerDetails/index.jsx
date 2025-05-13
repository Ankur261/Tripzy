import { useState } from "react";
import ResultNavbar from '../../components/navbar/resultNavbar'
import { useLocation, useNavigate } from 'react-router-dom';
import { bookFlight } from '../../services/bookFlight';
import FlightConfirmation from "../../components/FlightConfirmation";

export default function TravellerDetails({ }) {
    const navigate = useNavigate();
    const location = useLocation();
    const user = JSON.parse(localStorage.getItem('user'));
    const token = localStorage.getItem('token');
    const { fromCity, toCity, travellerCount, selectedDate, flightDetails, isEco } = location.state || {};

    const [showConfirmation, setShowConfirmation] = useState(false)
    const [formData, setFormData] = useState({
        gender: ``,
        firstName: `${token ? user.fName : ""}`,
        lastName: `${token ? user.lName : ""}`,
        dob: ''
    });

    const [errors, setErrors] = useState({
        gender: '',
        firstName: '',
        lastName: '',
        dob: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        // Clear error when user types
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: ''
            });
        }
    };

    const validateForm = () => {
        let valid = true;
        const newErrors = {
            gender: '',
            firstName: '',
            lastName: '',
            dob: ''
        };

        // Gender validation
        if (!formData.gender) {
            newErrors.gender = 'Please select a gender';
            valid = false;
        }

        // First name validation (letters and spaces only, 2-50 chars)
        if (!formData.firstName) {
            newErrors.firstName = 'First name is required';
            valid = false;
        } else if (!/^[a-zA-Z\s]{2,50}$/.test(formData.firstName)) {
            newErrors.firstName = 'First name must contain only letters and spaces (2-50 characters)';
            valid = false;
        }

        // Last name validation (letters only, 2-50 chars)
        if (!formData.lastName) {
            newErrors.lastName = 'Last name is required';
            valid = false;
        } else if (!/^[a-zA-Z]{2,50}$/.test(formData.lastName)) {
            newErrors.lastName = 'Last name must contain only letters (2-50 characters)';
            valid = false;
        }

        // Date of birth validation (DD-MM-YYYY format)
        if (formData.dob && !/^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-(19|20)\d{2}$/.test(formData.dob)) {
            newErrors.dob = 'Please enter a valid date in DD-MM-YYYY format';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };



    const handleBookTicket = async () => {
        if (token) {
            if (validateForm()) {
                console.log('Form is valid, proceeding with booking');
                const body = {
                    userId: user._id,
                    flight: { fromCity, toCity, travellerCount, selectedDate, flightDetails, isEco },
                    travellerInfo: {
                        gender: formData.gender,
                        firstName: formData.firstName,
                        lastName: formData.lastName,
                        dob: formData.dob
                    }
                }
                setShowConfirmation(true);
                const result = await bookFlight(body);
                
                if (result) {
                    setTimeout(() => {
                        setShowConfirmation(false);
                        navigate('/bookings')
                    }, 3000);
                }
                console.log(result)
            } else {
                console.log('Form has errors');
            }
        }
        else {
            navigate('/auth')
        }

    };

    if (showConfirmation) {
        return (<FlightConfirmation></FlightConfirmation>)
    }

    return (
        <div className="w-full">
            <ResultNavbar isResultPage={false} />

            <div className="container mx-auto">
                <div className="mt-5">
                    <h1 className="font-josefin text-[2rem] tracking-[-0.05rem] leading-[3.25rem]">
                        We wish you a great journey from
                        <p className="text-boldGreen">{fromCity.city} <span className="text-black">to </span> {toCity.city}</p>
                    </h1>
                </div>
                <div className="flex flex-row rounded-3xl bg-brandBlue justify-center h-9 items-center mt-7">
                    <p className="text-white text-base m-3">
                        {fromCity.code} ----- {toCity.code}
                    </p>
                </div>

                {/* Main content container with flex layout */}
                <div className="flex flex-col md:flex-row gap-6 mt-6">
                    {/* Passenger details - takes 2/3 width on larger screens */}
                    <div className="w-full md:w-2/3">
                        <div className="bg-blue-50 p-4 rounded-md">
                            {/* Header */}
                            <h2 className="text-lg font-semibold text-gray-800">1. Complete your passenger details</h2>
                            <p className="text-sm text-gray-600 mt-1">Please fill all of the mandatory fields to proceed further <span className="text-red-500">*</span>.</p>

                            {/* Form Container */}
                            <div className="bg-white rounded-lg mt-4 shadow-md">
                                {/* Section Header */}
                                <div className="flex justify-between items-center bg-blue-100 px-4 py-2 rounded-t-lg">
                                    <div>
                                        <p className="text-sm text-gray-700">Main Passenger</p>
                                    </div>
                                </div>

                                {/* Passenger Form */}
                                <div className="px-4 py-6 space-y-4">
                                    {/* Gender */}
                                    <div className="flex items-center space-x-6">
                                        <label className="inline-flex items-center space-x-2">
                                            <input
                                                type="radio"
                                                name="gender"
                                                value="male"
                                                checked={formData.gender === 'male'}
                                                onChange={handleInputChange}
                                                className="form-radio text-brandBlue bg-white"
                                            />
                                            <span>Male</span>
                                        </label>
                                        <label className="inline-flex items-center space-x-2">
                                            <input
                                                type="radio"
                                                name="gender"
                                                value="female"
                                                checked={formData.gender === 'female'}
                                                onChange={handleInputChange}
                                                className="form-radio text-brandBlue bg-white"
                                            />
                                            <span>Female</span>
                                        </label>
                                        {errors.gender && <p className="text-red-500 text-sm">{errors.gender}</p>}
                                    </div>

                                    {/* Name Fields */}
                                    <div>
                                        <p className="font-medium text-sm text-gray-800">Name should be as per government ID</p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                                            <div>
                                                <input
                                                    type="text"
                                                    name="firstName"
                                                    placeholder="First And Middle Name"
                                                    className={`border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} p-2 rounded-md w-full`}
                                                    value={formData.firstName}
                                                    onChange={handleInputChange}
                                                />
                                                {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                                            </div>
                                            <div>
                                                <input
                                                    type="text"
                                                    name="lastName"
                                                    placeholder="Last Name"
                                                    className={`border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} p-2 rounded-md w-full`}
                                                    value={formData.lastName}
                                                    onChange={handleInputChange}
                                                />
                                                {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                                            </div>
                                        </div>
                                    </div>

                                    {/* DOB */}
                                    <div className="space-y-1">
                                        <input
                                            type="text"
                                            name="dob"
                                            placeholder="Date Of Birth(Optional)"
                                            className={`border ${errors.dob ? 'border-red-500' : 'border-gray-300'} p-2 rounded-md w-full md:w-1/2`}
                                            value={formData.dob}
                                            onChange={handleInputChange}
                                        />
                                        {errors.dob && <p className="text-red-500 text-sm">{errors.dob}</p>}
                                        <p className="text-xs text-gray-500">Please enter date of birth in (DD-MM-YYYY) format i.e. 25-04-1998</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Flight details sidebar - takes 1/3 width on larger screens */}
                    <div className="w-full md:w-1/3">
                        <div className="bg-white rounded-xl shadow-md p-4 space-y-4 text-sm text-gray-800 sticky top-4">
                            {/* Header */}
                            <div className="flex justify-between items-center">
                                <h2 className="text-lg font-semibold text-gray-800">Trip Summary</h2>
                            </div>

                            {/* Passenger Info */}
                            <div className="bg-blue-100 rounded-md px-3 py-2 text-gray-800">
                                {travellerCount} Traveller
                            </div>

                            {/* Flight Summary */}
                            <div>
                                <h3 className="font-semibold text-gray-800 mb-2">Flight Summary</h3>
                                <div className="rounded-md border border-gray-200 overflow-hidden">
                                    {/* Departing Header */}
                                    <div className="flex justify-between items-center bg-blue-100 px-3 py-2">
                                        <span className="font-medium">Departing</span>
                                        <span className="text-sm">{flightDetails.code}</span>
                                    </div>

                                    {/* Flight Details */}
                                    <div className="p-3 space-y-1">
                                        <span className="inline-block bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-xs font-medium">Sale fare</span>
                                        <p className="text-blue-900 font-semibold">{fromCity.city} – {toCity.city}</p>
                                        <p className="text-gray-700">{selectedDate.toDateString()} | {flightDetails.departure} - {flightDetails.arrival} | {flightDetails.duration} | {flightDetails.stops}</p>
                                        <p className="text-xs text-gray-600 pt-1">Check-in: 15KG | Hand: Up to 7KG</p>
                                    </div>
                                </div>
                                <p className="font-medium py-3">Grand Total :  ₹{isEco ? flightDetails.economyPrice * travellerCount : flightDetails.businessPrice * travellerCount}</p>
                                <div onClick={handleBookTicket} className="flex flex-row justify-center h-100 mb-3 cursor-pointer">
                                    <p className="font-bold bg-brandBlue hover:bg-blue-500 px-5 py-1 rounded-full text-white">Book Ticket</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}