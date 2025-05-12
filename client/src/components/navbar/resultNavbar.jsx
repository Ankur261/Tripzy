import NavButton from './components/NavButton'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { useNavigate } from "react-router-dom";

export default function ResultNavbar({fromCity, toCity,travellerCount, selectedDate, isResultPage}) {
  
const navigate = useNavigate();
  
  return (
    <div className="justify-between h-14 flex flex-row bg-white bg-opacity-30 hover:bg-white px-10 items-center">
        <img onClick={() => { navigate("/")}} className="h-12 margin-left-1 cursor-pointer" src="/assets/logo-1.png" alt="" />
       {isResultPage && <div className="flex flex-row justify-evenly basis-4/5">
       <div className="md:hidden flex flex-1 flex-row justify-evenly max-w-lg">
         <p className='text-brandBlue font-bold'>
            {fromCity.city} -- {toCity.city}
        </p>
       </div>
       <div className="flex-1 flex-row justify-evenly max-w-lg hidden md:flex">
         <p className='text-brandBlue font-bold'>
            {fromCity.city} - {toCity.city}
        </p>
        <p className='text-brandBlue font-bold'>
            {selectedDate.toDateString()}
        </p>
        <p className='text-brandBlue font-bold'>
            {travellerCount} Passenger
        </p>
       </div>
        </div>}
        <div className="bg-stone-200 h-9 px-1 flex flex-row justify-between text-black cursor-pointer items-center rounded-full">
        <div className="bg-white flex px-2 rounded-full border h-7 justify-center items-center">
          <p className="font-normal text-sm">
            Login
          </p>
        </div>
        <ChevronDownIcon className='text-black size-3 m-1' />
        </div>
    </div>
  );
}
