import { useState } from "react";
import ResultNavbar from '../../components/navbar/resultNavbar'


export default function FlightResult({ }) {
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


        <div class="my-4 bg-white rounded-xl border border-blue-100 shadow-sm p-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4 w-full mx-auto">
          {/* <!-- Flight Details --> */}
          <div class="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8 w-full md:w-3/5">
            {/* <!-- Departure --> */}
            <div class="text-center md:text-left">
              <p class="text-sm text-gray-500">6E 853</p>
              <p class="text-2xl font-semibold">01:45</p>
              <p class="text-sm text-gray-700">DEL, T1D</p>
            </div>

            {/* <!-- Flight Duration --> */}
            <div class="flex flex-col items-center text-sm text-gray-500">

              <p>02h 30m</p>
              <div class="w-32 border-t border-dashed border-blue-300 relative mb-1">
              </div>
              <p>Non-stop</p>
            </div>

            {/* <!-- Arrival --> */}
            <div class="text-center md:text-left">
              <p class="text-sm text-transparent">.</p>
              {/* <!-- For alignment --> */}
              <p class="text-2xl font-semibold">04:15</p>
              <p class="text-sm text-gray-700">BOM, T2</p>
            </div>
          </div>

          {/* <!-- Pricing Options --> */}
          <div class="flex flex-col md:flex-row items-center justify-end w-full md:w-2/5 space-y-4 md:space-y-0 md:space-x-6">
            {/* <!-- Business --> */}
            <div class="bg-blue-50 rounded-lg p-4 w-full md:w-auto text-center">
              <span class="text-xs font-semibold text-blue-700 bg-blue-100 px-2 py-1 rounded">Stretch | Business</span>
              <p class="text-lg font-semibold text-gray-900 mt-2">₹20,018</p>
              <p class="text-sm text-green-600">+ Earn 2,091 IndiGo BluChips</p>
            </div>

            {/* <!-- Economy --> */}
            <div class="text-center">
              <p class="text-sm text-gray-500">Economy</p>
              <p class="text-lg font-semibold text-gray-900">Starts at ₹7,469</p>
              <p class="text-sm text-green-600">+ Earn 798 IndiGo BluChips</p>
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
