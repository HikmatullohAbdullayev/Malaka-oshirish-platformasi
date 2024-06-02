import React, { useState } from "react";
import { Link } from "react-router-dom";
import quiz_data from "../../../data/quiz_data";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import TestFinish from "../../../components/TestFinish";

function TestQuiz(props) {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (value) => {
    setSelectedValue(value);
    console.log(selectedValue);
  };

  return (
    <section className="map">
      <div className="container max-w-[1440px] mx-auto px-[20px] pt-[50px]">
        <div className="flex gap-[105px] items-center table900:gap-[50px] mobile550:flex-col  mobile550:gap-[20px] mobile550:items-start">
          <h2 className="text-[#8D8484] font-normal  text-[24px] ">
            Yakuniy test
          </h2>

          <div className=" ">
            <Link
              className="px-[5px] text-[#8D8484] py-[7px] font-normal bg-white text-[24px] border border-[#ADA8A8] outline-blue-300 hover:bg-blue-300 hover:border-blue-400 hover:text-white active:border-blue-600 focus:border-blue-600  table900:text-[20px] "
              to="/"
            >
              Bosh saxifaga qaytish
            </Link>
          </div>
        </div>

        <div className="max-w-[1200px] max-h-[600px] mx-auto mt-[30px] overflow-y-scroll bg-white ">
          {quiz_data.map((item) => (
            <div className="grid gap-[20px] px-[20px] py-[18px]" key={item.id}>
              <p className="font-normal text-[22px] ">
                <b>{item.id}.</b> {item.ask}
              </p>
              <RadioGroup defaultValue="" onValueChange={handleChange}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value={item.variant1}
                    id="r1"
                    className="border-gray-500 border-[2px]"
                  />
                  <Label
                    htmlFor="r1"
                    className="font-normal text-[20px] cursor-pointer"
                  >
                    {item.variant1}
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value={item.variant2}
                    id="r2"
                    className="border-gray-500 border-[2px]"
                  />
                  <Label
                    htmlFor="r2"
                    className="font-normal text-[20px] cursor-pointer"
                  >
                    {item.variant2}
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value={item.variant3}
                    id="r3"
                    className="border-gray-500 border-[2px]"
                  />
                  <Label
                    htmlFor="r3"
                    className="font-normal text-[20px] cursor-pointer"
                  >
                    {item.variant3}
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value={item.variant4}
                    id="r4"
                    className="border-gray-500 border-[2px]"
                  />
                  <Label
                    htmlFor="r4"
                    className="font-normal text-[20px] cursor-pointer"
                  >
                    {item.variant4}
                  </Label>
                </div>
              </RadioGroup>
            </div>
          ))}
          <div className=" text-center my-[20px] ">
            <Link className="bg-blue-500 px-[34px] py-[10px] rounded-sm text-white ">
              Test yakunlash
            </Link>
          </div>
          
        </div>
      <TestFinish />
      </div>
    </section>
  );
}

export default TestQuiz;
