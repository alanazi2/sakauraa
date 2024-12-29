import React from 'react';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <h1>ساكورا</h1>
      <p>وجهتك الأولى للإبداع والتواصل مع مجتمع المصورين المحترفين و
        الهواة على حدٍ سواء.
         نحن هنا لنقدم لك كل ما تحتاجه لتنمية مهاراتك، تحسين أعمالك، وتسويق إبداعاتك</p>
      <a href="#" className={styles.button}>اشترك معنا</a>
    </section>
  );
};

export default Hero;
