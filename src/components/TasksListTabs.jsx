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

import teacherTasksList_data from '../data/teacherTasksList_data';

function TasksListTabs(props) {
  const daysOfWeek = ['Fan', 'Topshiriqlar', 'Muddat'];

  return (
    <div className="max-w-full flex-col mt-[50px]  items-center bg-white p-2 hidden mobile530:block">
      <Tabs defaultValue="Fan" className="w-full bg-white">
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
                {teacherTasksList_data.map((item) => (
                  <TableRow
                    key={item.id}
                    className="border text-center border-gray-200"
                  >
                    {tab === 'Fan' && (
                      <TableCell className="px-4 py-2 border border-gray-200">
                        {item.subject}
                      </TableCell>
                    )}
                    {tab === 'Topshiriqlar' && (
                      <TableCell className="px-4 py-2 border border-gray-200">
                        {item.task}
                      </TableCell>
                    )}
                    {tab === 'Muddat' && (
                      <TableCell className="px-4 py-2 border border-gray-200">
                        {item.dueDate}
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

export default TasksListTabs;
