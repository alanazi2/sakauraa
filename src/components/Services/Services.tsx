import React from 'react';
import styles from './Services.module.css';

const Services: React.FC = () => {
  return (
    <div className={styles.services}>
      <h2>ما الذي نقدمه؟</h2>
      <div className={styles.servicesContainer}>
        <div className={styles.service}>
          <img src="image1.jpg" alt="شبكة تواصل اجتماعي" />
          <h3>أدوات تحرير متقدمة</h3>
          <p>مجموعة من الأدوات الرقمية لتحرير الصور وتحسين جودتها.</p>
        </div>
        <div className={styles.service}>
          <img src="image2.jpg" alt="دروس ومقالات تعليمية" />
          <h3>دروس ومقالات تعليمية</h3>
          <p>موارد تعليمية تغطي كل جوانب التصوير الفوتوغرافي.</p>
        </div>
        <div className={styles.service}>
          <img src="image3.jpg" alt="أدوات تحرير متقدمة" />
          <h3>شبكة تواصل اجتماعي</h3>
          <p>تواصل مع مصورين آخرين، تبادل الأفكار والخبرات.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
