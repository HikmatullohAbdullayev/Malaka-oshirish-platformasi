import RigthVectorIcon from '../assets/icon/RigthVectorIcon';
import { Link } from 'react-router-dom';

import React from 'react';
import slider_data from '../data/slider_data';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

function SliderContainer(props) {
  return (
    <div>
      <Carousel>
        <CarouselContent>
          {slider_data.map((item) => (
            <CarouselItem
              key={item.id}
              className="md:basis-1/2 lg:basis-1/3  cursor-no-drop"
            >
              <div
                key={item.id}
                className=" bg-[#f2f2f2]  text-start px-[14px] py-[7px] mx-auto max-w-[340px] rounded-xl max-h-[450px] h-full transition duration-300 ease-in-out transform    m-1  hover:shadow-lg mobile550:max-w-[260px]  mobile550:max-h-[340px] "
              >
                <div className=" ">
                  <img
                    className="w-[320px] h-[200px]  rounded-xl mobile550:w-[230px] mobile550:h-[160px]"
                    src={item.img}
                    alt={item.title}
                  />
                </div>
                <div className="grid gap-[10px] py-[10px] px-[5px]">
                  <p className="text-[28px]  font-normal text-start text-[#8C8C8C] mobile550:text-[22px] mobile550:py-[0px]">
                    Kurs
                  </p>
                  <p className="text-[20px] font-normal text-center text-[#123E02] leading-[30px] mobile550:text-[16px] mobile550:leading-[20px] ">
                    {item.title}
                  </p>
                  <div className="flex justify-end ">
                    <Link to="/">
                      <span className="flex justify-end items-end text-end bg-[#335A50] py-[15.5px] px-[19px] rounded-full  mobile550:py-[9.5px] mobile550:px-[12px]">
                        <RigthVectorIcon />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="ml-[50px] bg-black w-[40px] h-[40px]" />
        <CarouselNext className="mr-[50px] bg-black w-[40px] h-[40px]" />
      </Carousel>
    </div>
  );
}

export default SliderContainer;
