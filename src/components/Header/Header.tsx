import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <header
      className="
        font-['IBM Plex Sans Arabic'] w-full flex justify-between items-center 
        py-5 px-10 fixed top-0 left-0 z-50 bg-white bg-opacity-10 backdrop-blur-md
      "
    >
      {/* الشعار */}
      <a href="/" className="text-4xl font-bold text-white">
        S
      </a>

      {/* القوائم */}
      <nav>
        <ul className="list-none flex justify-end gap-12 ml-auto">
          <li className="text-[20px] font-medium">
            <Link className="no-underline text-black hover:underline" to={'our-work'}>
              أعمالنا
            </Link>
          </li>
          <li className="text-[20px] font-medium">
            <a href="#" className="no-underline text-black hover:underline">المميزات</a>
          </li>
          <li className="text-[20px] font-medium">
            <a href="#" className="no-underline text-black hover:underline">خدماتنا</a>
          </li>
          <li className="text-[20px] font-medium">
            <a href="#" className="no-underline text-black hover:underline">الأسعار</a>
          </li>
          <li className="text-[20px] font-medium">
            <a href="#" className="no-underline text-black hover:underline">المصورين</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
