import React from 'react';

const ThankYou: React.FC = () => {
  return (
    <div 
        className="w-full max-w-lg text-center bg-white border border-gray-200 rounded-2xl shadow-xl p-8 md:p-12 animate-fade-in-up"
    >
      <h2 className="text-4xl font-bold mb-8 text-gray-900">شكرًا لك!</h2>
      <a
        href="https://chat.whatsapp.com/BSMUAxfotsDLNHCdYbpfoh?mode=ems_copy_c"
        target="_blank"
        rel="noopener noreferrer"
        className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-lg font-medium rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 transition-all duration-300 ease-in-out transform hover:scale-105"
        >
        <span 
            className="relative px-8 py-4 transition-all ease-in duration-150 bg-white rounded-md group-hover:bg-opacity-0 text-gray-900 group-hover:text-white"
        >
          انضم إلى مجموعة الواتساب
        </span>
      </a>
    </div>
  );
};

export default ThankYou;