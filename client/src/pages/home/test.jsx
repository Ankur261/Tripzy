import React, { useState } from 'react';
import { Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react';

export default function PassengerSelector() {
  const [adultCount, setAdultCount] = useState(1);

  return (
    <div className="w-full max-w-md space-y-4 text-sm text-gray-700">

      {/* Passenger Row */}
      <div className="flex items-center justify-between">
        <div>
          <span className="font-semibold text-blue-700">Adult</span>{' '}
          <span className="text-gray-400">(12 years - 59 years)</span>
        </div>
        <div className="flex items-center gap-2 bg-blue-50 px-3 py-1 rounded-full">
          <button
            onClick={() => setAdultCount(prev => Math.max(1, prev - 1))}
            className="text-blue-600 hover:text-blue-800"
          >
            <Minus size={16} />
          </button>
          <span className="w-4 text-center text-blue-700">{adultCount}</span>
          <button
            onClick={() => setAdultCount(prev => prev + 1)}
            className="text-blue-600 hover:text-blue-800"
          >
            <Plus size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
