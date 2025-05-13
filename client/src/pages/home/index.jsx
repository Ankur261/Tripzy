import { useState, useEffect } from "react";
import Marquee from "react-fast-marquee"
import Navbar from '../../components/navbar/Navbar'
import '../../assets/style/commonStyle.css';
import Footer from './footer';
import { useNavigate } from "react-router-dom";
import { getAirports } from '../../services/airports'
import { Minus, Plus, } from 'lucide-react';
import Calendar from "../../components/Calander";
import { addMonths } from 'date-fns';


export default function Home({ }) {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
  const token = localStorage.getItem('token');
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [isOpenFrom, setIsOpenFrom] = useState(false);
  const [isOpenTo, setIsOpenTo] = useState(false);
  const [isOpenCalander, setIsOpenCalander] = useState(false);
  const [isOpenTraveller, setIsOpenTraveller] = useState(false);
  const [travellerCount, setTravellerCount] = useState(1);
  const [fromCity, setFromCity] = useState({
    name: "Indira Gandhi International Airport",
    city: "Delhi",
    code: "DEL"
  });
  const [toCity, setToCity] = useState({
    name: "Chhatrapati Shivaji Maharaj International Airport",
    city: "Mumbai",
    code: "BOM"
  });

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const handleMonthChange = (offset) => {
    setCurrentMonth(addMonths(currentMonth, offset));
  };

  const handleSelectFrom = (airport) => {
    setFromCity(airport);
    setIsOpenFrom(false);
  };

  const handleSelectTo = (airport) => {
    setToCity(airport);
    setIsOpenTo(false);
  };

  useEffect(() => {
    async function fetchData() {
      setData(await getAirports());
      setLoading(false);
    }
    fetchData();
  }, []);
  if (loading) {
    return (<>
      <p className="">Loading.....</p>
    </>)
  }
  console.log(user, token)
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
          <h1 className="font-josefin text-[2.4rem] tracking-[-0.05rem] leading-[3.25rem]">
            {token ? `Hi ${user.fName} ${user.lName} ready for ` : "Hi there, keep flying, keep saving, keep booking on"} <span className="text-boldGreen">{token ? "adventure ?":"Tripzy.in"}</span>
          </h1>
        </div>
        <div className="rounded-xl border border-red-50 bg-white">
          <div className="flex flex-row rounded-t-xl bg-brandBlue justify-center h-9 items-center ">
            {/* <img src="assets/icons8-flight-100.png" className="size-5" alt="" /> */}
            <img src="/assets/icDottedPlane.svg" className="size-5 invert-[.92] sepia-[0] saturate-[74.7] hue-rotate-[55deg] brightness-[1.16] contrast-[1.07]" alt="" />
            <p className="text-white text-base m-3">
              Book a flight
            </p>
          </div>
          <div className="bg-white">
            <div className="grid grid-cols-1 md:grid-cols-[9fr_5fr] gap-4 border border-gray-300 rounded-lg m-2 p-3">

              {/* From, Arrow, To - uses 12-column grid */}
              <div className="grid grid-cols-11 gap-2 items-center">
                {/* From (4/12) */}
                <div onClick={() => setIsOpenFrom(!isOpenFrom)} className="col-span-5 bg-white rounded-xl p-2 md:p-3 cursor-pointer hover:scale-105 hover:border hover:shadow-lg transition duration-300">
                  <div className="text-sm">From</div>
                  <div className="text-blue-900 font-semibold">{fromCity.city}, {fromCity.code}</div>
                  <p className="line-clamp-1">{fromCity.name}</p>
                  {isOpenFrom && (
                    <div className="max-h-60 overflow-y-auto absolute top-full z-10 w-full bg-white border border-gray-200 rounded-lg p-4">
                      <div className="mb-2 text-xs text-gray-400 uppercase">All Cities</div>
                      {data.map((airport, index) => (
                        <div
                          key={index}
                          onClick={() => handleSelectFrom(airport)}
                          className="p-2 hover:bg-gray-100 cursor-pointer flex justify-between items-start"
                        >
                          <div>
                            <div className="font-medium">{airport.city}</div>
                            <div className="text-sm text-gray-500">{airport.name}</div>
                          </div>
                          <div className="text-sm text-gray-400">{airport.code}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Arrow (2/12) */}
                <div className="col-span-1 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 self-center">
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                  </svg>
                </div>

                {/* To (4/12) */}
                <div onClick={() => setIsOpenTo(!isOpenTo)} className="col-span-5 bg-white rounded-xl p-2 md:p-3 cursor-pointer hover:scale-105 hover:border hover:shadow-lg transition duration-300">
                  <div className="text-sm">To</div>
                  <div className="text-blue-900 font-semibold">{toCity.city}, {toCity.code}</div>
                  <p className="line-clamp-1">{toCity.name}</p>
                  {isOpenTo && (
                    <div className="max-h-60 overflow-y-auto absolute top-full z-10 w-full bg-white border border-gray-200 rounded-lg p-4">
                      <div className="mb-2 text-xs text-gray-400 uppercase">All Cities</div>
                      {data.map((airport, index) => (
                        <div
                          key={index}
                          onClick={() => handleSelectTo(airport)}
                          className="p-2 hover:bg-gray-100 cursor-pointer flex justify-between items-start"
                        >
                          <div>
                            <div className="font-medium">{airport.city}</div>
                            <div className="text-sm text-gray-500">{airport.name}</div>
                          </div>
                          <div className="text-sm text-gray-400">{airport.code}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Departure and Travellers - uses 4-column grid */}
              <div className="grid grid-cols-5 gap-2">
                {/* Departure (2/4) */}
                <div onClick={() => { setIsOpenCalander(!isOpenCalander) }} className="col-span-2 p-2 md:p-3 cursor-pointer rounded-xl hover:scale-105 hover:border hover:shadow-lg transition duration-300">
                  <div className="text-sm">Departure</div>
                  <div className="text-blue-900 font-semibold">{selectedDate.toDateString()}</div>
                  {isOpenCalander && <Calendar
                    selectedDate={selectedDate}
                    onDateChange={setSelectedDate}
                    currentMonth={currentMonth}
                    onMonthChange={handleMonthChange}
                  />}
                </div>

                {/* Travellers (2/4) */}
                <div onClick={() => setIsOpenTraveller(!isOpenTraveller)} className="col-span-3 p-2 md:p-3 cursor-pointer rounded-xl hover:scale-105 hover:border hover:shadow-lg transition duration-300">
                  <div className="text-sm">Travellers</div>
                  <div className="text-blue-900 font-semibold">{travellerCount} Passenger</div>
                  {isOpenTraveller &&
                    <div className="max-h-60 overflow-y-auto absolute top-full z-10 w-full bg-white border border-gray-200 rounded-lg p-4">

                      <div className="items-center justify-between">
                        <div className="flex items-center gap-2 bg-blue-50 px-3 py-1 rounded-full justify-between">
                          <div
                            onClick={() => setTravellerCount(prev => Math.max(1, prev - 1))}
                            className="text-blue-600 hover:text-blue-800"
                          >
                            <Minus size={10} />
                          </div>
                          <span className="w-4 text-center text-blue-700">{travellerCount}</span>
                          <div
                            onClick={() => setTravellerCount(prev => prev + 1)}
                            className="text-blue-600 hover:text-blue-800"
                          >
                            <Plus size={10} />
                          </div>
                        </div>
                      </div>
                    </div>
                  }
                </div>
              </div>

            </div>
          </div>
          <div onClick={() => {
            navigate("/flight-result", { state: { fromCity: fromCity, toCity: toCity, travellerCount: travellerCount, selectedDate: selectedDate } });
          }} className="flex flex-row justify-center h-100 mb-3 cursor-pointer">
            <p className="font-bold bg-brandBlue px-5 py-1 rounded-full text-white">Search</p>
          </div>
        </div>
        <div className="mt-5">
          <h4 className="font-josefin text-[1.4rem] tracking-[-0.05rem] leading-[3.25rem]">
            What's new?
          </h4>
          <h1 className="font-josefin text-[2rem] tracking-[-0.05rem] leading-[2.25rem]">
            Find <span className="text-boldGreen">exclusive offers</span> and the best deals available
            for you
          </h1>
        </div>
      </div>
      <div className="container mx-auto hidden md:block my-20">
        <img src="/assets/home-image-1.png" alt="" />
      </div>
      <div className="container mx-auto block md:hidden my-12">
        <img src="/assets/home-image-2.png" alt="" />
      </div>
      <div className="relative bottom-0 left-0 w-full">
        <Footer />
      </div>
    </>

  );
}       
