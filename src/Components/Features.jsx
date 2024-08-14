import React from "react";
import { Card, Typography } from "@material-tailwind/react";

const FeatureCard = ({ title, description, image }) => (
<Card className="p-4 shadow-md text-right h-auto sm:h-80 md:h-96 lg:h-[400px]">
<div className="flex items-center gap-4 mb-2 justify-between">
      <img src={image} alt={title} className="w-10 h-10" />
      <Typography variant="h5">{title}</Typography>
    </div>
    <div className="relative h-full overflow-hidden	">
      <div
        dangerouslySetInnerHTML={{ __html: description }}
        className="absolute inset-0 w-full video-container"
      />
    </div>
  </Card>
);

const Features = () => {
  return (
    <section className="py-8 px-4 mt-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <FeatureCard
            title="طلب استخراج شهادة رفع مساحي للتسجيل العقاري"
            image="/LatestLogo.png" 
            description='<video className="w-full h-auto" controls="">
                          <source src="https://rsc.mped.gov.eg/videos/LatestVideo.mp4" type="video/mp4">
                        </video>'
          />
          <a
            href="https://rsc.mped.gov.eg/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base bg-[#01579b] text-white px-4 py-2 rounded-md inline-block text-center"
          >
            إنشــــــــــــــاء طلــــــــــــــــــــــــــــــــــب 
            </a>
        </div>
        <div className="flex flex-col gap-2">
          <FeatureCard
            title="طلب استخراج شهادة منسوب لأعلى نقطة بالعقار"
            image="/Logo.png" 
            description='<video className="w-full h-auto" controls="">
                          <source src="./التصالح.mp4" type="video/mp4">
                        </video>'
          />
          <a
            href="http://95.217.192.5/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base bg-[#01579b] text-white px-4 py-2 rounded-md inline-block text-center"
          >
            إنشــــــــــــــاء طلــــــــــــــــــــــــــــــــــب 
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
