import React from 'react';
import Navbar from '../../components/navbar/Navbar';

const teamMembers = [
  {
    name: 'Ankur Agrawal',
    role: 'Developer',
    description: '',
    image: '/assets/Ankur_Agrawal.png' 
  },
  {
    name: 'Amit Thombare',
    role: 'Developer',
    description: '',
    image: '/assets/Amit_Thombare.jpg'
  },
  {
    name: 'Aditya Bhandare',
    role: 'Full Stack Developer',
    description: '',
    image: '/assets/Aditya_Bhandare.jpg'
  }
];

export default function AboutUs() {
  return (
    <>
    <Navbar/>
     <div className="bg-white min-h-screen py-12 px-4 sm:px-10">
      {/* Header Section */}
      <div className="text-center mb-12 border-b pb-6 border-gray-300">
        <h1 className="text-4xl font-bold text-[#000099] mb-4">About Team38</h1>
        <p className="text-[#000099] max-w-2xl mx-auto text-sm sm:text-base">
          We are a passionate group of developers dedicated to building clean, efficient, and scalable applications. Meet the team behind the code.
        </p>
      </div>

      {/* Team Members Section */}
      <div className="space-y-10">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-center gap-6 bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-40 rounded-full object-cover border-2 border-[#000099]"
            />
            <div className="text-[#000099] text-center sm:text-left">
              <h2 className="text-2xl font-semibold">{member.name}</h2>
              <span className="inline-block mt-1 px-3 py-1 text-xs bg-[#000099] text-white rounded-full">
                {member.role}
              </span>
              <p className="mt-4 text-sm leading-relaxed">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
