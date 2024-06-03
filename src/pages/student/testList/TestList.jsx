import React from "react";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import testList_data from "../../../data/testList_data";
import DotsIcon from "../../../assets/icon/DotsIcon";

function TestList(props) {
  return (
    <section className="map">
      <div className="container max-w-[1440px] mx-auto px-[20px] pt-[50px]">
        <div className="flex gap-[185px] items-center table900:gap-[50px] mobile550:flex-col  mobile550:gap-[20px] mobile550:items-start">
          <h2 className="text-[#8D8484] font-normal  text-[24px] ">
            Yakuniy test
          </h2>

          <div className=" ">
            <Link
              className="px-[5px] text-[#8D8484] py-[7px] font-normal bg-white text-[24px] border border-[#ADA8A8] outline-blue-300 hover:bg-blue-500 hover:border-blue-500 hover:text-white active:border-blue-600 focus:border-blue-600  table900:text-[20px] "
              to="/"
            >
              Bosh saxifaga qaytish
            </Link>
          </div>
        </div>

        <Table className="bg-white mt-[50px]">
          <TableHeader>
            <TableRow>
              <TableHead className="border">Test nomi</TableHead>
              <TableHead className="border">Boshlanish sanasi</TableHead>
              <TableHead className="border">Tugash sanasi</TableHead>
              <TableHead className="border">To'plangan ball</TableHead>
              <TableHead className="border w-[40px] "> </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {testList_data.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="border"><Link to="/testlar/yakuniy-test">{item.testName}</Link></TableCell>
                <TableCell className="border">{item.startDate}</TableCell>
                <TableCell className="border">{item.endDate}</TableCell>
                <TableCell className="border">{item.score}</TableCell>
                <TableCell className="border ">
                  {" "}
                  <span className="cursor-pointer">
                    <Popover>
                      <PopoverTrigger>
                        <DotsIcon />
                      </PopoverTrigger>
                      <PopoverContent className="bg-white mr-[70px] relative z-10 cursor-pointer"><Link to="/">Sertifikat yuklab olish</Link></PopoverContent>
                    </Popover>
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}

export default TestList;
