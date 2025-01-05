import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1f1f1f] text-[#b3b3b3] flex justify-between items-center py-5 px-20 text-sm relative mt-auto w-full">
      {/* فاصل */}
      <div className="absolute top-0 left-1/2 w-3/4 h-[1px] bg-[#b3b3b3] transform -translate-x-1/2"></div>

      {/* النص */}
      <div className="text-left">
        جميع الحقوق محفوظة لمنصة <strong className="font-bold">ساكورا</strong> 2024 ©
      </div>

      {/* الروابط */}
      <ul className="flex gap-8">
        <li><a href="#" className="hover:text-white transition">من نحن؟</a></li>
        <li><a href="#" className="hover:text-white transition">الشروط والأحكام</a></li>
        <li><a href="#" className="hover:text-white transition">الدعم الفني</a></li>
      </ul>
    </footer>
  );
};

export default Footer;
