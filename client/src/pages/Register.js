import React, { useState } from 'react'
import {useForm} from 'react-hook-form';
import {PiDetectiveFill} from 'react-icons/pi';
import {TextInput,Loading,Custombutton} from '../components/index'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
function Register() {
  const {register,
    getValues,
    handleSubmit,
  formState:{errors}}=useForm(
    {
      mode:"onChange"
    }
  );
  const onSubmit=async(data)=>{
   
  }
 const [errMsg,setErrMsg]=useState("");
 const [isSubmitting,setIsSubmitting]=useState(false);
 const dispatch=useDispatch();
  return (
    <div className='bg-bgColor w-full h-[115vh] flex 
    items-center justify-center p-6'>
      <div className='w-full md:w-2/3 h-fit lg:h-full 2xl:h-5/6 
      py-8 lg:py-0 flex flex-row-reverse bg-primary rounded-xl overflow-hidden
       shadow-xl'>
        {/*left */}
      <div className='w-full  h-full p-10 2xl;px-20 flex
      flex-col justify-center' >
        <div className='w-full flex gap-2 items-center mb-6'>
          <div className='p-2 bg-[orangered] rounded text-white'>
          <PiDetectiveFill className='text-[white] h-7 w-7'/>
          </div>
          <span className='text-2xl text-[orangered]' font-semibold>
            Exist!
          </span>

        </div>
        <p className='text-ascent-1 text-base font-semibold'>
          Create your account
        </p>
        <form className='py-8 flex flex-col gap-5' onSubmit={
          handleSubmit(onSubmit)}>
          <div className='w-full flex flex-col lg:flex-row gap-1 md:gap-2 '>
          
          <TextInput
          name="firstName" placeholder="First Name"
          label="First Name"
          type="text"
          register={
            register("firstName",{
              required:"First Name is required"
            })
          }
          styles='w-full rounded-full'
          labelStyle='ml-2'
          error={errors.firstName?errors.firstName?.message:""}
          />
          <TextInput
          name="lastName" placeholder="Last Name"
          label="Last Name"
          type="text"
          register={
            register("lastName",{
              required:"Last Name is required"
            })
          }
          styles='w-full rounded-full'
          labelStyle='ml-2'
          error={errors.lastName?errors.lastName?.message:""}
          />
           </div>
          <TextInput
          name="email" placeholder="email@example.com"
          label="Email Address"
          type="email"
          register={
            register("email",{
              required:"Email Address is required"
            })
          }
          styles='w-full rounded-full'
          labelStyle='ml-2'
          error={errors.email?errors.email.message:""}
          />
          <div className='w-full flex flex-col lg:flex-row gap-1 md:gap-2 '>
          <TextInput name="password" placeholder="password"
          label="Password"
          type="password"
          styles='w-full rounded-full'
          labelStyle='ml-2'
          register={
            register("password",{
              required:"password is required"
            })
          }
         
          error={errors.password?errors.password?.message:""}
          /> 
            <TextInput 
            name="confirmPassword" placeholder="confirm password"
          label="Confirm Password"
          type="password"
          styles='w-full rounded-full'
          labelStyle='ml-2'
          register={
            register("confirmPassword",{
              validate:(value)=>{
                const {password}=getValues();
                if(password!==value){
                  return "passwords do not match";
                }
              }
            })
          }
         
          error={errors.confirmPassword&&errors.confirmPassword.type==="validate"?
          errors.confirmPassword?.message:""}
          /> 
            </div>
            {
              errMsg?.message &&(
                <span className={`text-sm ${
                  errMsg?.status==="failed" ? "text-[#f64949fe]":
                  "text-[#2ba150fe]"
                } mt-0.5`}>
                  {errMsg?.message}
                </span>
              )
            }
            {
              isSubmitting ?<Loading />:<Custombutton
              type="submit"
              containerStyles={`inline-flex justify-center rounded-full
              bg-blue px-8 py-3 text-md font-medium text-white outline-none`}
              title='Create Account'
              />
            
            }
        </form>
        <p className='text-ascent-2 text-center'>
          Already have an account?
          <Link
          to='/Login'
          className='text-[#065ad8] font-medium ml-2 cursor-pointer
          '
          >Login</Link>

        </p>

      </div>
     {/*right*/}
     <div className='hidden w-1/2 h-full lg:flex flex-col items-center
      justify-center bg-[orangered]'>
        <div className='relative w-full flex items-center justify-center'>
        <PiDetectiveFill className='w-48 2xl:w-64 h-48 2xl:h-64 rounded-full
         object-cover bg-[white]' />
        </div>

     </div>

      </div>
      
      </div>
  )
}

export default Register;