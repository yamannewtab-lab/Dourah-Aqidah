import React from 'react';

interface JoinButtonProps {
  onClick: () => void;
}

const JoinButton: React.FC<JoinButtonProps> = ({ onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-lg font-medium rounded-lg group bg-gradient-to-br from-theme-accent1 to-theme-accent2 group-hover:from-theme-accent1 group-hover:to-theme-accent2 hover:text-[var(--button-text-color)] focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 transition-all duration-300 ease-in-out transform hover:scale-105 animate-fade-in-up"
      style={{ animationDelay: '200ms', color: 'var(--heading-color)' }}
    >
      <span 
        className="relative px-8 py-4 transition-all ease-in duration-150 rounded-md group-hover:bg-opacity-0"
        style={{ backgroundColor: 'var(--bg-color)'}}
      >
          انضم
      </span>
      <svg className="w-6 h-6 mr-2 -ml-1 transform transition-transform duration-300 group-hover:-translate-x-2 absolute left-4 opacity-0 group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
    </button>
  );
};

export default JoinButton;