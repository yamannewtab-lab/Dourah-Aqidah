import React, { useState } from 'react';

interface InquiryModalProps {
  onClose: () => void;
}

const InquiryModal: React.FC<InquiryModalProps> = ({ onClose }) => {
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message || !phone) {
      setError('يرجى ملء جميع الحقول.');
      return;
    }
    setError('');
    setIsLoading(true);

    const webhookUrl = 'https://discord.com/api/webhooks/1412782512115159050/Ws5SFn-Io22PUDQkFYuI5ZzDK40dO2wjC_Z4FVKiF1MXswh6Jh8c8ibbhctF1Hkvz28Z';
    const payload = {
      content: `**استفسار جديد**\n\n**الرسالة:** ${message}\n**رقم الهاتف:** ${phone}`
    };

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        const errorText = await response.text();
        setError(`فشل الإرسال: ${errorText}. يرجى المحاولة مرة أخرى.`);
        console.error('Webhook submission failed:', errorText);
      }
    } catch (err) {
      setError('حدث خطأ في الشبكة. يرجى المحاولة مرة أخرى.');
      console.error('Error submitting form:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 animate-fade-in-up"
        style={{ animationDuration: '0.3s' }}
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="inquiry-modal-title"
    >
      <div 
        className="w-full max-w-lg bg-white border border-gray-200 rounded-2xl shadow-xl p-8 md:p-12 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
            onClick={onClose} 
            className="absolute top-4 left-4 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="إغلاق"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>

        {isSubmitted ? (
            <div className="text-center">
                <h2 id="inquiry-modal-title" className="text-3xl font-bold mb-4 text-gray-900">تم الإرسال بنجاح!</h2>
                <p className="text-gray-600">شكرًا لاستفسارك. سنتواصل معك قريبًا.</p>
            </div>
        ) : (
            <>
                <h2 id="inquiry-modal-title" className="text-3xl font-bold mb-6 text-center text-gray-900">نموذج استفسار</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-600">
                        استفسارك
                        </label>
                        <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all h-28"
                        required
                        aria-required="true"
                        />
                    </div>
                    <div>
                        <label htmlFor="phone-inquiry" className="block text-sm font-medium mb-2 text-gray-600">
                        رقم الهاتف
                        </label>
                        <input
                        type="tel"
                        id="phone-inquiry"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                        required
                        aria-required="true"
                        />
                    </div>
                    {error && <p className="text-red-600 text-sm" role="alert">{error}</p>}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full relative inline-flex items-center justify-center p-0.5 overflow-hidden text-lg font-medium rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 transition-all duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
                        aria-live="polite"
                    >
                        <span 
                        className="w-full relative px-8 py-3 transition-all ease-in duration-150 bg-white rounded-md group-hover:bg-opacity-0 text-gray-900 group-hover:text-white"
                        >
                        {isLoading ? 'جاري الإرسال...' : 'إرسال'}
                        </span>
                    </button>
                </form>
            </>
        )}
      </div>
    </div>
  );
};

export default InquiryModal;