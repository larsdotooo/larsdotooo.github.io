"use client"
import React from 'react'
import { useForm } from 'react-hook-form';

const ThoughtBox = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    
  return (
    <div className="w-full h-full mb-20 p-20 flex flex-col items-center">
        <h3 className='mt-20 font-bold text-center text-2xl'>
        Was geht dir durch den Kopf?
        </h3>

        <form onSubmit={handleSubmit(onSubmit)} className="w-1/2 my-10 mx-10 flex items-stretch bg-light p-2 border-2 rounded-full">
        <input
            type="text" 
            placeholder="Teile einen Gedanken mit mir" 
            {...register("text", { required: true, maxLength: 80 })}
            className='w-full mx-5 bg-transparent pl-0 text-dark focus:border-dark focus:ring-0 border-0 border-b pb-1' 
        />

        </form>

    </div>
  )
}

export default ThoughtBox