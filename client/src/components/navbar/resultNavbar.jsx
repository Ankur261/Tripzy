import NavButton from './components/NavButton'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

export default function ResultNavbar({}) {
  return (
    <div className="h-14 flex flex-row bg-white bg-opacity-30 hover:bg-white ps-10 items-center">
        <img className="h-12 margin-left-1" src="/assets/logo-1.png" alt="" />
        <div className="flex flex-row justify-evenly basis-4/5">
       <div className="md:hidden flex flex-1 flex-row justify-evenly max-w-lg">
         <p className='text-brandBlue font-bold'>
            Delhi -- Mumbai
        </p>
       </div>
       <div className="flex-1 flex-row justify-evenly max-w-lg hidden md:flex">
         <p className='text-brandBlue font-bold'>
            Delhi - Mumbai
        </p>
        <p className='text-brandBlue font-bold'>
            11th May
        </p>
        <p className='text-brandBlue font-bold'>
            1 Passenger
        </p>
       </div>
        </div>
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
