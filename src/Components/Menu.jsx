import React from "react";
import { useNavigate } from "react-router-dom";

export default function Menu({ isDrawer }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact");
  };
  return (
    <nav
      className={`${
        isDrawer
          ? "flex flex-col text-black mx-3"
          : "hidden md:flex items-center gap-4"
      }`}
    >
      <a
        href="complaints"
        className={`${
          isDrawer ? "text-black hover:text-gray-700" : "hover:text-gray-300"
        }`}
      >
        الشكاوي
      </a>
      <a
        onClick={handleClick}
        href="#contact"
        className={`${
          isDrawer ? "text-black hover:text-gray-700" : "hover:text-gray-300"
        }`}
      >
        تواصل معنا
      </a>
    </nav>
  );
}
