import React from 'react';

const Services: React.FC = () => {
  return (
    <div
      className="
        font-['IBM Plex Sans Arabic'] min-h-screen py-16 px-20 
        bg-[url('/camera2.jpg')] bg-center bg-cover text-white text-right
      "
    >
      <h2 className="text-[90px] font-light mb-12">
        ما الذي <span className="font-bold">نقدمه</span>؟
      </h2>
      <div className="flex flex-wrap justify-between items-start gap-6">
        <div className="flex-1 max-w-[300px] min-w-[200px] p-5 flex flex-col items-end">
          <img
            src="image1.jpg"
            alt="أدوات تحرير متقدمة"
            className="w-[50px] mb-5 self-end"
          />
          <h3 className="text-lg font-semibold mb-2">أدوات تحرير متقدمة</h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            مجموعة من الأدوات الرقمية لتحرير الصور وتحسين جودتها.
          </p>
        </div>
        <div className="flex-1 max-w-[300px] min-w-[200px] p-5 flex flex-col items-end">
          <img
            src="image2.jpg"
            alt="دروس ومقالات تعليمية"
            className="w-[50px] mb-5 self-end"
          />
          <h3 className="text-lg font-semibold mb-2">دروس ومقالات تعليمية</h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            موارد تعليمية تغطي كل جوانب التصوير الفوتوغرافي.
          </p>
        </div>
        <div className="flex-1 max-w-[300px] min-w-[200px] p-5 flex flex-col items-end">
          <img
            src="image3.jpg"
            alt="شبكة تواصل اجتماعي"
            className="w-[50px] mb-5 self-end"
          />
          <h3 className="text-lg font-semibold mb-2">شبكة تواصل اجتماعي</h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            تواصل مع مصورين آخرين، تبادل الأفكار والخبرات.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;