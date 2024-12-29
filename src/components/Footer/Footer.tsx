import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLeft}>
        جميع الحقوق محفوظة لمنصة <strong>ساكورا</strong> 2024 ©
      </div>
      <ul className={styles.footerRight}>
        <li><a href="#">من نحن؟</a></li>
        <li><a href="#">الشروط والأحكام</a></li>
        <li><a href="#">الدعم الفني</a></li>
      </ul>
    </footer>
  );
};

export default Footer;
