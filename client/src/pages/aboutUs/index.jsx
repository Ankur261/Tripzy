import React from 'react';
import Navbar from '../../components/navbar/Navbar';

const teamMembers = [
  {
    name: 'Ankur Agrawal',
    role: 'Developer',
    description: 'Ankur is the driving force behind Team38, leading the team with clarity, vision, and technical depth. As a skilled Full-Stack Developer, he not only writes robust code using the MERN stack, but also ensures that every project moves forward with strategic direction and strong collaboration. He specializes in frontend architecture and backend integration, and his leadership style fosters clean code practices, timely delivery, and innovation. Ankur’s ability to break down complex problems and guide the team through scalable solutions makes him an indispensable part of every build.',
    image: '/assets/Ankur_Agrawal.png'
  },
  {
    name: 'Amit Thombare',
    role: 'Developer',
    description: 'Amit combines a sharp analytical mind with deep technical knowledge across the MERN stack. Whether its crafting intuitive UIs or architecting RESTful APIs, he ensures that performance and reliability go hand in hand. Amit also focuses on best practices and secure coding standards.',
    image: '/assets/Amit_Thombare.jpg'
  },
  {
    name: 'Aditya Bhandare',
    role: 'Full Stack Developer',
    description: 'Aditya is a versatile developer who thrives in both frontend and backend roles. With a deep understanding of React, Express, and MongoDB, he excels at building full-stack applications from concept to deployment. He is also known for his collaborative spirit and attention to detail.',
    image: '/assets/Aditya_Bhandare.jpg'
  }
];

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <div className="bg-white min-h-screen py-12 px-4 sm:px-10">
        {/* Header Section */}
        <div className="text-center mb-12 border-b pb-6 border-gray-300">
          <h1 className="text-4xl font-bold text-[#000099] mb-4">About Team38</h1>
          <p className="text-[#000099] max-w-2xl mx-auto text-sm sm:text-base">
            We are Team38 — a group of passionate and skilled Full-Stack Developers with a shared love for building modern web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).
            Together, we bring a balance of frontend finesse and backend power, enabling us to design and develop scalable, user-friendly, and efficient web solutions.
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
