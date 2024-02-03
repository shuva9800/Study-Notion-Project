import React from 'react'

import FrameImage from '../assets/background.png'
import SignupForm from './SignupForm'
import Logkaro from './Logkaro'
import { FcGoogle } from "react-icons/fc";

export default function Commonpart({title,desc1,desc2,formtype,image,setLogin}) {
    return (

    <div className='flex w-10/12 max-w-[1160px] py-12 mx-auto justify-between  sd:flex-col-reverse  gap-y-0'>
        <div className='w-11/12 max-w-[450px]'>
            <h1 className='text-richblack-5 font-semibol text-[1.875rem] leading-[2.375rem] '>{title}</h1>
            <p className=' text-[1.125rem] leading-[1.625rem] mt-4'>
                <span className='text-richblack-100 '>{desc1}</span>
                <br/>
                <span className='text-blue-100'>{desc2}</span>
            </p>
            {formtype ==="signup"?(<SignupForm setLogin={setLogin}/>):(<Logkaro setLogin={setLogin}/>)}

            <div className='flex w-full items-center my-4 gap-x-2'>
                <div className='w-full h-[1px] bg-richblack-700'></div>
                <p className='text-richblack-700 font-medium leading[1.375rem]'>OR</p>
                <div className='w-full h-[1px] bg-richblack-700'></div>
            </div>
            <div>
                <button className='w-full flex justify-center items-center
                 rounded-[8px] font-medium text-richblack-100 border border-richblack-700
                 px-[12px] py-[8px] gap-x-2 mt-6 '>
                    <FcGoogle />
                    <p >Signup With Google</p>
                </button>
            </div>
        </div>
        <div className='relative w-11/12 max-w-[450px] mt-4'>
        <img src={FrameImage}
                    alt='signup or login img'
                        height={504}
                        width={558}
                        loading='lazy'
                />
            <img src={image}
                alt='frameimg'
                    height={504}
                    width={558}
                    loading='lazy'
                    className='absolute -top-4 right-4'
            />
               
             
        </div>
    </div>
  )
}
