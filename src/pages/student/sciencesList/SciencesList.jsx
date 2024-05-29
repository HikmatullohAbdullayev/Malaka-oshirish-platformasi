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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function SciencesList() {
  return (
    <section className="map">
      <div className="  container max-w-[1440px] mx-auto  px-[20px]  ">
        <div className="flex justify-between items-center gap-[20px] py-[40px] mobile530:flex-col mobile530:items-start ">
          <div className=" ">
            <Link
              className="px-[5px] text-[#8D8484] py-[7px] font-normal bg-white text-[24px] border border-[#ADA8A8] outline-blue-300 hover:bg-blue-300 hover:border-blue-400 hover:text-white active:border-blue-600 focus:border-blue-600  table900:text-[20px] "
              to="/"
            >
              Bosh saxifaga qaytish
            </Link>
          </div>

          <Select  name="date"
            id="date" className="" >
            <SelectTrigger className="px-[8px] w-[200px] py-[9px] font-normal bg-white text-[24px] border cursor-pointer text-[#8D8484] border-[#ADA8A8] outline-blue-300 hover:border-blue-400   active:border-blue-600 focus:border-blue-600  table900:text-[20px]">
              <SelectValue placeholder="Sana" />
            </SelectTrigger>
            <SelectContent className="px-[5px] py-[7px] font-normal bg-white text-[24px] border cursor-pointer text-[#8D8484] ">
              <SelectItem value="2023-2024 yil">2023-2024 yil</SelectItem>
              <SelectItem value="2022-2023 yil">2022-2023 yil</SelectItem>
              <SelectItem value="2021-2022 yil">2021-2022 yil</SelectItem>
              <SelectItem value="2020-2021 yil">2020-2021 yil</SelectItem>
              <SelectItem value="2019-2020 yil">2019-2020 yil</SelectItem>
            </SelectContent>
          </Select>
          
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
