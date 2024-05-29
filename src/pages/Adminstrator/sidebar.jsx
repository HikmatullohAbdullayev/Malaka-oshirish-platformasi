import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/img/arraw.png'

const sidebar = () => {
    const [open, setOpen] = useState(true);
  return (
    
      <div
        className={`${open ? 'w-[230px]' : 'w-[10px] '} h-[1050px] relative   flex-row items-center gap-x-4 bg-[black] ps-6 pt-8 duration-300 `}
      >
      <div>
<<<<<<< HEAD:src/pages/Adminstrator/sidebar.jsx
      <ul className={`${open ? 'block' : 'hidden'} flex flex-col gap-1`}>
        <Link to='admin/lesson'>
          <li className='p-1 hover:bg-gray-700 text-white'>
          +Dars jadvali yaratish
          </li>
        </Link>
        <Link to='admin/kutubxona-admin'>
          <li className='p-1 hover:bg-gray-700 text-white'>
          Kutubxona
=======
      <ul>
          <li className='p-4 hover:bg-gray-700 text-white'>
            <Link to='admin/lesson'>Lesson</Link>
          </li>
          <li className='p-4 hover:bg-gray-700 text-white'>
            <Link to='admin/kutubxona-admin'>Library</Link>
>>>>>>> main:src/pages/admin/sidebar.jsx
          </li>
        </Link>
        <Link to='admin/Talabalar'>
          <li className='p-1 hover:bg-gray-700 text-white'>
          Talabalar
          </li>
        </Link>
        <Link to='admin/Normativ-hujjatlar'>
          <li className='p-1 hover:bg-gray-700 text-white'>
          Normativ hujjatlar
          </li>
        </Link>
        <Link to='admin/Fan-yaratish'>
          <li className='p-1 hover:bg-gray-700 text-white'>
          + Fan yaratish
          </li>
        </Link>
        <Link to='admin/Guruh-yaratish'>
          <li className='p-1 hover:bg-gray-700 text-white'>
          + Guruh yaratish
          </li>
        </Link>
        </ul>
      </div>

        <img
          alt="Toggle sidebar"
          src={img}
          className={`border-dark-purple absolute -right-3 top-16 w-7 cursor-pointer
     rounded-full border-2   ${!open && 'rotate-180'}`}
          onClick={() => setOpen(!open)}
          onKeyPress={event => {
            if (event.key === 'Enter' || event.key === ' ') {
              setOpen(!open);
            }
          }}
          // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
          role="button"
          tabIndex={0}
        />
      
       
      </div>
     
      
    
  )
}

export default sidebar