import { FaUser, FaEnvelope, FaVenusMars, FaBirthdayCake, FaEdit } from 'react-icons/fa';
import Navbar from '../../components/navbar/Navbar';

const UserProfilePage = () => {
const user = JSON.parse(localStorage.getItem('user'));
  return (
   <>
   <Navbar/>
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Profile Header */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative mb-4">
            <div className="w-32 h-32 rounded-full bg-[#009] flex items-center justify-center text-white text-5xl font-bold">
              {user.fName.charAt(0)}{user.lName.charAt(0)}
            </div>
            <button className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors">
              <FaEdit className="text-[#009]" />
            </button>
          </div>
          <h1 className="text-3xl font-bold text-[#009]">
            {user.fName} {user.lName}
          </h1>
        </div>

        {/* Profile Details Card */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-[#009] mb-6 border-b pb-2">Personal Information</h2>
            
            {/* Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Email */}
              <div className="flex items-start">
                <div className="bg-[#009] bg-opacity-10 p-3 rounded-full mr-4">
                  <FaEnvelope className="text-[#009]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email Address</p>
                  <p className="font-medium">{user.email}</p>
                </div>
              </div>

              {/* First Name */}
              <div className="flex items-start">
                <div className="bg-[#009] bg-opacity-10 p-3 rounded-full mr-4">
                  <FaUser className="text-[#009]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">First Name</p>
                  <p className="font-medium">{user.fName}</p>
                </div>
              </div>

              {/* Last Name */}
              <div className="flex items-start">
                <div className="bg-[#009] bg-opacity-10 p-3 rounded-full mr-4">
                  <FaUser className="text-[#009]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Last Name</p>
                  <p className="font-medium">{user.lName}</p>
                </div>
              </div>

              {/* Gender */}
              <div className="flex items-start">
                <div className="bg-[#009] bg-opacity-10 p-3 rounded-full mr-4">
                  <FaVenusMars className="text-[#009]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Gender</p>
                  <p className="font-medium">{user.gender}</p>
                </div>
              </div>

              {/* Date of Birth */}
              <div className="flex items-start">
                <div className="bg-[#009] bg-opacity-10 p-3 rounded-full mr-4">
                  <FaBirthdayCake className="text-[#009]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Date of Birth</p>
                  <p className="font-medium">{user.dob}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          {/* <div className="bg-gray-50 px-6 py-4 flex justify-end">
            <button className="px-6 py-2 bg-[#009] text-white rounded-lg hover:bg-[#006] transition-colors flex items-center">
              <FaEdit className="mr-2" />
              Edit Profile
            </button>
          </div> */}
        </div>

        {/* <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-[#009] mb-4 border-b pb-2">Preferences</h2>
            <p className="text-gray-600">No preferences set yet</p>
          </div>
        </div> */}
      </div>
    </div>
   </>
  );
};

export default UserProfilePage;