import React, { useState } from 'react';
import { feedback } from '../../services/feedback';
import Navbar from '../../components/navbar/Navbar';

export default function FeedbackForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await feedback(formData);
    console.log(res)
    if (res.message === 'Feedback submitted successfully') {
      setStatus('Thank you for your feedback!');
      setFormData({ name: '', email: '', message: '' });
    } else {
      setStatus('Something went wrong. Please try again.');
    }
  };

  return (
    <>
    <Navbar/>
    <div className="bg-white my-10 py-12 px-4 sm:px-10 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-[#000099] text-center mb-6">Leave Your Feedback</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-[#000099]">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            required
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-[#000099] focus:border-[#000099]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[#000099]">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            required
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-[#000099] focus:border-[#000099]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[#000099]">Message</label>
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            required
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-[#000099] focus:border-[#000099]"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-[#000099] text-white px-6 py-2 rounded hover:bg-blue-800"
        >
          Submit Feedback
        </button>

        {status && <p className="text-center text-sm text-[#000099] mt-4">{status}</p>}
      </form>
    </div>
    </>
  );
}
