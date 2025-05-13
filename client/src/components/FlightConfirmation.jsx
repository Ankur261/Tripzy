import { FaCheckCircle, FaPlane } from 'react-icons/fa';

export default function FlightConfirmation () {

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300">
      <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md transform transition-all duration-300 scale-100 opacity-100">
        <div className="flex flex-col items-center text-center">
      
          <div className="text-[#009] mb-4">
            <FaCheckCircle className="text-6xl" />
          </div>
          
        
          <h2 className="text-2xl font-bold text-[#009] mb-2">Booking Confirmed!</h2>
          
        
          <div className="relative w-full my-6">
            <div className="h-1 bg-gray-200 rounded-full">
              <div className="h-full bg-[#009] rounded-full animate-[progress_2s_linear]"></div>
            </div>
            <FaPlane className="text-[#009] absolute top-1/2 left-0 -translate-y-1/2 animate-[fly_2s_linear] transform" />
          </div>
          
       
          <div className="text-gray-600 mb-6">
            <p className="mb-1">Your flight has been successfully booked.</p>
          </div>
     
          <p className="text-sm text-gray-500">Navigation back to Home Page!</p>
        </div>
      </div>
    </div>
  );
};
