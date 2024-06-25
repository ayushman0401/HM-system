import React from 'react'
import aboutImg from "../../assets/images/about.png"
import aboutCardimg from "../../assets/images/about-card.png"
import { Link } from 'react-router-dom'
const About = () => {
 return <section>
    <div className='container'>
        <div className='flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row'>
            {/* {about img} */}
            <div className='relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1'>
                <img src={aboutImg} alt=''/>
                <div className='absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]'>
                    <img src={aboutCardimg} alt=''/>
                </div>
            </div>
            {/* {about content} */}
            <div className='w-full lg:w-1/2 xl:w-[770px] order-1 lg:order-2'>
                <h2 className='heading'>Proud to be one of the nations best</h2>
                <p className='text_para'>"Embodying excellence, we stands among the nation's top healthcare institutions. Our innovative practices and cutting-edge technology deliver world-class, compassionate care. With a dedicated team, we set the standard for healthcare excellence, providing superior service and advanced treatments."</p>
                <p className='text_para mt-[30px] '>Our legacy of excellence spanning 30 years solidifies our position among the nation's elite medical institutions. Committed to superior patient outcomes and continuous improvement, we redefine industry standards with top-tier healthcare services. Join us in our pursuit of innovation and compassionate care as we strive for the pinnacle of excellence.</p>
                <Link to='/'>
                    <button className='btn'>Learn More</button>
                </Link>
            </div>
        </div>
    </div>
 </section>
}

export default About
