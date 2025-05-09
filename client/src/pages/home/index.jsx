import { useState } from "react";
import Marquee from "react-fast-marquee"
import Navbar from '../../components/navbar/Navbar'
import './style.css'
export default function Home({ }) {
  return (
    <>
      <Marquee style={{ backgroundColor: '#fff8e5' }} speed={60} pauseOnHover={true} >
        <div   >
          <span className="text-gray-900 " style={{ marginRight: '1rem' }} > <span className="font-bold">Important Travel Update:</span> Due to Pakistan air space closure a few international flights are impacted. Check your flight status
            For cancellations, choose an alternate flight or refund.   <br />
          </span>
        </div>
      </Marquee>
      <Navbar />
      <div className="container mx-auto">
        <div className="mt-5">
          <h1 className="font-josefin text-[2.65rem] tracking-[-0.05rem] leading-[3.25rem]">
            Hi there, keep flying, keep saving, keep booking on <span className="text-green-500">Tripzy.in</span>
          </h1>
        </div>
        <div className="rounded-xl border border-red-50 h-200 bg-white">
          <div className="flex flex-row rounded-t-xl bg-brandBlue justify-center h-9 items-center ">
            <img src="assets/icons8-flight-100.png" className="size-5" alt="" />
            <p className="text-white text-base m-3">
              Book a flight
            </p>
          </div>
          <div className="bg-white">
            <div className="grid grid-cols-1 md:grid-cols-[9fr_5fr] gap-4 border border-gray-300 rounded-lg m-2 p-3">

              {/* From, Arrow, To - uses 12-column grid */}
              <div className="grid grid-cols-11 gap-2 items-center">
                {/* From (4/12) */}
                <div className="col-span-5 bg-white rounded-xl p-2 md:p-3 cursor-pointer hover:scale-105 hover:border hover:shadow-lg transition duration-300">
                  <div className="text-sm">From</div>
                  <div className="text-blue-900 font-semibold">Delhi, DEL</div>
                  <p className="line-clamp-1">Indira Gandhi International Airport</p>
                </div>

                {/* Arrow (2/12) */}
                <div className="col-span-1 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 self-center">
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                  </svg>
                </div>

                {/* To (5/12) */}
                <div className="col-span-5 bg-white rounded-xl p-2 md:p-3 cursor-pointer hover:scale-105 hover:border hover:shadow-lg transition duration-300">
                  <div className="text-sm">To</div>
                  <div className="text-blue-900 font-semibold">Mumbai, BOM</div>
                  <p className="line-clamp-1">Chatrapati Shivaji Maharaj Terminus</p>
                </div>
              </div>

              {/* Departure and Travellers - uses 4-column grid */}
              <div className="grid grid-cols-5 gap-2">
                {/* Departure (2/4) */}
                <div className="col-span-2 p-2 md:p-3 cursor-pointer rounded-xl hover:scale-105 hover:border hover:shadow-lg transition duration-300">
                  <div className="text-sm">Departure</div>
                  <div className="text-blue-900 font-semibold">9 October</div>
                  <div>Friday</div>
                </div>

                {/* Travellers (2/4) */}
                <div className="col-span-3 p-2 md:p-3 cursor-pointer rounded-xl hover:scale-105 hover:border hover:shadow-lg transition duration-300">
                  <div className="text-sm">Travellers</div>
                  <div className="text-blue-900 font-semibold">1 Passenger</div>
                </div>
              </div>

            </div>
          </div>


          <div className="flex flex-row justify-center h-100 mb-3 cursor-pointer">
            <p className="font-bold bg-brandBlue px-5 py-1 rounded-full text-white">Search</p>
          </div>
        </div>
      </div>
    </>

  );
}       
