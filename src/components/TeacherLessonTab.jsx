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

import lesson_data from '../data/lesson_data.js';

function TeacherLessonTab(props) {
  const daysOfWeek = ['Du', 'Se', 'Chor', 'Pay', 'Ju', 'Shan'];

  return (
    <div className="max-w-full  flex-col items-center bg-white p-2 hidden table845:flex">
      <Tabs defaultValue="Du" className="w-full bg-white ">
        <TabsList className="flex justify-center gap-[5px] mb-4 px-[15px] overflow-x-scroll mobile450:justify-start ">
          {daysOfWeek.map((day) => (
            <TabsTrigger
              key={day}
              value={day}
              className="px-2 py-1 border rounded text-center  text-white bg-blue-400"
            >
              {day}
            </TabsTrigger>
          ))}
        </TabsList>

        {daysOfWeek.map((day) => (
          <TabsContent key={day} value={day} className="w-full">
            <Table className="min-w-full border border-gray-200">
              <TableHeader>
                <TableRow>
                  <TableHead className="px-4 py-2 border w-[80px] border-gray-200">
                    Vaqti
                  </TableHead>
                  <TableHead className="text-start px-4 py-2 border border-gray-200">
                    Fan
                  </TableHead>
                </TableRow>
              </TableHeader>

              {lesson_data.map((lesson) => (
                <TableBody key={lesson.id} className="border border-gray-200">
                  <TableRow>
                    <TableCell className="px-4 py-2 border border-gray-200 font-medium">
                      {lesson.time}
                    </TableCell>

                    <TableCell className="px-4 py-2 border border-gray-200 bg-slate-50">
                      <p
                        className={` 
                      ${lesson.Du ? 'text-green-400' : ''}
                      ${lesson.Se ? 'text-green-400' : ''}
                      ${lesson.Chor ? 'text-green-400' : ''}
                      ${lesson.Pay ? 'text-green-400' : ''}
                      ${lesson.Ju ? 'text-green-400' : ''}
                      ${lesson.Shan ? 'text-green-400' : ''}

                      `}
                      >
                        {lesson[day]}
                      </p>
                    </TableCell>
                  </TableRow>
                </TableBody>
              ))}
            </Table>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

export default TeacherLessonTab;
