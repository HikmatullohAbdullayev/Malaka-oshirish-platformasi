import React from "react";
import DownloadIcon from "../../../assets/icon/DownloadIcon";
import task_data from "../../../data/task_data";
import { Link } from "react-router-dom/dist";
import {Table,TableBody,TableCell,TableHead,TableHeader,TableRow,} from "@/components/ui/table";

function Tasks() {
  return (
    <section className="map">
      <div className="container max-w-[1440px] mx-auto  px-[20px]   ">
        <div className="flex justify-start items-center gap-[20px] py-[40px] mobile530:flex-col mobile530:items-start ">
          <div className=" ">
            <Link
              className="px-[5px] py-[7px] font-normal bg-white text-[24px] border border-[#ADA8A8] outline-blue-300 text-[#8D8484] hover:text-white  hover:bg-blue-300 hover:border-blue-400 active:border-blue-600 focus:border-blue-600  table900:text-[20px] "
              to="/"
            >
              Bosh saxifaga qaytish
            </Link>
          </div>

          <div className=" ">
            <Link
              className="px-[5px] py-[7px] font-normal bg-white text-[24px] border border-[#ADA8A8] outline-blue-300 text-[#8D8484] hover:text-white  hover:bg-blue-300 hover:border-blue-400 active:border-blue-600 focus:border-blue-600  table900:text-[20px] "
              to="/fanlar"
            >
              Ortga qaytish
            </Link>
          </div>
        </div>

        <div className="p-[17px] bg-white ">
          <Table className="min-w-full  border  border-gray-200">
            <TableHeader>
              <TableRow>
                <TableHead className="px-[18px]  text-[#8D8484] text-start w-[350px] py-[15px] font-normal text-[24px]   table900:text-[22px] mobile530:w-[40%]">
                  Fanlar
                </TableHead >
                <TableHead className="px-[18px]  text-[#8D8484] text-start w-[80px] py-[15px] font-normal text-[24px]   table900:text-[22px] mobile530:w-[40%]">Vazifa</TableHead>
                <TableHead className="px-[18px]  text-[#8D8484] text-start w-[210px] py-[15px] font-normal text-[20px]   table900:text-[22px] mobile530:w-[40%]">Topshirish muddati</TableHead>
                <TableHead className="px-[18px]  text-[#8D8484] text-start w-[170px] py-[15px] font-normal text-[24px]   table900:text-[22px] mobile530:w-[40%]">Fayl</TableHead>
                <TableHead className="px-[18px]  text-[#8D8484] text-start w-[450px] py-[15px] font-normal text-[24px]   table900:text-[22px] mobile530:w-[40%]">Izoh</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {task_data.map((item) => (
                <TableRow key={item.id} className="border  border-gray-200">
                  <TableCell className="px-[18px] py-[15px] text-[#8D8484] font-normal text-[24px]   text-wrap table900:text-[20px]">
                    {item.subject}
                  </TableCell>
                  <TableCell className="px-[18px]  flex   bg-[#C9EDFF]  items-center max-w-[200px]  my-[15px] rounded-lg py-[5px] font-normal text-[#8D8484] text-[24px]   table900:text-[20px]">
                    {" "}
                    <span className="mobile530:w-[20px]">
                      <DownloadIcon />
                    </span>{" "}
                    <p className="desktop:hidden">{item.task}</p>
                  </TableCell>
                  <TableCell className="px-[24px] py-[15px] text-[#8D8484] font-normal text-[24px]   table900:text-[20px]">
                    {item.date} 
                  </TableCell>
                  <TableCell className={`   ${item.status === "todo" ? " "  : item.status === "done" ?  "bg-[#C9EDFF] " : "bg-red-500 text-white"}   flex items-center border  max-w-[200px]  my-[15px] rounded-lg py-[5px] font-normal  text-[16px]   table900:text-[14px]`}>
                  <span className={`  ${item.status === "late" ? "hidden " : ""}`}>
                      <DownloadIcon />
                    </span>{" "} 
                    <p className="desktop:hidden">{item.file}</p>
                  </TableCell>
                  <TableCell className="px-[16px] py-[15px] text-[#8D8484] font-normal text-[24px]   table900:text-[14px]">
                    <p className=" px-[8px] py-[5px] border">{item.comment}</p>
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

export default Tasks;
