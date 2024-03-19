import React from 'react';
import { Link } from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {BsMoon,BsSunFill} from 'react-icons/bs'
import {Custombutton, TextInput} from '../components';
import { useDispatch, useSelector } from 'react-redux';
import {IoMdNotificationsOutline} from 'react-icons/io'
import { PiDetectiveFill } from 'react-icons/pi';
import { SetTheme } from '../redux/theme';
import {Logout} from '../redux/userSlice';
const TopBar = () => {
    const {theme}=useSelector((state)=>state.theme);
    const {user}= useSelector((state)=>state.user);
    const dispatch= useDispatch();
    const {register,handleSubmit,formState:{errors}}= useForm();
    const handleSearch=async(data)=>{

    };
    const handleTheme=()=>{
      const themeValue=theme==="light"?"dark":"light";
      dispatch(SetTheme(themeValue));
    };
  return (
    <div className='topbar w-full flex items-center justify-between py-3
    md:py-3 px-4 bg-primary'>
        <Link to='/' className='flex gap-2 items-center'>
            <div className='p-1 md:p-2 bg-[orangered] rounded text-white'>
                <PiDetectiveFill />

            </div>
            <span className='text-xl md:text-2xl text-[orangered] 
            font-semibold'>Exist!</span>
        
        
        </Link>
        <form
        className='hidden md:flex items-center justify-center'
        onSubmit={handleSubmit(handleSearch)}
        >
          <TextInput placeholder='search...'
          styles='w-[18rem] lg:w-[38rem] rounded-l-full py-3'
          register={register("search")}
          />
          <Custombutton
          title='search'
          type='submit'
          containerStyles='bg-[#0444a4] text-white px-6 py-2.5 mt-2 rounded-r-full'

          />
        </form>
        {/*icons */}
        <div className='flex gap-4 items-center text-ascent-1 text-md
        md:text-xl'>
          <buton onClick={()=>handleTheme()}>{theme?<BsMoon/>:<BsSunFill/>}</buton>
          <div className='hidden lg:flex'>
            <IoMdNotificationsOutline/>
          </div>
          <div>
            <Custombutton
            onClick={()=>dispatch(Logout())}
            title='Log Out'
            containerStyles='text-sm text-ascent-1 px-4 md:px-6 py-1 md:py-2
            border border-[#666] rounded-full'
            />
          </div>

        </div>

    </div>
  )
}

export default TopBar