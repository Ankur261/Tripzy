import { useState } from "react";
import ResultNavbar from '../../components/navbar/resultNavbar'
import { useEffect } from "react";
import { getFlightList } from "../../services/flights";
import { useLocation,useNavigate } from 'react-router-dom';

export default function FlightResult() {
  const navigate = useNavigate();
  const location = useLocation();
  const { fromCity, toCity, travellerCount, selectedDate } = location.state || {};
  console.log(fromCity, toCity)
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  useEffect(() => {
    async function fetchData() {
      setData(await getFlightList());
      setLoading(false);
    }
    fetchData();
  }, []);
  if (loading) {
    return (<>
      <p>Loading.....</p>
    </>)
  }
  return (
    <div className="w-full">
      <ResultNavbar isResultPage={true} selectedDate={selectedDate} fromCity={fromCity} toCity={toCity} travellerCount={travellerCount} />

      <div className="container mx-auto">
        <div className="mt-5">
          <h1 className="font-josefin text-[2rem] tracking-[-0.05rem] leading-[3.25rem]">
            Choose your preferred flight from
            <p className="text-boldGreen">{fromCity.city} <span className="text-black">to </span> {toCity.city}</p>
          </h1>
        </div>
        <div className="flex flex-row rounded-3xl bg-brandBlue justify-center h-9 items-center mt-7">
          <p className="text-white text-base m-3">
            {fromCity.code} ----- {toCity.code}
          </p>
        </div>


        {
          data.map((value, index) => {
            return (
              <div key={index} className="my-4 bg-white rounded-xl border border-blue-100 shadow-sm p-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4 w-full mx-auto">
                {/* <!-- Flight Details --> */}

                <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8 w-full md:w-3/5">
                  {/* <!-- Departure --> */}
                  <div className="text-center md:text-left">
                    <p className="text-sm text-gray-500">{value.code}</p>
                    <p className="text-2xl font-semibold">{value.departure}</p>
                    <p className="text-sm text-gray-700">{fromCity.code}, T1D</p>
                  </div>

                  {/* <!-- Flight Duration --> */}
                  <div className="flex flex-col items-center text-sm text-gray-500">

                    <p>{value.duration}</p>
                    <div className="w-32 border-t border-dashed border-blue-300 relative mb-1">
                    </div>
                    <p>Non-stop</p>
                  </div>

                  {/* <!-- Arrival --> */}
                  <div className="text-center md:text-left">
                    <p className="text-sm text-transparent">.</p>
                    {/* <!-- For alignment --> */}
                    <p className="text-2xl font-semibold">{value.arrival}</p>
                    <p className="text-sm text-gray-700">{toCity.code}, T2</p>
                  </div>
                </div>

                {/* <!-- Pricing Options --> */}
                <div className="flex flex-col md:flex-row items-center justify-end w-full md:w-2/5 space-y-4 md:space-y-0 md:space-x-6">
                  {/* <!-- Business --> */}
                  <div className="cursor-pointer  bg-blue-50 rounded-lg p-4 w-full md:w-auto text-center hover:bg-blue-100" onClick={() => {
                    navigate("/traveller-details", { state: { fromCity: fromCity, toCity: toCity, travellerCount: travellerCount, selectedDate: selectedDate, flightDetails: value, isEco: false } });
                  }}>
                    <span className="text-xs font-semibold text-blue-700 px-2 py-1 rounded">Stretch | Business</span>
                    <p className="text-lg font-semibold text-gray-900 mt-2">₹{value.businessPrice*travellerCount}</p>
                    <p className="text-sm text-green-600">+ Earn {(value.businessPrice*travellerCount)/10} Tripzy Points</p>
                  </div>

                  {/* <!-- Economy --> */}
                  <div className="cursor-pointer rounded-lg p-4 w-full md:w-auto text-center hover:bg-stone-100" onClick={() => {
                    navigate("/traveller-details", { state: { fromCity: fromCity, toCity: toCity, travellerCount: travellerCount, selectedDate: selectedDate, flightDetails: value, isEco: true } });
                  }}>
                    <p className="text-sm text-gray-500">Economy</p>
                    <p className="text-lg font-semibold text-gray-900">Starts at ₹{value.economyPrice*travellerCount}</p>
                    <p className="text-sm text-green-600">+ Earn {(value.economyPrice*travellerCount)/10} Tripzy Points</p>
                  </div>
                </div>
              </div>
            )
          })
        }

      </div>




      {/* <div className="relative bottom-0 left-0 w-full">
        <Footer/>
      </div> */}
    </div>

  );
}       
