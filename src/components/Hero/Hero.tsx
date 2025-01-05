import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="
      font-['IBM Plex Sans Arabic'] min-h-screen w-full bg-[url('/camera-background.jpg')] bg-center bg-cover 
      flex flex-col justify-center text-right p-5 relative z-0
    ">
      <div className="absolute inset-0 bg-[url('/camera-background.jpg')] bg-center bg-cover z-[-1]"></div>
      
      {/* العنوان */}
      <h1 className="text-[128px] font-bold text-black mb-[90px] text-right w-full z-10">
        ساكورا
      </h1>

      {/* النص والزر */}
      <div className="text-right z-10">
        <p className="text-[24px] font-normal leading-[36px] text-black max-w-[600px] mb-[50px] ml-auto">
          وجهتك الأولى للإبداع والتواصل مع مجتمع المصورين المحترفين والهواة على حدٍ سواء. 
          نحن هنا لنقدم لك كل ما تحتاجه لتنمية مهاراتك، تحسين أعمالك، وتسويق إبداعاتك.
        </p>

        <a 
          href="#" 
          className="
            bg-black text-white py-5 px-9 text-[18px] rounded-[55px] text-center w-[220px] 
            hover:bg-gray-800 transition duration-300 ml-auto
          "
        >
          اشترك معنا
        </a>
      </div>
    </section>
  );
};

export default Hero;
