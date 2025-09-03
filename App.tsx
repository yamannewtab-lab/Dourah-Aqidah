import React, { useState } from 'react';
import JoinForm from './components/JoinForm';
import ThankYou from './components/ThankYou';

const App: React.FC = () => {
  const [appState, setAppState] = useState<'form' | 'thankyou'>('form');

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
        {renderContent()}
    </div>
  );
};

export default App;