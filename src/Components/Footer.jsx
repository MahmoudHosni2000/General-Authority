import React from "react";
import { Typography } from "@material-tailwind/react";
import Chatbot from "./Chatbot";

const Footer = () => {
  return (
    <>
      <Chatbot />
      <footer className="bg-[#01579b] text-white p-4 text-center m-0">
        <Typography variant="small">
          &copy; 2024 My App. All rights reserved.
        </Typography>
      </footer>
    </>
  );
};

export default Footer;
