import React from 'react';

const OurWork: React.FC = () => {
  return (
    <div className="h-screen flex flex-col items-center bg-gray-100 pt-20 px-5">
      <h1 className="text-[48px] font-bold text-center mb-10">
        أعمالنا حيث يلتقي الإبداع مع الاحترافية
      </h1>
      <p className="text-[20px] text-center mb-10">
        هنا يمكنك رؤية أعمالنا المميزة
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-7xl">
        <div className="flex flex-col items-center">
          <video
            src="ve1.MP4"
            controls
            className="w-full h-60 object-cover rounded-md mb-4"
          ></video>
          <h2 className="text-[20px] font-bold mb-2">البحث عن الثغرات </h2>
          <p className="text-[16px] text-gray-600 text-center">
            سيارة وأكثر من 40 جائزة يوميًا!
          </p>
        </div>
        <div className="flex flex-col items-center">
          <video
            src="ve2.MP4"
            controls
            className="w-full h-60 object-cover rounded-md mb-4"
          ></video>
          <h2 className="text-[20px] font-bold mb-2">CTF جوائز الــ</h2>
          <p className="text-[16px] text-gray-600 text-center">
            الكبار والناشئين ما راح يتركون أي ثغرة
          </p>
        </div>
        <div className="flex flex-col items-center">
          <video
            src="ve3.mp4"
            controls
            className="w-full h-60 object-cover rounded-md mb-4"
          ></video>
          <h2 className="text-[20px] font-bold mb-2">تحدي الأجهزه الطبية</h2>
          <p className="text-[16px] text-gray-600 text-center">
            كيف يمكن للأمن السيبراني أن يحمي حياة المريض
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurWork;
