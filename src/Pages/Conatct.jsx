import { Button, Input, Typography } from "@material-tailwind/react";
import React from "react";
import BackButton from "../Components/BackButton";

export default function Conatct() {
  return (
    <section className="py-8 px-4 mt-12">
      <div className="container mx-auto">
        <Typography variant="h4" className="mb-4 text-black text-right">
          تواصل معنا
        </Typography>
        <form className="flex flex-col gap-4  flex flex-col gap-y-12 mt-12">
          <Input label="الأسم" />
          <Input label="البريد الإلكتروني" />
          <Input label="الرسالة" type="textarea" />
          <div className="flex justify-center gap-10">
            <BackButton
              text="رجــــوع"
              className="flex-grow text-white bg-[#01579b]"
            />
            <Button className="flex-grow bg-[#01579b]">إرسال</Button>
          </div>
        </form>
      </div>
    </section>
  );
}
