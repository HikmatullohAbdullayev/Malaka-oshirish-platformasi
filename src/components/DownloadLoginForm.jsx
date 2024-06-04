import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

function DownloadLoginForm() {
  const [inputs, setinputs] = useState(true);
  const changeinputs = () => {
    setinputs(!inputs);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <form
        className="text-start grid gap-[20px] "
        onSubmit={handleSubmit(onSubmit)}
      >
        {inputs ? (
          <div className="relative">
            <label
              className="text-[18px] font-normal text-white"
              htmlFor="pasport"
            >
              Pasport seriya
            </label>

            <Input
              id="pasport"
              min={3}
              type="text"
              {...register('pasport', {
                required: 'Pasport seriya kiritish majburiy',
              })}
              placeholder="Pasport seriya"
            />

            {errors.pasport && (
              <p className="text-red-500 font-semibold ">
                {errors.pasport.message}
              </p>
            )}
          </div>
        ) : (
          <div className=" ">
            <label
              className="text-[18px] font-normal text-white"
              htmlFor="jshshir"
            >
              JSHSHIR
            </label>
            <Input
              className=" "
              id="jshshir"
              min={3}
              {...register('jshshir', {
                required: 'JSHSHIR kiritish majburiy',
              })}
              placeholder="J SH SH I R"
            />
            {errors.jshshir && (
              <p className="text-red-500 font-semibold ">
                {errors.jshshir.message}
              </p>
            )}
          </div>
        )}

        <Button
          variant="form"
          className="rounded-sm py-0 h-[36px] mt-[20px]"
          type="submit"
        >
          Qidirish
        </Button>
      </form>
      {inputs ? (
        <Button variant="outline" className="mt-[20px] " onClick={changeinputs}>
          JSHSHIR bilan qidirish
        </Button>
      ) : (
        <Button variant="outline" className="mt-[20px] " onClick={changeinputs}>
          Passport seriya bilan qidirish
        </Button>
      )}
    </>
  );
}

export default DownloadLoginForm;
