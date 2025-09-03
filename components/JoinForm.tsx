import React, { useState } from 'react';

interface JoinFormProps {
  onFormSubmit: () => void;
}

const JoinForm: React.FC<JoinFormProps> = ({ onFormSubmit }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !age || !phone) {
      setError('يرجى ملء جميع الحقول.');
      return;
    }
    setError('');
    setIsLoading(true);

    const webhookUrl = 'https://discord.com/api/webhooks/1412410439530446888/9HM_R04iPgdnsUSRUnL0L893YiE6D_PKdGxO83VC_wDT7sAfi7kEysjsySUCjtcrhZHN';
    const payload = {
      content: `🎉 تسجيل جديد في دورة العقيدة 🎉\n\n**الاسم:** ${name}\n**العمر:** ${age}\n**رقم الهاتف:** ${phone}`
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
        onFormSubmit();
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
        className="w-full max-w-lg bg-white border border-gray-200 rounded-2xl shadow-xl p-8 md:p-12 animate-fade-in-up"
    >
      <h2 className="text-3xl font-bold mb-4 text-center text-gray-900">انضم إلى دورة العقيدة</h2>
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6 text-right space-y-2 text-gray-600">
        <p><span className="font-bold text-gray-700">الموضوع:</span> شرح منظومة عقيدة العوام</p>
        <p><span className="font-bold text-gray-700">الوقت:</span> 8:15 - 8:45 pm</p>
        <p><span className="font-bold text-gray-700">اليوم:</span> في كل يوم الأربعاء -أسبوعيا-</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-600">
            الاسم الكامل
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
            required
            aria-required="true"
          />
        </div>
        <div>
          <label htmlFor="age" className="block text-sm font-medium mb-2 text-gray-600">
            العمر
          </label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
            required
            aria-required="true"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-2 text-gray-600">
            رقم الهاتف
          </label>
          <input
            type="tel"
            id="phone"
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
    </div>
  );
};

export default JoinForm;