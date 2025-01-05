import React from 'react';

interface PlanCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  bgColor: string;
  textColor: string;
  hoverScale: string;
  isHighlighted?: boolean; // خاصية لتحديد الفئة STANDARD
}

const PlanCard: React.FC<PlanCardProps> = ({
  title,
  price,
  description,
  features,
  buttonText,
  bgColor,
  textColor,
  hoverScale,
  isHighlighted = false,
}) => {
  const planStyles = isHighlighted
    ? 'scale-105 shadow-lg'
    : 'scale-100';

  const planSize = isHighlighted
    ? 'w-72 h-96' // حجم أكبر للفئة STANDARD
    : 'w-64 h-80'; // حجم أصغر للفئتين BASIC و PREMIUM

  const buttonStyles = isHighlighted
    ? 'bg-yellow-500 text-black hover:bg-yellow-600' // زر ذهبي لـ STANDARD
    : 'bg-black text-white hover:bg-gray-700'; // زر أسود للفئات الأخرى

  return (
    <div
      className={`rounded-lg shadow-md p-6 transition-transform transform ${hoverScale} ${planStyles} ${planSize} flex flex-col justify-between text-center`}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <h2 className="text-lg font-bold mb-4">{title}</h2>
      <p className="text-3xl font-bold mb-4">{price}</p>
      <p className="mb-4">{description}</p>
      <ul className="mb-4">
        {features.map((feature, index) => (
          <li key={index} className="text-sm mb-2">
            {feature}
          </li>
        ))}
      </ul>
      <button
        className={`py-2 px-4 rounded ${buttonStyles}`}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default PlanCard;
