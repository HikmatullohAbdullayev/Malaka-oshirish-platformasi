import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableBody,
} from '@/components/ui/table'; // Adjust the import path according to your project structure

function Serfetikat() {
  return (
    <section className=" map min-h-screen flex flex-col items-center justify-center bg-blue-50 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl w-full">
        <h2 className="text-2xl font-bold mb-4">Sertifikat</h2>
        <div className="overflow-x-auto">
          <Table className="min-w-full bg-white border border-gray-300">
            <TableHeader>
              <TableRow>
                <TableCell className="px-4 py-2 border border-gray-300 font-bold">
                  FIO
                </TableCell>
                <TableCell className="px-4 py-2 border border-gray-300 font-bold">
                  №
                </TableCell>
                <TableCell className="px-4 py-2 border border-gray-300 font-bold">
                  O'qish davri
                </TableCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="px-4 py-2 border border-gray-300">
                  Mahmanazarov Behro'z Yusuf o'g'li
                </TableCell>
                <TableCell className="px-4 py-2 border border-gray-300">
                  MO № 00000003
                </TableCell>
                <TableCell className="px-4 py-2 border border-gray-300">
                  2023.05.15/2024.05.15
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div className="mt-6 flex justify-end">
          <Button className="bg-blue-500 text-white py-2 px-4 rounded">
            Yuklab olish
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Serfetikat;
