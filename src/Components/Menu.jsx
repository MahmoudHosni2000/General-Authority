import React from "react";
import LangToggle from "./LangToggle";
import { Button } from "@material-tailwind/react";

export default function Menu({ isDrawer }) {
  return (
    <nav
      className={`${
        isDrawer ? "flex flex-col text-black mx-3" : "hidden md:flex items-center gap-4"
      }`}
    >
      <LangToggle />
      <a
        href="#services"
        className={`${
          isDrawer ? "text-black hover:text-gray-700 mt-5" : "hover:text-gray-300"
        }`}
      >
        أسئلة شائعة
      </a>
      <a
        href="#complaints"
        className={`${
          isDrawer ? "text-black hover:text-gray-700" : "hover:text-gray-300"
        }`}
      >
        الشكاوي
      </a>
      <a
        href="#contact"
        className={`${
          isDrawer ? "text-black hover:text-gray-700" : "hover:text-gray-300"
        }`}
      >
        الصفحة الرئيسية
      </a>
      <Button
        className={`${
          isDrawer ? "bg-black text-white m-3" : "bg-[#424242] text-white m-0"
        } backdrop-blur-0`}
        ripple={true}
      >
        تسجيل الدخول
      </Button>
    </nav>
  );
}
