import React, { useState } from 'react';
import { Modal, Button, Select, DatePicker, Table, Space } from 'antd';

const MyComponent = () => {
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedPair, setSelectedPair] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [tableData, setTableData] = useState([]);

  const handleSave = () => {
    const newData = {
      key: tableData.length,
      date: selectedDate ? selectedDate.format('YYYY-MM-DD') : '',
      pair: selectedPair ? selectedPair.label : '',
      subject: selectedSubject ? selectedSubject.label : '',
      employee: selectedEmployee ? selectedEmployee.label : '',
      group: selectedGroup ? selectedGroup.label : '',
    };

    setTableData([...tableData, newData]);
    setOpen(false);
  };

  const columns = [
    { title: 'Date', dataIndex: 'date', key: 'date' },
    { title: 'Pair', dataIndex: 'pair', key: 'pair' },
    { title: 'Subject', dataIndex: 'subject', key: 'subject' },
    { title: 'Employee', dataIndex: 'employee', key: 'employee' },
    { title: 'Group', dataIndex: 'group', key: 'group' },
  ];

  return (
    <div className="pt-10 px-40">
      <Button
        className="bg-[#05CC19] text-[white]"
        onClick={() => setOpen(true)}
      >
        + Dars jadvali yaratish
      </Button>
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
        <div className="w-full h-[350px] flex flex-col gap-4">
          <div className="h-[60px] bg-[#0E7ED0] rounded-tl-lg rounded-tr-lg flex items-center ps-2">
            <p className="text-[18px] text-[white]">
              Guruh jadvali ma’lumotlari
            </p>
          </div>
          <svg
            width="1136"
            height="3"
            viewBox="0 0 1136 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="950" height="3" fill="#0E7ED0" />
          </svg>

          <div className="flex gap-2">
            <Space direction="vertical" size={12} width={400}>
              <label htmlFor="date-picker" className="text-gray-700">
                Select Date:
              </label>
              <DatePicker
                id="date-picker"
                className="w-[470px] h-[40px]"
                onChange={(date) => setSelectedDate(date)}
                renderExtraFooter={() => 'extra footer'}
              />
            </Space>
            <div className="flex flex-col justify-between w-[450px]">
              <label htmlFor="pair-select" className="text-gray-700">
                Juftlik
              </label>
              <Select
                id="pair-select"
                className="w-[450px] h-[40px]"
                showSearch
                style={{ width: 470 }}
                placeholder="Juftlikni tanlang"
                optionFilterProp="children"
                onChange={(value, option) => setSelectedPair(option)}
                filterOption={(input, option) =>
                  (option?.label ?? '').includes(input)
                }
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? '')
                    .toLowerCase()
                    .localeCompare((optionB?.label ?? '').toLowerCase())
                }
                dropdownRender={(menu) => (
                  <div className="max-h-40 overflow-auto">{menu}</div>
                )}
                options={[
                  { value: '1', label: '1.  08:00-09:20' },
                  { value: '2', label: '2.  09:30-10:50' },
                  { value: '3', label: '3.  11:00-12:20' },
                  { value: '4', label: '4.  13:00-14:20' },
                  { value: '5', label: '5.  14:30-15:50' },
                  { value: '6', label: '6.  16:00-17:20' },
                ]}
              />
            </div>
          </div>

          <div className="flex gap-2">
            <div className="flex flex-col justify-between w-[470px] gap-2">
              <label htmlFor="subject-select" className="text-gray-700">
                Fanlar
              </label>
              <Select
                id="subject-select"
                className="w-[450px] h-[40px]"
                showSearch
                style={{ width: 470 }}
                placeholder="Fanlarni tanlang"
                optionFilterProp="children"
                onChange={(value, option) => setSelectedSubject(option)}
                filterOption={(input, option) =>
                  (option?.label ?? '').includes(input)
                }
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? '')
                    .toLowerCase()
                    .localeCompare((optionB?.label ?? '').toLowerCase())
                }
                dropdownRender={(menu) => (
                  <div className="max-h-40 overflow-auto">{menu}</div>
                )}
                options={[
                  { value: '1', label: 'Metropoliten' },
                  { value: '2', label: 'Metropoliten' },
                  { value: '3', label: 'Tarix' },
                  { value: '4', label: 'Metropoliten' },
                  { value: '5', label: 'Resolved' },
                ]}
              />
            </div>
            <div className="flex flex-col justify-between w-[450px]">
              <label htmlFor="employee-select" className="text-gray-700">
                Xodimlar
              </label>
              <Select
                id="employee-select"
                className="w-[450px] h-[40px]"
                showSearch
                style={{ width: 470 }}
                placeholder="Xodimni Tanlang"
                optionFilterProp="children"
                onChange={(value, option) => setSelectedEmployee(option)}
                filterOption={(input, option) =>
                  (option?.label ?? '').includes(input)
                }
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? '')
                    .toLowerCase()
                    .localeCompare((optionB?.label ?? '').toLowerCase())
                }
                dropdownRender={(menu) => (
                  <div className="max-h-40 overflow-auto">{menu}</div>
                )}
                options={[
                  { value: '1', label: 'Jamshid' },
                  { value: '2', label: 'Davron' },
                  { value: '3', label: 'Botir' },
                  { value: '4', label: 'Temur' },
                  { value: '5', label: 'Munisa' },
                ]}
              />
            </div>
          </div>

          <div className="flex gap-2">
            <div className="flex flex-col justify-between w-[900px] gap-2">
              <label htmlFor="group-select" className="text-gray-700">
                Gurux
              </label>
              <Select
                id="group-select"
                className="w-[900px] h-[40px]"
                showSearch
                style={{ width: 948 }}
                placeholder="Gurux Tanlang"
                optionFilterProp="children"
                onChange={(value, option) => setSelectedGroup(option)}
                filterOption={(input, option) =>
                  (option?.label ?? '').includes(input)
                }
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? '')
                    .toLowerCase()
                    .localeCompare((optionB?.label ?? '').toLowerCase())
                }
                dropdownRender={(menu) => (
                  <div className="max-h-40 overflow-auto">{menu}</div>
                )}
                options={[
                  { value: '1', label: '1.  M-11-01-24' },
                  { value: '2', label: '2.  M-11-02-24' },
                  { value: '3', label: '3.  M-05-01-24' },
                  { value: '4', label: '4.  M-05-02-24' },
                ]}
              />
            </div>
          </div>
        </div>
      </Modal>

      <Table
        className="mt-[100px] w-[600px]"
        columns={columns}
        dataSource={tableData}
      />
    </div>
  );
};

export default MyComponent;
