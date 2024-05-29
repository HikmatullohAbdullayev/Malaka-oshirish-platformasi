
import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { DatePicker, Space } from 'antd';
const { RangePicker } = DatePicker;

const Dars = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className='pt-10 px-40'>
      <Button  className='bg-[#05CC19] text-[white]' onClick={() => setOpen(true)}>
      + Dars jadvali yaratish
      </Button>
      <Modal
      
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
        closable={false}
        bodyStyle={{ padding: 0 }}
      >
        <div className='w-[full] h-[350px] flex flex-col gap-4'>
          <div className='h-[60px] bg-[#0E7ED0] rounded-tl-lg rounded-tr-lg flex items-center ps-2'>
            <p className='text-[18px] text-[white]'>Guruh jadvali ma’lumotlari</p>
          </div>
          <svg width="1136" height="3" viewBox="0 0 1136 3" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="950" height="3" fill="#0E7ED0"/>
          </svg>

          <div className='flex'>
          
          <Space direction="vertical" size={12} width={400}>
              <label htmlFor="date-picker" className="text-gray-700">
            Select Date:
          </label>
            <DatePicker className='w-[450px] h-[40px]' renderExtraFooter={() => 'extra footer'}  />
          </Space>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default Dars;
