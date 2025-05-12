import { useState } from "react";
import ResultNavbar from '../../components/navbar/resultNavbar'
import { useNavigate } from "react-router-dom";

export default function TravellerDetails({ }) {
      const navigate = useNavigate();

    return (
        <div className="w-full">
            <ResultNavbar isResultPage={false} />

            <div className="container mx-auto">
                <div className="mt-5">
                    <h1 className="font-josefin text-[2rem] tracking-[-0.05rem] leading-[3.25rem]">
                        You are flying from
                        <p className="text-boldGreen">Delhi <span className="text-black">to </span> Mumbai</p>
                    </h1>
                </div>
                <div className="flex flex-row rounded-3xl bg-brandBlue justify-center h-9 items-center mt-7">
                    <p className="text-white text-base m-3">
                        Del ----- BOM
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
                                        <p className="font-medium text-blue-900">Adult 1</p>
                                        <p className="text-sm text-gray-700">Passenger 1</p>
                                    </div>
                                </div>

                                {/* Passenger Form */}
                                <div className="px-4 py-6 space-y-4">
                                    {/* Gender */}
                                    <div className="flex items-center space-x-6">
                                        <label className="inline-flex items-center space-x-2">
                                            <input type="radio" name="gender1" className="form-radio text-blue-600 bg-white" />
                                            <span>Male</span>
                                        </label>
                                        <label className="inline-flex items-center space-x-2">
                                            <input type="radio" name="gender1" className="form-radio text-blue-600" />
                                            <span>Female</span>
                                        </label>
                                    </div>

                                    {/* Name Fields */}
                                    <div>
                                        <p className="font-medium text-sm text-gray-800">Name should be as per government ID</p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                                            <input type="text" placeholder="First And Middle Name" className="border border-gray-300 p-2 rounded-md w-full" />
                                            <input type="text" placeholder="Last Name" className="border border-gray-300 p-2 rounded-md w-full" />
                                        </div>
                                    </div>

                                    {/* DOB */}
                                    <div className="space-y-1">
                                        <input type="text" placeholder="Date Of Birth(Optional)" className="border border-gray-300 p-2 rounded-md w-full md:w-1/2" />
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
                                <a href="#" className="text-blue-700 text-sm font-medium hover:underline">DETAILS</a>
                            </div>

                            {/* Passenger Info */}
                            <div className="bg-blue-100 rounded-md px-3 py-2 text-gray-800">
                                1 Adult
                            </div>

                            {/* Flight Summary */}
                            <div>
                                <h3 className="font-semibold text-gray-800 mb-2">Flight Summary</h3>
                                <div className="rounded-md border border-gray-200 overflow-hidden">
                                    {/* Departing Header */}
                                    <div className="flex justify-between items-center bg-blue-100 px-3 py-2">
                                        <span className="font-medium">Departing</span>
                                        <span className="text-sm">6E 449, A321</span>
                                    </div>

                                    {/* Flight Details */}
                                    <div className="p-3 space-y-1">
                                        <span className="inline-block bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-xs font-medium">Sale fare</span>
                                        <p className="text-blue-900 font-semibold">Delhi – Mumbai</p>
                                        <p className="text-gray-700">Mon, 12 May 2025 | 05:00 - 07:20 | 02h 20m | Non-Stop</p>
                                        <p className="text-xs text-gray-600 pt-1">Check-in: 15KG | Hand: Up to 7KG</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}