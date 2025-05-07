import { useState } from "react";
import Marquee from "react-fast-marquee"
import Navbar from '../../components/navbar/Navbar'
import RadioBtn from '../../components/RadioBtn'
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
        <div className="rounded-md border border-red-50 h-200">
          <div className="flex flex-row bg-brandBlue justify-center h-9 items-center ">
          <img src="assets/icons8-flight-100.png" className="size-5" alt=""/>
          <p className="text-white text-base m-3">
            Book a flight
          </p>
          </div>
          <div>
           
          </div>
        </div>
      </div>
    </>

  );
}       
