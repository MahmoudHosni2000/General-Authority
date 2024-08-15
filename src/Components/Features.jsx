import React from "react";
import { Card, Typography } from "@material-tailwind/react";
import "animate.css";

const FeatureCard = ({ id, title, description, image }) => {
  // Determine animation class based on id
  const animationClass =
    id === "1"
      ? "animate__backInLeft"
      : id === "2"
      ? "animate__backInRight"
      : "";

  return (
    <Card
      className={`animate__animated ${animationClass} p-4 shadow-md text-right h-auto sm:h-80 md:h-96 lg:h-[400px] transition-colors duration-300 hover:bg-[#e3f2fd]`}
    >
      <div className="flex items-center gap-4 mb-2 justify-between">
        <img src={image} alt={title} className="w-10 h-10" />
        <Typography variant="h5" className="text-shadow">
          {title}
        </Typography>
      </div>
      <div className="relative h-full overflow-hidden">
        <div
          dangerouslySetInnerHTML={{ __html: description }}
          className="absolute inset-0 w-full video-container"
        />
      </div>
    </Card>
  );
};

const Features = () => {
  return (
    <section className="py-8 px-4 mt-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6  mb-12">
        <div className="flex flex-col gap-2">
          <FeatureCard
            id="1"
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
            id="2"
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
