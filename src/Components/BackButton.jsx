import { Button } from "@material-tailwind/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = ({ text = "Go Back", className = "" }) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <Button onClick={handleGoBack} className={className}>
      {text}
    </Button>
  );
};

export default BackButton;
