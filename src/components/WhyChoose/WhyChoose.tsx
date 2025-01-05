import React from 'react';

const WhyChoose: React.FC = () => {
  return (
    <section className="bg-[#1f1f1f] text-white flex items-center h-screen relative overflow-hidden">
      {/* النصوص */}
      <div className="w-3/5 text-right pr-2 flex flex-col items-end">
        <h1 className="text-[110px] font-light mb-3 leading-none whitespace-nowrap">
          لماذا تختار <span className="font-bold text-white">ساكورا؟</span>
        </h1>
        <ul className="space-y-4 mt-4">
          <li className="relative text-[24px] pr-8">
            <span className="absolute right-10 h-full w-[3px] bg-[#f1d166]"></span>
            <span className="pr-6">فرص لا تُفوت</span>
          </li>
          <li className="relative text-[24px] pr-8">
            <span className="absolute right-10 h-full w-[3px] bg-[#f1d166]"></span>
            <span className="pr-6">أدوات متقدمة</span>
          </li>
          <li className="relative text-[24px] pr-8">
            <span className="absolute right-10 h-full w-[3px] bg-[#f1d166]"></span>
            <span className="pr-6">مجتمع داعم</span>
          </li>
        </ul>
      </div>

      {/* الصورة */}
      <div
        className="absolute -right-[300px] h-[600px] w-[600px] overflow-hidden rounded-full"
        style={{
          top: '50%',
          transform: 'translateY(-50%)',
          clipPath: 'inset(0 50% 0 0)', // قص النصف الأيمن وإظهار النصف الأيسر فقط
        }}
      >
        <img
          src="why-choose.jpg"
          alt="صورة توضيحية"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default WhyChoose;
