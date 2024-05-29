import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import VisibilityIcon from '../assets/icon/VisibilityIcon';
import VisibilityOffIcon from '../assets/icon/VisibilityOffIcon';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Link } from 'react-router-dom';

function LoginForm(props) {

  const [hidden, setHidden ] = useState(true)
  const changeHidden = () => {
    setHidden(!hidden)
  }

    const { register, handleSubmit,reset,  formState: { errors } } = useForm();


    const onSubmit = data => {
        console.log(data);
        reset()
      };


    return (
        
      <form className='text-start grid gap-[20px] ' onSubmit={handleSubmit(onSubmit)}>
        <div className=' '>
          <label className='text-[18px] font-normal text-white' htmlFor="firstName">Ism</label>
          <Input  className=' ' id="firstName" min={3}  {...register('firstName', { required: 'Ism kiritish majburiy' })}  placeholder='F I O'/>  
        </div>
          {errors.firstName && <p className='text-red-500 font-semibold ' >{errors.firstName.message}</p>}
        
        <div className='relative'>
          <label className='text-[18px] font-normal text-white' htmlFor="lastName">Parol</label>
          <Input id="lastName" min={3} type={hidden ? "text" : "password" } {...register('lastName', { required: 'Familiya kiritish majburiy' })} placeholder='Password'/> 
          <span  onClick={changeHidden} className='absolute top-[50%] right-2'> {hidden ? <VisibilityIcon/> : <VisibilityOffIcon/> }</span>
        </div>
          {errors.lastName && <p className='text-red-500 font-semibold '>{errors.lastName.message}</p>}

    

        <Button variant="form" className="rounded-sm py-0 h-[36px] mt-[20px]"  type="submit">Kirish</Button>
        <p className='text-[12px] font-normal text-white text-center' >or continue with</p>

        <p className='text-[14px] font-normal text-white text-center'  >Don`t have an account yet? <Link><b>Register for free</b></Link></p>
      </form> 
      
    );
}

export default LoginForm;