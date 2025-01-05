import React from 'react';
import PlanCard from './PlanCard';

const Plan: React.FC = () => {
  const plans = [
    {
      title: 'BASIC',
      price: '99 ريال',
      description: 'محتوى رئيسي',
      features: ['استشارة لمدة ساعة مرة في الشهر'],
      buttonText: 'اشترك',
      bgColor: '#f8f8f8',
      textColor: '#333333',
      hoverScale: 'hover:scale-105',
      isHighlighted: false,
    },
    {
      title: 'STANDARD',
      price: '199 ريال',
      description: 'محتوى رئيسي',
      features: ['3 مكتبات لايت روم', 'استشارة لمدة ساعة مرة في الشهر'],
      buttonText: 'اشترك',
      bgColor: '#000000',
      textColor: '#ffffff',
      hoverScale: 'hover:scale-110',
      isHighlighted: true, // إبراز الفئة STANDARD
    },
    {
      title: 'PREMIUM',
      price: '299 ريال',
      description: 'محتوى كامل متاح',
      features: ['مكتبة لايت روم كاملة', 'استشارة لمدة ساعة أسبوعياً'],
      buttonText: 'اشترك',
      bgColor: '#ffffff',
      textColor: '#333333',
      hoverScale: 'hover:scale-105',
      isHighlighted: false,
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">الأسعار وخطط الاشتراك</h1>
        <p className="text-lg text-gray-600">باقات مختلفة تساعدك في الوصول لهدفك</p>
      </div>
      <div className="flex justify-center gap-8 flex-wrap">
        {plans.map((plan, index) => (
          <PlanCard key={index} {...plan} />
        ))}
      </div>
    </section>
  );
};

export default Plan;
