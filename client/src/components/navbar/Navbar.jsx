import React, {useState} from "react";
import NavButton from './components/NavButton'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem('user'));
  const token = localStorage.getItem('token');
  const firstLetter = token ? user.fName.charAt(0).toUpperCase():"Login" ;
  return (
    <div className="h-14 flex flex-row bg-white bg-opacity-30 hover:bg-white px-10 items-center">
      <img onClick={() => { navigate("/") }} className="cursor-pointer h-12 margin-left-1" src="/assets/logo-1.png" alt="" />
      <div className="flex flex-row justify-evenly basis-4/5">
        <NavButton buttonText={"Home"} onClick={() => {
          navigate('/')
        }}/>
        <NavButton buttonText={"Feedback"} onClick={() => {
          navigate('/feedback')
        }}/>
        <NavButton buttonText={"About Us"} onClick={() => {
          navigate('/about-us')
        }}/>
      </div>
      <div onClick={() => {token ? setIsDropdownOpen(!isDropdownOpen): navigate('/auth') }} className="relative bg-stone-200 h-9 px-1 flex flex-row justify-between text-black cursor-pointer items-center rounded-full">
        <div className="bg-white flex px-2 rounded-full border h-7 justify-center items-center">
          <p className="font-normal text-sm">
            { firstLetter }
          </p>
        </div>
        <ChevronDownIcon className='text-black size-3 m-1' />
        {isDropdownOpen && (
          <div className="top-7 absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-100">
            <a 
              onClick={() => {navigate('/profile')}}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              User Profile
            </a>
            <a 
              onClick={() => {navigate('/bookings')}}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Bookings
            </a>
            <button 
              className="w-full text-left px-4 py-2 text-sm text-gray-700 bg-white hover:bg-gray-100"
              onClick={() => {
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                console.log('User logged out');
                setIsDropdownOpen(false);
                window.location.reload(); 
              }}
            >
              Log Out
            </button>
          </div>
        )}
      </div>
      
    </div>
  );
}
