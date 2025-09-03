import React from 'react';

const ContentBox: React.FC = () => {
  return (
    <div 
        className="w-full max-w-4xl backdrop-blur-sm border rounded-2xl shadow-2xl p-8 md:p-12 animate-fade-in-up"
        style={{
            backgroundColor: 'var(--card-bg-color)',
            borderColor: 'var(--border-color)',
        }}
    >
      <div className="prose max-w-none" style={{ color: 'var(--text-color)' }}>
        <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--heading-color)' }}>اكتشف طريقة جديدة للتعلم</h2>
        <p>
          هذا هو المكان الذي ستضع فيه نصك الجذاب. صف دورتك، مهمتك، أو القصة التي تريد أن ترويها. تفاعل مع جمهورك بكلمات قوية تلهمهم وتحفزهم على اتخاذ إجراء. لقد صممنا هذه المساحة لتكون نظيفة وأنيقة ومركزة، مما يضمن أن رسالتك هي نجمة العرض.
        </p>
        <p>
          التصميم متجاوب تمامًا ويبدو رائعًا على جميع الأجهزة، من الهواتف المحمولة إلى شاشات سطح المكتب الكبيرة. الخلفية والإطار الخفيفان يمنحان شعورًا عصريًا وفاخرًا يرتقي بمحتواك.
        </p>
        <ul className="list-disc pr-5 mt-4 space-y-2">
            <li>تم تطبيق مبادئ واجهة المستخدم وتجربة المستخدم الحديثة.</li>
            <li>تم بناؤه باستخدام React و TypeScript و Tailwind CSS.</li>
            <li>عناصر تفاعلية لجذب انتباه المستخدم.</li>
        </ul>
      </div>
    </div>
  );
};

export default ContentBox;