import { useState } from "react";
import ResultNavbar from '../../components/navbar/resultNavbar'


export default function TravellerDetails({ }) {
    return (
        <div className="w-full">
            <ResultNavbar />

            <div className="container mx-auto">
                <div className="mt-5">
                    <h1 className="font-josefin text-[2rem] tracking-[-0.05rem] leading-[3.25rem]">
                        Choose your preferred flight from
                        <p className="text-boldGreen">Delhi <span className="text-black">to </span> Mumbai</p>
                    </h1>
                </div>
                <div className="flex flex-row rounded-3xl bg-brandBlue justify-center h-9 items-center mt-7">
                    <p className="text-white text-base m-3">
                        Del ----- BOM
                    </p>
                </div>


                <div class="bg-blue-50 p-4 rounded-md max-w-3xl mx-auto">
                    {/* <!-- Header --> */}
                    <h2 class="text-lg font-semibold text-gray-800">1. Complete your passenger details</h2>
                    <p class="text-sm text-gray-600 mt-1">Please fill all of the mandatory fields to proceed further <span class="text-red-500">*</span>.</p>

                    {/* <!-- Form Container --> */}
                    <div class="bg-white rounded-lg mt-4 shadow-md">
                        {/* <!-- Section Header --> */}
                        <div class="flex justify-between items-center bg-blue-100 px-4 py-2 rounded-t-lg">
                            <div>
                                <p class="font-medium text-blue-900">Adult 1</p>
                                <p class="text-sm text-gray-700">Passenger 1</p>
                            </div>
                        </div>

                        {/* <!-- Passenger Form --> */}
                        <div class="px-4 py-6 space-y-4">
                            {/* <!-- Gender --> */}
                            <div class="flex items-center space-x-6">
                                <label class="inline-flex items-center space-x-2">
                                    <input type="radio" name="gender1" class="form-radio text-blue-600 bg-white" />
                                    <span>Male</span>
                                </label>
                                <label class="inline-flex items-center space-x-2">
                                    <input type="radio" name="gender1" class="form-radio text-blue-600" />
                                    <span>Female</span>
                                </label>
                            </div>

                            {/* <!-- Name Fields --> */}
                            <div>
                                <p class="font-medium text-sm text-gray-800">Name should be as per government ID</p>
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                                    <input type="text" placeholder="First And Middle Name" class="border border-gray-300 p-2 rounded-md w-full" />
                                    <input type="text" placeholder="Last Name" class="border border-gray-300 p-2 rounded-md w-full" />
                                </div>
                            </div>

                            {/* <!-- DOB --> */}
                            <div class="space-y-1">
                                <input type="text" placeholder="Date Of Birth(Optional)" class="border border-gray-300 p-2 rounded-md w-full md:w-1/2" />
                                <p class="text-xs text-gray-500">Please enter date of birth in (DD-MM-YYYY) format i.e. 25-04-1998</p>
                            </div>
                           
                        </div>
                    </div>
                </div>

<div class="max-w-sm mx-auto bg-white rounded-xl shadow-md p-4 space-y-4 text-sm text-gray-800">
  {/* <!-- Header --> */}
  <div class="flex justify-between items-center">
    <h2 class="text-lg font-semibold text-gray-800">Trip Summary</h2>
    <a href="#" class="text-blue-700 text-sm font-medium hover:underline">DETAILS</a>
  </div>

  {/* <!-- Passenger Info --> */}
  <div class="bg-blue-100 rounded-md px-3 py-2 text-gray-800">
    1 Adult
  </div>

  {/* <!-- Flight Summary --> */}
  <div>
    <h3 class="font-semibold text-gray-800 mb-2">Flight Summary</h3>
    <div class="rounded-md border border-gray-200 overflow-hidden">
      {/* <!-- Departing Header -->  */}
      <div class="flex justify-between items-center bg-blue-100 px-3 py-2">
        <span class="font-medium">Departing</span>
        <span class="text-sm">6E 449, A321</span>
      </div>

      {/* <!-- Flight Details --> */}
      <div class="p-3 space-y-1">
        <span class="inline-block bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-xs font-medium">Sale fare</span>
        <p class="text-blue-900 font-semibold">Delhi – Mumbai</p>
        <p class="text-gray-700">Mon, 12 May 2025 | 05:00 - 07:20 | 02h 20m | Non-Stop</p>
        <p class="text-xs text-gray-600 pt-1">Check-in: 15KG | Hand: Up to 7KG</p>
      </div>
    </div>
  </div>
</div>

            </div>




            {/* <div className="relative bottom-0 left-0 w-full">
        <Footer/>
      </div> */}
        </div>

    );
}       
