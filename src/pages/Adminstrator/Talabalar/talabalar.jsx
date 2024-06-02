import React, { useState } from 'react';
import { Modal, Button, Input, Table } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const MyComponent = () => {
  const [open, setOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [formData, setFormData] = useState({
    fio: '',
    specialization: '',
    studyYear: '',
    idPassport: '',
    educationType: '',
    birthPlace: '',
    workplace: '',
    pinfl: '',
    group: '',
  });

  const [tableData, setTableData] = useState([]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSave = () => {
    setTableData([...tableData, { ...formData, key: tableData.length }]);
    setOpen(false);
    setFormData({
      fio: '',
      specialization: '',
      studyYear: '',
      idPassport: '',
      educationType: '',
      birthPlace: '',
      workplace: '',
      pinfl: '',
      group: '',
    });
    setShowSearch(true);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredData = tableData.filter((item) => {
    return Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const columns = [
    {
      title: '#',
      dataIndex: 'order',
      key: 'order',
      render: (text, record, index) => index + 1,
    },
    { title: 'F.I.O', dataIndex: 'fio', key: 'fio' },
    { title: 'Mutaxasislik', dataIndex: 'specialization', key: 'specialization' },
    { title: "O'quv yili", dataIndex: 'studyYear', key: 'studyYear' },
    { title: 'ID/Passport', dataIndex: 'idPassport', key: 'idPassport' },
    { title: 'Talimi turi', dataIndex: 'educationType', key: 'educationType' },
    { title: 'Tug\'ilgan joyi', dataIndex: 'birthPlace', key: 'birthPlace' },
    { title: 'Ish joyi', dataIndex: 'workplace', key: 'workplace' },
    { title: 'JSHSHIR PINFL', dataIndex: 'pinfl', key: 'pinfl' },
    { title: 'Guruxi', dataIndex: 'group', key: 'group' },
  ];

  return (
    <div className='pt-10 px-40'>
      <Button className='bg-[#05CC19] text-[white] mr-2' onClick={() => setOpen(true)}>
       + Talaba qo'shish
      </Button>
      {showSearch && (
        
          <Input
          
            placeholder="F.I.O"
            value={searchQuery}
            onChange={handleSearchChange}
            className='w-[140px] h-[35px] tex-[black]'
            prefix={<SearchOutlined />}
          />
       
      )}
      <Modal
        centered
        open={open}
        onCancel={() => setOpen(false)}
        width={1000}
        closable={false}
        bodyStyle={{ padding: 0 }}
        footer={[
          <Button key="cancel" onClick={() => setOpen(false)}>
            Cancel
          </Button>,
          <Button key="save" type="primary" onClick={handleSave}>
            Save
          </Button>,
        ]}
      >
        <div className='w-full h-[350px] flex flex-col gap-4'>
          <div className='h-[60px] bg-[#0E7ED0] rounded-tl-lg rounded-tr-lg flex items-center ps-2'>
            <p className='text-[18px] text-[white]'>Guruh jadvali ma’lumotlari</p>
          </div>
          <svg width="1050" height="3" viewBox="0 0 1136 3" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="1050" height="3" fill="#0E7ED0" />
          </svg>

          <div className='flex gap-6'>
            <div className='flex flex-col gap-4'>
              <label htmlFor="fio" className="text-gray-700">
                F.I.O
              </label>
              <Input
                id="fio"
                className='w-[300px] h-[40px]'
                value={formData.fio}
                onChange={handleInputChange}
                placeholder="F.I.O kiriting"
              />
            </div>
            <div className='flex flex-col gap-4'>
              <label htmlFor="specialization" className="text-gray-700">
                Mutaxasislik
              </label>
              <Input
                id="specialization"
                className='w-[300px] h-[40px]'
                value={formData.specialization}
                onChange={handleInputChange}
                placeholder="Mutaxasislik kiriting"
              />
            </div>
            <div className='flex flex-col gap-4'>
              <label htmlFor="studyYear" className="text-gray-700">
              O'quv yili
              </label>
              <Input
                id="studyYear"
                className='w-[300px] h-[40px]'
                value={formData.studyYear}
                onChange={handleInputChange}
                placeholder="O'quv yilini kiriting"
              />
            </div>
          </div>
          <div className='flex gap-6'>
            <div className='flex flex-col gap-4'>
              <label htmlFor="idPassport" className="text-gray-700">
                ID/Passport(seriya raqami)
              </label>
              <Input
                id="idPassport"
                className='w-[300px] h-[40px]'
                value={formData.idPassport}
                onChange={handleInputChange}
                placeholder="ID/Passport(seriya raqami) kiriting"
              />
            </div>
            <div className='flex flex-col gap-4'>
              <label htmlFor="educationType" className="text-gray-700">
                Talimi turi
              </label>
              <Input
                id="educationType"
                className='w-[300px] h-[40px]'
                value={formData.educationType}
                onChange={handleInputChange}
                placeholder="Talim turi kiriting"
              />
            </div>
            <div className='flex flex-col gap-4'>
              <label htmlFor="birthPlace" className="text-gray-700">
              Tug'ilgan joyi
              </label>
              <Input
                id="birthPlace"
                className='w-[300px] h-[40px]'
                value={formData.birthPlace}
                onChange={handleInputChange}
                placeholder="Tug'ilgan joyini kiriting"
              />
            </div>
          </div>
          <div className='flex gap-6'>
            <div className='flex flex-col gap-4'>
              <label htmlFor="workplace" className="text-gray-700">
                Ish joyi
              </label>
              <Input 
                id="workplace"
                className='w-[300px] h-[40px]'
                value={formData.workplace}
                onChange={handleInputChange}
                placeholder="Ish joyini kiriting"
              />
            </div>
            <div className='flex flex-col gap-4'>
              <label htmlFor="pinfl" className="text-gray-700">
              JSHSHIR PINFL
              </label>
              <Input
                id="pinfl"
                className='w-[300px] h-[40px]'
                value={formData.pinfl}
                onChange={handleInputChange}
                placeholder="JSHSHIR PINFL kiriting"
              />
            </div>
            <div className='flex flex-col gap-4'>
              <label htmlFor="group" className="text-gray-700">
               Guruxi
              </label>
              <Input
                id="group"
                className='w-[300px] h-[40px]'
                value={formData.group}
                onChange={handleInputChange}
                placeholder="Guruxini kiriting"
              />
            </div>
          </div>
        </div>
      </Modal>
      <Table columns={columns} dataSource={filteredData} />
    </div>
  );
};

export default MyComponent;
