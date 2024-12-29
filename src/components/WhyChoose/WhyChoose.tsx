import React from 'react';
import styles from './WhyChoose.module.css';

const WhyChoose: React.FC = () => {
  return (
    <section className={styles.sakuraSection}>
      <div className={styles.sakuraContent}>
        <h1>لماذا تختار ساكورا؟</h1>
        <ul className={styles.sakuraFeaturesList}>
          <li>فرص لا تُفوت</li>
          <li>أدوات متقدمة</li>
          <li>مجتمع داعم</li>
        </ul>
      </div>
      <div className={styles.sakuraImageContainer}>
        <img src="why-choose.jpg" alt="صورة توضيحية" />
      </div>
    </section>
  );
};

export default WhyChoose;
