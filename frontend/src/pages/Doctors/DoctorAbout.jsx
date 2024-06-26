import React from 'react'
import { formateDate } from '../../utils/formatDate'

const DoctorAbout = () => {
  return <div>
    <div>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2'>
        About of
        <span className='text-irisBlueColor font-bold text-[24px] leading-9'>
            Dinesh Agarwal
        </span>
        </h3> 
        <p className='text_para'>
        Orthopedic specialist dedicated to providing expert care for musculoskeletal conditions, ensuring patients regain mobility and quality of life.
        </p>
    </div>

    <div className='mt-12'>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'> 
            Education
        </h3>
        <ul className='pt-4 md:pt-5'>
            <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                <div>
                    <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>
                    {formateDate("10-06-2008")}-{formateDate("06-01-2010")}

                    </span>
                    <p className='text-[16px] leading-6 font-medium text-textColor'>
                        M.D. in Orthopedic
                    </p>
                </div>
                <p className='text-[14px] leading-5 font-medium text-textColord'>
                    Puducherry Hospital, Puducherry.
                </p>
            </li>
            <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                <div>
                    <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>
                        {formateDate("12-04-2004")} -{formateDate("08-14-2008")}
                    </span>
                    <p className='text-[16px] leading-6 font-medium text-textColor'>
                        M.B.B.S. 
                    </p>
                </div>
                <p className='text-[14px] leading-5 font-medium text-textColord'>
                    AIIMS, Delhi.
                </p>
            </li>
        </ul>
     </div>

    <div className='mt-12'>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'> 
            Experience
        </h3>

        <ul className='grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5'>
            <li className='p-4 rounded bg-[#fff9ea]'>
                <span className='text-yellowColor text-[15px] leading-6 font-semibold'>
                {formateDate("10-06-2011")}-{formateDate("06-01-2015")}
                </span>
                <p className='text-[16px] leading-6 font-medium text-textColor'>
                    Sr. Doctor
                </p>
                <p className='text-[14px] leading-5 font-medium text-textColor'>
                    AIIMS,Ranchi
                </p>
            </li> 
            <li className='p-4 rounded bg-[#fff9ea]'>
                <span className='text-yellowColor text-[15px] leading-6 font-semibold'>
                {formateDate("06-02-2015")}-{formateDate("03-11-2021")}
                </span>
                <p className='text-[16px] leading-6 font-medium text-textColor'>
                    Sr. Doctor
                </p>
                <p className='text-[14px] leading-5 font-medium text-textColor'>
                    AIIMS,Vellore
                </p>
            </li> 
        </ul>
    </div>
  </div>
}

export default DoctorAbout
