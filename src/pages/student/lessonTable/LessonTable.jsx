import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Link } from 'react-router-dom';
import lesson from '../../../data/lesson_data';
import LessonTabs from '../../../components/LessonTabs';

function LessonTable() {
  return (
    <section className="map ">
      <div className="container max-w-[1440px] mx-auto  px-[20px]  ">
        <div className="flex justify-between gap-[15px] items-center  py-[40px] mobile480:flex-col mobile480:items-start">
          <p>Dars jadvali</p>
          <p className="px-[25px] text-[#8D8484] py-[2px] font-normal bg-white text-[20px] border border-[#ADA8A8]   table900:text-[16px] ">
            Haftalik
          </p>
          <Link
            className="px-[5px] text-[#8D8484] py-[7px] font-normal bg-white text-[24px] border border-[#ADA8A8] outline-blue-300 hover:bg-blue-500 hover:border-blue-500 hover:text-white active:border-blue-600 focus:border-blue-600  table900:text-[20px] "
            to="/"
          >
            Bosh saxifaga qaytish
          </Link>
        </div>

        <Table className="border max-w-full min-w-[800px] overflow-x-scroll mb-[20px]  bg-white table845:hidden">
          <TableHeader>
            <TableRow className="">
              <TableHead className="w-[20px]"></TableHead>
              <TableHead className="text-start border w-[180px] ">
                Пн 13/05
              </TableHead>
              <TableHead className="text-start border w-[180px]">
                Вт 14/05
              </TableHead>
              <TableHead className="text-start border w-[180px]">
                Ср 15/05
              </TableHead>
              <TableHead className="text-start border w-[180px]">
                Чт 16/05
              </TableHead>
              <TableHead className="text-start border w-[180px]">
                Пт 17/05
              </TableHead>
              <TableHead className="text-start border w-[180px]">
                Сб 18/05
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {lesson.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium border">
                  {item.time}
                </TableCell>
                <TableCell
                  className={`border ${item.Du ? 'bg-blue-300' : 'bg-white'}`}
                >
                  {item.Du}
                </TableCell>
                <TableCell
                  className={`border ${item.Se ? 'bg-yellow-300' : 'bg-white'}`}
                >
                  {item.Se}
                </TableCell>
                <TableCell
                  className={`border ${item.Chor ? 'bg-green-300' : 'bg-white'}`}
                >
                  {item.Chor}
                </TableCell>
                <TableCell
                  className={`border ${item.Pay ? 'bg-orange-300' : 'bg-white'}`}
                >
                  {item.Pay}
                </TableCell>
                <TableCell
                  className={`border ${item.Ju ? 'bg-red-300' : 'bg-white'}`}
                >
                  {item.Ju}
                </TableCell>
                <TableCell
                  className={`border ${item.Shan ? 'bg-purple-300' : 'bg-white'}`}
                >
                  {item.Shan}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <LessonTabs />
      </div>
    </section>
  );
}

export default LessonTable;
