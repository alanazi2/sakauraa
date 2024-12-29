import React from 'react';
import styles from './Plan.module.css';

const Plan: React.FC = () => {
  return (
    <section className={styles.pricingSection}>
      <div className={styles.header}>
        <h1 className={styles.pageTitle}>الأسعار وخطط الاشتراك</h1>
        <p className={styles.pageDescription}>باقات مختلفة تساعدك في الوصول لهدفك</p>
      </div>
      
      <div className={styles.pricingPlans}>
        <div className={`${styles.plan} ${styles.basicPlan}`}>
          <h2 className={styles.planTitle}>PREMIUM</h2>
          <p className={styles.planPrice}>299 ريال</p>
          <p className={styles.planDescription}>محتوى كامل متاح</p>
          <p className={styles.planFeature}>مكتبة لايت روم كاملة</p>
          <p className={styles.planFeature}>استشارة لمدة ساعة أسبوعياً</p>
          <button className={styles.planButton}>اشترك</button>
        </div>
        
        <div className={`${styles.plan} ${styles.standardPlan}`}>
          <h2 className={styles.planTitle}>STANDARD</h2>
          <p className={styles.planPrice}>199 ريال</p>
          <p className={styles.planDescription}>محتوى رئيسي</p>
          <p className={styles.planFeature}>3 مكتبات لايت روم</p>
          <p className={styles.planFeature}>استشارة لمدة ساعة مرة في الشهر</p>
          <button className={styles.planButton}>اشترك</button>
        </div>
        
        <div className={`${styles.plan} ${styles.premiumPlan}`}>
          <h2 className={styles.planTitle}>BASIC</h2>
          <p className={styles.planPrice}>99 ريال</p>
          <p className={styles.planDescription}>محتوى رئيسي</p>
          <p className={styles.planFeature}>استشارة لمدة ساعة مرة في الشهر</p>
          <button className={styles.planButton}>اشترك</button>
        </div>
      </div>
    </section>
  );
};

export default Plan;
