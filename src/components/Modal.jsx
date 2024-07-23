import React from 'react';
import { Select } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import ButtomDownIcon from '../assets/icon/ButtomDownIcon';
import CloseIcon from '../assets/icon/CloseIcon';
function Modal({ toggleModal }) {
  return (
    <div className=" ">
      <div className="absolute top-[50%]  left-[50%] px-[50px] mt-[20px] max-w-[850px] w-full translate-x-[-50%] translate-y-[-50%] table:mt-[140px] ">
        <div className="modal-content relative">
          <button
            className="absolute top-[2%]  right-[2%]"
            onClick={toggleModal}
          >
            <CloseIcon />
          </button>
          <div className=" mx-auto max-w-[800px] w-full bg-white p-6 rounded-lg shadow-md">
            <h2 className=" font-semibold mb-4 text-[22px]">Muddati</h2>
            <div className="mb-4">
              <Label
                htmlFor="date"
                className="block text-gray-700 w-full text-[18px] "
              >
                Muddat
              </Label>
              <Input
                type="date"
                id="date"
                className="mt-[10px] w-full border border-black"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold   text-[18px] ">
                Guruh
              </label>
              <select className=" w-full border border-black mt-[10px]">
                <option value="" defaultValue="Guruh tanlang">
                  Guruh tanlang
                </option>
                <option value="group1">Guruh 1</option>
                <option value="group2">Guruh 2</option>
              </select>
            </div>
            <div className="mb-4">
              <h3 className=" font-semibold  text-[18px] ">
                Topshiriqni yuklash
              </h3>
              <div className="grid w-full items-center gap-2 border mt-[10px] border-black ">
                <Label htmlFor="picture" className="block text-gray-700">
                  <div className="flex items-center justify-center cursor-pointer p-[10px]">
                    <ButtomDownIcon />
                  </div>
                </Label>
                <Input id="picture" type="file" />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold  text-[18px] ">
                Izoh
              </label>
              <Textarea className="mt-[10px] w-full" placeholder="Izoh..." />
            </div>
            <Button className="bg-blue-500 text-white w-full">Saqlash</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
