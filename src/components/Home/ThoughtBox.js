"use client"
import React from 'react'
import { useForm } from 'react-hook-form';
import Image from 'next/image';

const ThoughtBox = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    
  return (


    <div className='w-full inline-block'>
      <article className='flex flex-col items-start justify-end mx-5 sm:mx-10 relative h-[60vh] sm:h-[85vh]'>

        <div className='absolute top-0 left-0 bottom-0 right-0 h-full
        bg-gradient-to-b from-transparent from-0% to-dark/50 rounded-3xl z-0' />
                
        <Image src="/michael-daniels-ylUGx4g6eHk-unsplash.jpg"
        alt='picture by michael daniels'
        fill
        className='w-full h-full object-center object-cover rounded-3xl -z-10'
        priority
        />

        <div className="w-full h-1/2 sm:h-1/3 flex flex-col items-center justify-center text-light z-40">

          <form onSubmit={handleSubmit(onSubmit)} className="w-[75vw] lg:w-[65vw] xl:w-1/2 flex items-stretch bg-light/90 p-2 border-black border-2 rounded-full hover:bg-light">
            <input
            type="text" 
            placeholder="Was geht dir durch den Kopf?" 
            {...register("text", { required: true, maxLength: 80 })}
            className='w-full mx-5 bg-transparent pl-0 text-dark font-medium focus:border-dark focus:ring-0 border-0 border-b pb-1 mb-1' 
            />
          </form>
        </div>
      </article>
    </div>
    
  )
}

export default ThoughtBox