import React from 'react';
import {  Select } from "@/components/ui/select"
import { Textarea, } from "@/components/ui/textarea"
import { Label  } from "@/components/ui/label"
import { Button  } from "@/components/ui/button"
import {  Input} from "@/components/ui/input"
function Modal({toggleModal }) {
    return (
        <div>
          
            <div className="">
              <div className="modal-content">
                <button className="close" onClick={toggleModal}>close;</button>
                <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Muddati</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Muddat</label>
        <Input type="date" className="mt-1 w-full" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Guruh</label>
        <Select className="mt-1 w-full">
          <option value="" disabled>Guruh tanlang</option>
          <option value="group1">Guruh 1</option>
          <option value="group2">Guruh 2</option>
        </Select>
      </div>
      <div className="mb-4">
        <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="picture" className="block text-gray-700">Topshiriqni yuklash</Label>
      <Input id="picture" type="file" />
    </div>
        <div className="flex items-center justify-center">
          <Button className="bg-blue-500 text-white rounded-full p-4">
            <i className="fa fa-download text-2xl"></i>
          </Button>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Izoh</label>
        <Textarea className="mt-1 w-full" placeholder="Izoh..." />
      </div>
      <Button className="bg-blue-500 text-white w-full">Saqlash</Button>
    </div>
              </div>
            </div>
        </div>
      );
      
}

export default Modal;