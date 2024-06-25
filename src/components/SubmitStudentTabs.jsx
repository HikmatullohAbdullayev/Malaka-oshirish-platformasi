import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import submitStudent_data from '../data/submitStudent_data';

function SubmitStudentTabs(props) {
  const daysOfWeek = ['Talaba', 'Topshirgan vaqti', 'Guruh', 'Ball'];

  return (
    <div className="max-w-full flex-col mt-[50px]  items-center bg-white p-2 hidden table950:block">
      <Tabs defaultValue="Talaba" className="w-full bg-white">
        <TabsList className="flex justify-start  gap-2 mb-4 px-[20px] overflow-x-scroll">
          {daysOfWeek.map((tab) => (
            <TabsTrigger
              key={tab}
              value={tab}
              className="px-2 py-1 border rounded text-center text-white bg-blue-400"
            >
              {tab}
            </TabsTrigger>
          ))}
        </TabsList>

        {daysOfWeek.map((tab) => (
          <TabsContent key={tab} value={tab} className="w-full ">
            <Table className="min-w-full border border-gray-200">
              <TableHeader>
                <TableRow>
                  <TableHead className="px-[20px] py-2 border font-normal text-lg border-gray-200">
                    {tab}
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {submitStudent_data.map((item) => (
                  <TableRow
                    key={item.id}
                    className="border text-center border-gray-200"
                  >
                    <TableCell className="px-4 w-[30px] py-2 border border-gray-200 text-center">
                      {item.id}
                    </TableCell>

                    {tab === 'Talaba' && (
                      <TableCell className="px-4 py-2 border border-gray-200">
                        {item.name}
                      </TableCell>
                    )}
                    {tab === 'Topshirgan vaqti' && (
                      <TableCell className="px-4 py-2 border border-gray-200">
                        {item.submissionTime}
                      </TableCell>
                    )}
                    {tab === 'Guruh' && (
                      <TableCell className="px-4 py-2 border border-gray-200">
                        {item.group}
                      </TableCell>
                    )}
                    {tab === 'Ball' && (
                      <TableCell
                        className={`inline-block p-[5px] w-[80px] rounded-sm text-center  ${item.status === 'done' ? 'bg-green-500' : 'bg-red-500'} `}
                      >
                        {item.score}
                      </TableCell>
                    )}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

export default SubmitStudentTabs;
