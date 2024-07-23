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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Link } from 'react-router-dom';

import teacherTestQuiz_data from '../data/teacherTestQuiz_data';

function TestTeacherTabs(props) {
  const daysOfWeek = [
    'Test nomi',
    'Guruh',
    'Boshlanish sanasi',
    'Tugash sanasi',
  ];

  return (
    <div className="max-w-full flex-col mt-[50px]  items-center bg-white p-2 hidden mobile580:block">
      <Tabs defaultValue="Test nomi" className="w-full bg-white">
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
                {teacherTestQuiz_data.map((item) => (
                  <TableRow key={item.id} className="border border-gray-200">
                    {tab === 'Test nomi' && (
                      <TableCell className="px-4 py-2 border border-gray-200">
                        {item.testName}
                      </TableCell>
                    )}
                    {tab === 'Guruh' && (
                      <TableCell className="px-4 py-2 border border-gray-200">
                        {item.group}
                      </TableCell>
                    )}
                    {tab === 'Boshlanish sanasi' && (
                      <TableCell className="px-4 py-2 border border-gray-200">
                        {item.startDate}
                      </TableCell>
                    )}
                    {tab === 'Tugash sanasi' && (
                      <TableCell className="px-4 py-2 border border-gray-200 text-center">
                        {item.endDate}
                      </TableCell>
                    )}
                    {
                      <TableCell className="px-4 py-2 border w-[40px] border-gray-200 text-end ">
                        <span className="cursor-pointer ">
                          <Popover>
                            <PopoverTrigger>Toshirganlar</PopoverTrigger>
                            <PopoverContent className="bg-white mr-[70px] relative z-10 cursor-pointer">
                              <Link to="/submit-students">
                                Topshirgan talabalar
                              </Link>
                            </PopoverContent>
                          </Popover>
                        </span>
                      </TableCell>
                    }
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

export default TestTeacherTabs;
