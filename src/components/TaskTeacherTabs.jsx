import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Link } from 'react-router-dom';

import subjectTask from '../data/subjectTask';

function TeacherLessonTab({ toggleModal }) {
  const daysOfWeek = ['Fanlar', 'Guruh', "Mashg'ulot", 'Topshiriq'];

  return (
    <div className="max-w-full flex-col items-center bg-white p-2 hidden mobil680:block">
      <Tabs defaultValue="Fanlar" className="w-full bg-white">
        <TabsList className="flex justify-center gap-2 mb-4 px-4 overflow-x-scroll">
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
                  <TableHead className="px-4 py-2 border font-normal text-lg border-gray-200">
                    {tab}
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {subjectTask.map((item) => (
                  <TableRow key={item.id} className="border border-gray-200">
                    {tab === 'Fanlar' && (
                      <TableCell className="px-4 py-2 border border-gray-200">
                        <Link to="/teacher-topshirganlar-royhati">
                          {item.subject}
                        </Link>
                      </TableCell>
                    )}
                    {tab === 'Guruh' && (
                      <TableCell className="px-4 py-2 border border-gray-200">
                        {item.group}
                      </TableCell>
                    )}
                    {tab === "Mashg'ulot" && (
                      <TableCell className="px-4 py-2 border border-gray-200">
                        {item.activity}
                      </TableCell>
                    )}
                    {tab === 'Topshiriq' && (
                      <TableCell className="px-4 py-2 border border-gray-200 text-center">
                        <button
                          onClick={toggleModal}
                          className="py-2 px-4 bg-white border border-blue-500 rounded"
                        >
                          {item.assignments}
                        </button>
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

export default TeacherLessonTab;
