import React from "react";
import {
  Card,
  Input,
  Button,
  Typography,
  Select,
  Option,
} from "@material-tailwind/react";
import BackButton from "../Components/BackButton";

export default function Complaints() {
  return (
    <div className="flex items-center justify-center min-h-screen p-5 mt-12">
      <Card
        color="transparent"
        shadow={false}
        className="w-full max-w-4xl sm:w-full"
      >
        <Typography variant="h1" color="blue-gray" className="text-right">
          الشـكــــــــــــــــــــاوي
        </Typography>
        <Typography color="gray" className="mt-1 font-normal text-right">
          رجاءً إدخال الاسم رباعى وبريدك الإلكتروني وباقي البيانات المطلوبة
          .الأخرى في الاستمارة أدناه
          <br />
          هذه البيانات يجب أن تكون كاملة وصحيحة حتى تمكنك من المشاركة الفعالة في
          .منظومة الشكاوى{" "}
        </Typography>
        <form className="mt-8 mb-2">
          <div className="mb-6 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="text-right">
              رقم الطلـــــــــب
            </Typography>
            <Input
              label="رقم الطلـــــــــب"
              size="lg"
              placeholder="ادخل رقم الطلب"
              className="direction-rtl"
            />
            <Typography variant="h6" color="blue-gray" className="text-right">
              مضمون الشـكــــــــــــــــــــوى
            </Typography>
            <textarea
              rows="4"
              className="w-full resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 text-sm font-normal text-blue-gray-700 outline-none placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50 direction-rtl"
              placeholder="ادخل مضمون الشكوى"
            ></textarea>
            <Typography variant="h6" color="blue-gray" className="text-right">
              نوع الشكوى
            </Typography>
            <Select
              label="نوع الشكوى"
              className="direction-rtl"
              defaultValue=""
            >
              <Option value="فني">رفع مساحي</Option>
              <Option value="مالي">إستخراج</Option>
            </Select>
            <Typography variant="h6" color="blue-gray" className="text-right">
              الأسم
            </Typography>
            <Input label="الأسم" className="direction-rtl" />
            <Typography variant="h6" color="blue-gray" className="text-right">
              رقم الهاتف
            </Typography>
            <Input label="رقم الهاتف" className="direction-rtl" />
            <Typography variant="h6" color="blue-gray" className="text-right">
              البريد الالكتروني
            </Typography>
            <Input label="البريد الالكتروني" className="direction-rtl" />
            <Typography variant="h6" color="blue-gray" className="text-right">
              العنوان
            </Typography>
            <Input label="العنوان" className="direction-rtl" />
            <Typography variant="h6" color="blue-gray" className="text-right">
              الملاحظات
            </Typography>
            <textarea
              rows="4"
              className="w-full resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 text-sm font-normal text-blue-gray-700 outline-none placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50 direction-rtl"
              placeholder="دون ملاحظاتك"
            ></textarea>
          </div>
          <div className="flex justify-center gap-10">
            <BackButton
              text="رجــــوع"
              className="flex-grow text-white bg-[#01579b]"
            />
            <Button className="flex-grow bg-[#01579b]">تسجيل</Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
