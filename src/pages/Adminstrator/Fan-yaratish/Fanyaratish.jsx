import React, { useState } from 'react';
import './fan__yaratish.css';
import { AiOutlineCheck } from 'react-icons/ai';

const Fanyaratish = () => {
  const [seemore, setSeemore] = useState(false);
  window.scrollTo(0, 0);
  return (
    <>
      <div className="fanCreate">
        <div className="fanCreate__wrapper  ">
          <form className="fancreate__top ">
            <button onClick={(e) => setSeemore(true)} className="fan__btn">
              + Fan yaratish
            </button>
            <select className="fan__select" name="" id="">
              <option value="2023-2024 yil">2023-2024 yil</option>
            </select>
          </form>
          <div className="fancreate__bottom">
            <table>
              <thead>
                <tr>
                  <th>Fanlar</th>
                  <th>O'quv yili</th>
                  <th>Guruh</th>
                  <th>Mashg'ulot</th>
                  <th>dars sanasi</th>
                  <th>xodim</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {seemore ? (
        <div className="form__module__wrapper">
          <div className="module">
            <div className="module__title">Fan yaratish</div>
            <span className="module__line"></span>
            <form className="input__form">
              <div className="form__input__wrapper">
                <div className="input__wrapper">
                  <p>Fan nomi</p>
                  <input
                    className="form__input"
                    placeholder="Fan nomini kiriting"
                    type="text"
                  />
                </div>
                <div className="input__wrapper">
                  <p>O'quv yili</p>
                  <input
                    className="form__input"
                    placeholder="O'quv yilini  kiriting"
                    type="text"
                  />
                </div>
                <div className="input__wrapper">
                  <p>Mashg'ulot</p>
                  <input
                    className="form__input"
                    placeholder="Mashg'ulot nomini  kiriting"
                    type="text"
                  />
                </div>
                <div className="input__wrapper">
                  <p>Dars sanasi</p>
                  <input
                    className="form__input"
                    placeholder="Dars sanasini kiriting  kiriting"
                    type="text"
                  />
                </div>
                <div className="input__wrapper">
                  <p>Xodim</p>
                  <input
                    className="form__input"
                    placeholder="Xodimni kiriting  kiriting"
                    type="text"
                  />
                </div>
                <div className="input__wrapper">
                  <p>Guruhi</p>
                  <input
                    className="form__input"
                    placeholder="Guruhni kiriting  kiriting"
                    type="text"
                  />
                </div>
              </div>
              <div className="btn__wrapper">
                <button className="btn__wrapper__btn">
                  <div className="img">
                    <AiOutlineCheck />
                  </div>
                  Saqlash
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Fanyaratish;
