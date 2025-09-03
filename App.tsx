import React, { useState } from 'react';
import JoinForm from './components/JoinForm';
import ThankYou from './components/ThankYou';
import InquiryModal from './components/InquiryModal';

const App: React.FC = () => {
  const [appState, setAppState] = useState<'form' | 'thankyou'>('form');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFormSubmit = () => {
    setAppState('thankyou');
  };

  const renderContent = () => {
    switch (appState) {
      case 'thankyou':
        return <ThankYou />;
      case 'form':
      default:
        return <JoinForm onFormSubmit={handleFormSubmit} />;
    }
  };

  return (
    <div className="min-h-screen font-sans bg-gray-100 text-gray-800 flex items-center justify-center p-4">
        <button
          onClick={() => setIsModalOpen(true)}
          className="fixed top-4 left-4 z-40 bg-white text-gray-800 font-semibold py-2 px-5 border border-gray-300 rounded-lg shadow-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75 transition-all transform hover:scale-105"
          aria-haspopup="dialog"
        >
          استفسار
        </button>

        {renderContent()}
        
        {isModalOpen && <InquiryModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default App;