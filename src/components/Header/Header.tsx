import React from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>S</div>
      <nav>
        <ul>
          <li><a href="#">المميزات</a></li>
          <li><a href="#">خدماتنا</a></li>
          <li><a href="#">الأسعار</a></li>
          <li><a href="#">المصورين</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
