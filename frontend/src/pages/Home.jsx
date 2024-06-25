import React from 'react'
import heroImg01 from '../assets/images/hero-img01.png';
import heroImg02 from '../assets/images/hero-img02.png';
import heroImg03 from '../assets/images/hero-img03.png';
import icon01 from '../assets/images/icon01.png';
import icon02 from '../assets/images/icon02.png';
import icon03 from '../assets/images/icon03.png';

import {Link} from 'react-router-dom';
import {BsArrowRight} from 'react-icons/bs';
import About from '../components/About/About';

const Home = () => {
  return <>

    {/* {hero section} */}
    <section className='hero_section pt-[60px] 2xl:h-[800px]'>
      <div className='container'>
        <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>

        {/* {hero content} */}
        <div>
          <div className='lg:w-[570px]'>
              <h1 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]'>
              We help patient live a healthy, longer life.
              </h1>
              <p className='text_para'>
              "Leading the way in healthcare: Focused on improving patient outcomes and quality of life with top-notch medical care, compassionate service, and cutting-edge technology to ensure every patient receives the best possible treatment and support for a healthier future."
              </p>
              <button className='btn'>
                Request an Appointment
              </button>
          </div>

          {/* {hero counter} */}
          <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]'>
            <div>
              <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>
              30+
              </h2>
              <span className='w-[90px] h-2 bg-yellowColor rounded-full block mt-[-14px]'></span>
              <p className='text_para'>Years of Experience</p>
            </div>

            <div>
              <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>
              15+
              </h2>
              <span className='w-[90px] h-2 bg-purpleColor rounded-full block mt-[-14px]'></span>
              <p className='text_para'>Clinic Location</p>
            </div>

            <div>
              <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>
              100%
              </h2>
              <span className='w-[90px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]'></span>
              <p className='text_para'>Patient Satisfaction</p>
            </div>
          </div>
        </div>
        {/* {hero content} */}

        

        <div className='flex gap-[30px] justify-end'>
          <div >
            <img className='w-full' src={heroImg01} alt='' />
          </div>
          <div className='mt-[30px]'>
            <img className='w-full mb-[30px]' src={heroImg02} alt='' />
            <img className='w-full' src={heroImg03} alt='' />

          </div>
         
        </div>
        
        </div>
      </div>
    </section>
    {/* {hero section ends} */}


    <section>
      <div className='container'>
        <div className='lg:w-[470px] mx-auto'>
          <h2 className='heading text-center '>
            Providing the best medical services
          </h2>
          <p className='text_para text-center'>
            World-Class care for everyone. Our health system offers unmatched,
            expert health care.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30p0] mt-[30px] lg:mt-[55px]'> 
          <div className='py-[30px] px-5'>
            <div className='flex items-center justify-center'>
              <img src={icon01} alt=''/>
            </div>

            <div className='mt-[30px]'>
              <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                Find a Doctor
              </h2>
              <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
              Discover the right healthcare professional for your needs. Use our comprehensive search tool to find doctors by name, specialty, or location, ensuring you receive the personalized care you deserve.
              </p>
              <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] 
                mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none '>
                  <BsArrowRight className='group-hover:text-white w-6 h-5'/>
               </Link> 
             
            </div>
          </div>

          <div className='py-[30px] px-5'>
            <div className='flex items-center justify-center'>
              <img src={icon02} alt=''/>
            </div>

            <div className='mt-[30px]'>
              <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                Find a Location
              </h2>
              <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
              Locate the nearest hospital with ease. Our advanced search tool helps you find hospitals by location, ensuring you get timely access to the healthcare services you need.
              </p>
              <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] 
                mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none '>
                  <BsArrowRight className='group-hover:text-white w-6 h-5'/>
               </Link> 
             
            </div>
          </div>

          <div className='py-[30px] px-5'>
            <div className='flex items-center justify-center'>
              <img src={icon03} alt=''/>
            </div>

            <div className='mt-[30px]'>
              <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                Book Appointment
              </h2>
              <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
              Streamline your healthcare journey. With our intuitive appointment booking system, scheduling your next visit has never been easier. Take control of your health today.
              </p>
              <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] 
                mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none '>
                  <BsArrowRight className='group-hover:text-white w-6 h-5'/>
               </Link> 
             
            </div>
          </div>

        </div>

      </div>
    </section>
    
   <About/>

      {/* {service section } */}
      <section>
        <div className='container'>
          <div className='xl:w-[470px] mx-auto' >
            <h2 className='heading text-center '>
                Our medical services
            </h2>
            <p className='text_para text-center'>
                World-class care for everyone. Our health System offers unmatched,
                expert health care.
            </p>
          </div>
        </div>
      </section>      


  </>
}

export default Home