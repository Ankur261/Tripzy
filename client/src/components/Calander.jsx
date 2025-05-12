import React from 'react';
import {
    startOfMonth,
    endOfMonth,
    startOfWeek,
    endOfWeek,
    addDays,
    format,
    isSameMonth,
    isSameDay
} from 'date-fns';

export default function Calendar({
    selectedDate,
    onDateChange,
    currentMonth,
    onMonthChange,
}) {
    const renderHeader = () => (
        <div className="flex justify-between items-center mb-4">
            <div onClick={() => onMonthChange(-1)}>&lt;</div>
            <div className="text-lg font-semibold">{format(currentMonth, 'MMMM yyyy')}</div>
            <div onClick={() => onMonthChange(1)}>&gt;</div>
        </div>
    );

    const renderDays = () => {
        const startDate = startOfWeek(currentMonth);
        return (
            <div className="grid grid-cols-7 text-sm font-medium text-center text-blue-700 mb-2">
                {[...Array(7)].map((_, i) => (
                    <div key={i}>{format(addDays(startDate, i), 'EEE')}</div>
                ))}
            </div>
        );
    };

   const renderCells = () => {
    const startDate = startOfWeek(startOfMonth(currentMonth));
    const endDate = endOfWeek(endOfMonth(currentMonth));
    let day = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
    const rows = [];

    while (day <= endDate) {
        const days = [];

        for (let i = 0; i < 7; i++) {
            // Create a new date object for each day to avoid reference issues
            const currentDay = new Date(day);
            const isSelected = isSameDay(currentDay, selectedDate);
            const isCurrentMonth = isSameMonth(currentDay, currentMonth);

            days.push(
                <div
                    key={currentDay.toISOString()}
                    onClick={() => {
                        console.log(currentDay); // Now this will log the correct date
                        onDateChange(new Date(currentDay.getFullYear(), currentDay.getMonth(), currentDay.getDate()))
                    }}
                    className={`text-center py-2 text-sm cursor-pointer rounded 
                        ${isCurrentMonth ? 'text-gray-800' : 'text-gray-400'}
                        ${isSelected ? 'bg-blue-500 text-white' : 'hover:bg-blue-100'}`}
                >
                    {format(currentDay, 'd')}
                </div>
            );

            day = addDays(day, 1);
        }

        rows.push(<div key={day.toISOString()} className="grid grid-cols-7">{days}</div>);
    }

    return <div>{rows}</div>;
};


    return (
        <div className="absolute top-full z-10 min-w-80 bg-white border border-gray-200 rounded-lg p-4">
            {renderHeader()}
            {renderDays()}
            {renderCells()}
        </div>
    );
}
