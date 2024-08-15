import React from "react";
import { ThemeProvider } from "styled-components";
import ChatBot from "react-simple-chatbot";
import FQS from "../FQS.json";

const theme = {
  background: "#f5f8fb",
  fontFamily: "Arial, sans-serif",
  headerBgColor: "#107BFC",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: "#007BFF",
  botFontColor: "#ffff",
  userBubbleColor: "#fff",
  userFontColor: "#4a4a4a",
};

const Chatbot = () => (
  <ThemeProvider theme={theme}>
    <div className="absolute bottom-0 right-0 m-5">
      <ChatBot steps={FQS.steps} floating={true} />
    </div>
  </ThemeProvider>
);

export default Chatbot;
