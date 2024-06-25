import React, { useState } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import './teacher__add.css';

const Teacher__Add = () => {
  const [teacher, setteacher] = useState(false);
  return (
    <div className="teacher__add pt-[50px] pl-[40px]">
      <div className="container">
        <div className="teacher__add__wrapper">
          <button
            onClick={(e) => setteacher(true)}
            className="teacher__add__btn border-none w-[200px] rounded-[8px] h-[40px] bg-[#05CC19] text-white"
          >
            + O'qituvchi qo'shish
          </button>
        </div>
      </div>
      {teacher ? (
        <div className="teacher__module flex    fixed ml-[250px]    justify-center w-[800px] mt-[40px] ">
          <div className="module__teacher  border   bg-[white] rounded-xl ">
            <div className="teacher__module__title flex flex-col gap-[30px]">
              <p className="   h-[55px] flex items-center pl-[43px]  text-[#FFFF] bg-[#0E7ED0]">
                O'qituvchi
              </p>
              <span className="w-[730px] flex items-center justify-center text-center m-auto bg-[#0E7ED0] h-0.5"></span>
            </div>
            <form className="teacher__form flex flex-col gap-[30px]  pl-[58px] py-[23px] pr-[45px]">
              <div className="form__input__wrapper__teacher gap-[20px] flex flex-wrap">
                <div className="input__wrapper__teacher flex flex-col gap-[10px]">
                  <span className="">FIO</span>
                  <input
                    required="true"
                    className="w-[330px] pl-2 text-[14px] h-[45px] rounded-[8px]"
                    placeholder="FIO ni kiriting"
                    type="text"
                  />
                </div>
                <div className="input__wrapper__teacher flex flex-col gap-[10px]">
                  <span>Mutaxassislik</span>
                  <input
                    required="true"
                    className="w-[330px] pl-2 text-[14px] h-[45px] rounded-[8px]"
                    placeholder="Mutaxassislik kiriting"
                    type="text"
                  />
                </div>
                <div className="input__wrapper__teacher flex flex-col gap-[10px]">
                  <span>ID/Passport(seriya raqami)</span>
                  <input
                    required="true"
                    className="w-[330px] pl-2 text-[14px] h-[45px] rounded-[8px]"
                    placeholder="ID/Passport(seriya raqami) kiriting"
                    type="text"
                  />
                </div>
                <div className="input__wrapper__teacher flex flex-col gap-[10px]">
                  <span>Ta’lim turi</span>
                  <input
                    required="true"
                    className="w-[330px] pl-2 text-[14px] h-[45px] rounded-[8px]"
                    placeholder="Ta’lim turi kiriting"
                    type="text"
                  />
                </div>
                <div className="input__wrapper__teacher flex flex-col gap-[10px]">
                  <span>Ish joyi</span>
                  <input
                    required="true"
                    className="w-[330px] pl-2 text-[14px] h-[45px] rounded-[8px]"
                    placeholder="Ish joyi kiriting"
                    type="text"
                  />
                </div>
                <div className="input__wrapper__teacher flex flex-col gap-[10px]">
                  <span>JSHSHIR (PINFL)</span>
                  <input
                    required="true"
                    className="w-[330px] pl-2 text-[14px] h-[45px] rounded-[8px]"
                    placeholder="JSHSHIR (PINFL) kiriting"
                    type="text"
                  />
                </div>
              </div>
              <div className="teacher__btn flex items-center justify-end pr-[23px]">
                <button
                  type="submit"
                  onClick={(e) => setteacher(false)}
                  className="flex items-center rounded-[8px] justify-center text-[white] gap-[5px] w-[118px] h-[40px] bg-[#0E7ED0]"
                >
                  <AiOutlineCheck className=" text-4 text-[#58b658]" />
                  Saqlash
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Teacher__Add;
