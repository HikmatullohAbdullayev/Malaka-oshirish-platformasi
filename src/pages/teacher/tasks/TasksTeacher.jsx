import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import subjectTask from '../../../data/subjectTask';
import { Link } from 'react-router-dom';
import Modal from '../../../components/Modal';
import TaskTeacherTabs from '../../../components/TaskTeacherTabs';

function TasksTeacher(props) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="map">
      <div className="container max-w-[1440px] mx-auto  px-[20px]  ">
        <div className="flex gap-[105px] my-[50px] items-center table900:gap-[40px]  mobile768:my-[20px]  mobile550:flex-col  mobile550:gap-[20px] mobile550:items-start">
          <h2 className="text-[#8D8484] font-normal  text-[24px] ">
            Fan topshiriqlari
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
          <Table className="max-w-full  border text-center  bg-white  border-gray-200  mobil680:hidden">
            <TableHeader className="">
              <TableRow className="text-center ">
                <TableHead className="text-center  px-[12px] py-[8px]  font-normal text-[21px] border border-[#ADA8A8]  table900:text-[18px] ">
                  Fanlar
                </TableHead>
                <TableHead className="text-center  px-[12px] py-[8px] w-[100px] font-normal text-[21px] border border-[#ADA8A8] table900:text-[18px] ">
                  Guruh
                </TableHead>
                <TableHead className="text-center  px-[12px] py-[8px] font-normal text-[21px] border border-[#ADA8A8] table900:text-[18px] ">
                  Mashg'ulotlar
                </TableHead>
                <TableHead className="  px-[12px] py-[8px] text-center  font-normal text-[21px] border border-[#ADA8A8]  table900:text-[18px] ">
                  Topshiriqlar
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {subjectTask.map((item) => (
                <TableRow key={item.id} className="border border-gray-200">
                  <TableCell className="px-[12px] py-[8px]  font-normal text-[20px] border border-[#ADA8A8] table900:text-[18px] ">
                    <Link to="/teacher-topshirganlar-royhati">
                      {item.subject}
                    </Link>
                  </TableCell>
                  <TableCell className="px-[12px] py-[8px]  text-nowrap font-normal text-[20px] border border-[#ADA8A8] table900:text-[16px]">
                    {item.group}
                  </TableCell>
                  <TableCell className="px-[12px] py-[8px]  font-normal text-[20px] border border-[#ADA8A8] table900:text-[18px] ">
                    {item.activity}
                  </TableCell>
                  <TableCell className="px-[12px] py-[8px]  font-normal text-[20px] border border-[#ADA8A8] text-center table900:text-[18px] ">
                    <button
                      onClick={toggleModal}
                      className="py-[12px] px-[20px] bg-white inline-block  border-blue-500 border rounded-sm"
                    >
                      {item.assignments}
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <TaskTeacherTabs subjectTask={subjectTask} toggleModal={toggleModal} />
      </div>

      {modal && <Modal toggleModal={toggleModal} />}
    </div>
  );
}

export default TasksTeacher;
