import React from 'react';
import submitStudent_data from '../../../data/submitStudent_data';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

function SubmitStudent(props) {
  return (
    <section className="map">
      <div className="container max-w-[1440px] mx-auto px-[20px] pt-[50px]">
        <div className="p-[17px] bg-white ">
          <Table className="min-w-full  border  border-gray-200">
            <TableHeader>
              <TableRow>
                <TableHead className="px-[18px] py-[15px] w-[30px] font-normal text-[24px] border border-[#ADA8A8] text-[#8D8484] table900:text-[22px]">
                  #
                </TableHead>
                <TableHead className="px-[18px] py-[15px] font-normal text-[24px] border border-[#ADA8A8] text-[#8D8484] table900:text-[22px]">
                  Talaba
                </TableHead>
                <TableHead className="px-[18px] py-[15px] font-normal text-[24px] border border-[#ADA8A8] text-[#8D8484] table900:text-[22px]">
                  Topshirgan vaqti
                </TableHead>
                <TableHead className="px-[18px] py-[15px] font-normal text-[24px] border border-[#ADA8A8] text-[#8D8484] table900:text-[22px]">
                  Guruh
                </TableHead>
                <TableHead className="px-[18px] py-[15px] font-normal text-[24px] border border-[#ADA8A8] text-[#8D8484] table900:text-[22px]">
                  Ball
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {submitStudent_data.map((item) => (
                <TableRow key={item.id} className="border border-gray-200">
                  <TableCell className="px-[18px] py-[15px] text-[#8D8484] font-normal text-[24px] border border-[#ADA8A8] table900:text-[20px]">
                    {item.id}
                  </TableCell>
                  <TableCell className="px-[18px] py-[15px] text-[#8D8484] font-normal text-[24px] border border-[#ADA8A8] table900:text-[20px]">
                    {' '}
                    {item.name}
                  </TableCell>
                  <TableCell className="px-[18px] py-[15px] text-[#8D8484] font-normal text-[24px] border border-[#ADA8A8] table900:text-[20px]">
                    {' '}
                    {item.submissionTime}
                  </TableCell>
                  <TableCell className="px-[18px] py-[15px] font-normal text-[24px] border border-[#ADA8A8] table900:text-[20px]">
                    {' '}
                    {item.group}
                  </TableCell>
                  <TableCell
                    className={`px-[18px] py-[15px] text-white font-normal text-[24px] border border-[#ADA8A8] table900:text-[20px]`}
                  >
                    {' '}
                    <p
                      className={`inline-block p-[5px] w-[80px] rounded-sm text-center  ${item.status === 'done' ? 'bg-green-500' : 'bg-red-500'} `}
                    >
                      {item.score}
                    </p>
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

export default SubmitStudent;
