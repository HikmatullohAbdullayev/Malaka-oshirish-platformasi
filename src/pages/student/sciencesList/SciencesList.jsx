import React from "react";
import { Link } from "react-router-dom/dist";
import "../../../hikmatulloh.css";
import subject_data from "../../../data/subject_data";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import SellectDate from "../../../components/SellectDate";


function SciencesList() {
  return (
    <section className="map">
      <div className="  container max-w-[1440px] mx-auto  px-[20px]  ">
        <div className="flex justify-between items-center gap-[20px] py-[40px] mobile530:flex-col mobile530:items-start ">
          <div className=" ">
            <Link
              className="px-[5px] text-[#8D8484] py-[7px] font-normal bg-white text-[24px] border border-[#ADA8A8] outline-blue-300 hover:bg-blue-500 hover:border-blue-500 hover:text-white active:border-blue-600 focus:border-blue-600  table900:text-[20px] "
              to="/"
            >
              Bosh saxifaga qaytish
            </Link>
          </div>

          <SellectDate/>
          
        </div>

        <div className="p-[17px] bg-white ">
          <Table className="min-w-full  border  border-gray-200">
            <TableHeader>
              <TableRow>
                <TableHead className="px-[18px] py-[15px] font-normal text-[24px] border border-[#ADA8A8] text-[#8D8484] table900:text-[22px]">
                  Fanlar
                </TableHead>
                <TableHead className="px-[18px] py-[15px] font-normal text-[24px] border border-[#ADA8A8] text-[#8D8484] table900:text-[22px]">
                  Status
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {subject_data.map((item) => (
                <TableRow key={item.id} className="border border-gray-200">
                  <TableCell className="px-[18px] py-[15px] text-[#8D8484] font-normal text-[24px] border border-[#ADA8A8] table900:text-[20px]">
                    <Link to="vazifalar">{item.subject}</Link>
                  </TableCell>
                  <TableCell className="px-[18px] py-[15px] text-[#8D8484] font-normal text-[24px] border border-[#ADA8A8] table900:text-[20px]">
                    {" "}
                    {item.teacher}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
}

export default SciencesList;
