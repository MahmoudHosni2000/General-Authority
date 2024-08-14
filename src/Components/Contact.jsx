import React from "react";
import { Button, Input, Typography } from "@material-tailwind/react";

const Contact = () => {
  return (
    <section className="py-8 px-4 ">
      <div className="container mx-auto">
        <Typography variant="h4" className="mb-4 text-black">
          Contact Us
        </Typography>
        <form className="flex flex-col gap-4">
          <Input className="custom-input" label="Name" />
          <Input className="custom-input" label="Email" />
          <Input className="custom-input" label="Message" type="textarea" />
          <Button className="bg-[#01579b]">Send Message</Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
