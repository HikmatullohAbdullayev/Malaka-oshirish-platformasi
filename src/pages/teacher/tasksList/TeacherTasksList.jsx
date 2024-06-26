import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import teacherTasksList_data from '../../../data/teacherTasksList_data';
import { Link } from 'react-router-dom';
import TasksListTabs from '../../../components/TasksListTabs';

function TeacherTasksList(props) {
  return (
    <div className="map">
      <div className="container max-w-[1440px] mx-auto  px-[20px]  ">
        <div className="flex gap-[105px] my-[50px] items-center table900:gap-[40px]  mobile768:my-[20px]  mobile550:flex-col  mobile550:gap-[20px] mobile550:items-start">
          <h2 className="text-[#8D8484] font-normal  text-[24px] ">
            Topshiriqlar royxati
          </h2>

          <div className=" ">
            <Link
              className="px-[5px] text-[#8D8484] py-[7px] font-normal bg-white text-[24px] border border-[#ADA8A8] outline-blue-300 hover:bg-blue-500 hover:border-blue-500 hover:text-white active:border-blue-600 focus:border-blue-600  table900:text-[20px] "
              to="/HomeTeacher"
            >
              Bosh saxifaga qaytish
            </Link>
          </div>
        </div>
        <div className="px-[20px] py-[15px] bg-white">
          <Table className="max-w-full  border text-center  bg-white  border-gray-200 mobile530:hidden">
            <TableHeader className="">
              <TableRow className="text-center ">
                <TableHead className="text-center  px-[12px] py-[8px]  font-normal text-[21px] border border-[#ADA8A8]  table900:text-[18px] ">
                  Fan
                </TableHead>
                <TableHead className="text-center  px-[12px] py-[8px] font-normal text-[21px] border border-[#ADA8A8] table900:text-[18px] ">
                  Topshiriqlar
                </TableHead>
                <TableHead className="text-center  px-[12px] py-[8px] font-normal text-[21px] border border-[#ADA8A8] table900:text-[18px] ">
                  Muddat
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {teacherTasksList_data.map((item) => (
                <TableRow key={item.id} className="border border-gray-200">
                  <TableCell className="px-[12px] py-[8px]  font-normal text-[20px] border border-[#ADA8A8] table900:text-[18px] ">
                    <Link to="/">{item.subject}</Link>
                  </TableCell>
                  <TableCell className="px-[12px] py-[8px]   font-normal text-[20px] border border-[#ADA8A8] table900:text-[16px]">
                    {item.task}
                  </TableCell>
                  <TableCell className="px-[12px] py-[8px]  font-normal text-[20px] border border-[#ADA8A8] table900:text-[18px] ">
                    {item.dueDate}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {/* tab  */}
          <TasksListTabs />
        </div>
      </div>
    </div>
  );
}

export default TeacherTasksList;
