import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import VisibilityIcon from '../assets/icon/VisibilityIcon';
import VisibilityOffIcon from '../assets/icon/VisibilityOffIcon';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Link, useNavigate } from 'react-router-dom';

function LoginForm(props) {

  const [hidden, setHidden ] = useState(false)
  const changeHidden = () => {
    setHidden(!hidden)
  }

    const { register, handleSubmit,reset,  formState: { errors } } = useForm();
  const navigate = useNavigate() 

    const onSubmit = data => {
        console.log(data);
        if (data.firstName === "student"){
          navigate("/")
        }else if (data.firstName === "teacher"){
          navigate("/HomeTeacher")
        } else if (data.firstName === "admin"){
          navigate("/Admin")
        }
        reset()
      };


    return (
        
      <form className='text-start grid gap-[20px] ' onSubmit={handleSubmit(onSubmit)}>
        <div className=' '>
          <label className='text-[18px] font-normal text-white' htmlFor="passport">Login</label>
          <Input  className=' ' id="passport" min={3}  {...register('passport', { required: 'Passport seriya kiritish majburiy' })}  placeholder='Passport seriya'/>  
        </div>
          {errors.passport && <p className='text-red-500 font-semibold ' >{errors.passport.message}</p>}
        
        <div className='relative'>
          <label className='text-[18px] font-normal text-white' htmlFor="parol">Parol</label>
          <Input id="parol" min={3} type={hidden ? "text" : "password" } {...register('parol', { required: 'JSHSHIR kiritish majburiy' })} placeholder='JSHSHIR'/> 
          <span  onClick={changeHidden} className='absolute top-[50%] right-2'> {hidden ? <VisibilityIcon/> : <VisibilityOffIcon/> }</span>
        </div>
          {errors.parol && <p className='text-red-500 font-semibold '>{errors.parol.message}</p>}

        <Button variant="form" className="rounded-sm py-0 h-[36px] mt-[20px]"  type="submit">Kirish</Button>
        <p className='text-[12px] font-normal text-white text-center' >or continue with</p>

        <p className='text-[14px] font-normal text-white text-center'  >Don`t have an account yet? <Link><b>Register for free</b></Link></p>
      </form> 
      
    );
}

export default LoginForm;