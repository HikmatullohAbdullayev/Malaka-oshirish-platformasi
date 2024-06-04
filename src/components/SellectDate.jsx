import React, { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

function SellectDate(props) {
  const [selectedYear, setSelectedYear] = useState('');
  return (
    <div>
      <div className="mobile530:hidden">
        <Select name="date" id="date" className=" ">
          <SelectTrigger className="px-[8px] w-[200px] py-[9px] font-normal bg-white text-[24px] border cursor-pointer text-[#8D8484] border-[#ADA8A8] outline-blue-300 hover:border-blue-400   active:border-blue-600 focus:border-blue-600  table900:text-[20px]">
            <SelectValue placeholder="Sana" />
          </SelectTrigger>
          <SelectContent className="px-[5px] py-[7px] font-normal bg-white text-[24px] border cursor-pointer text-[#8D8484] ">
            <SelectItem value="2023-2024 yil">2023-2024 yil</SelectItem>
            <SelectItem value="2022-2023 yil">2022-2023 yil</SelectItem>
            <SelectItem value="2021-2022 yil">2021-2022 yil</SelectItem>
            <SelectItem value="2020-2021 yil">2020-2021 yil</SelectItem>
            <SelectItem value="2019-2020 yil">2019-2020 yil</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <select
        name="date"
        id="date"
        className="hidden  w-52 px-3 py-2 bg-white border border-gray-400 text-xl text-gray-600 focus:outline-none focus:border-blue-600 mobile530:block"
        value={selectedYear}
        onChange={(e) => setSelectedYear(e.target.value)}
      >
        <option value="" disabled hidden>
          Sana
        </option>
        <option value="2023-2024 yil">2023-2024 yil</option>
        <option value="2022-2023 yil">2022-2023 yil</option>
        <option value="2021-2022 yil">2021-2022 yil</option>
        <option value="2020-2021 yil">2020-2021 yil</option>
        <option value="2019-2020 yil">2019-2020 yil</option>
      </select>
    </div>
  );
}

export default SellectDate;
