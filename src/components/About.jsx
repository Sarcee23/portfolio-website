import React from 'react'
import { FaArrowAltCircleDown } from "react-icons/fa";
import selfImage from '../assets/images/self.jpg';
import { MdOutlineLocationOn } from 'react-icons/md';
import { PiStudent } from 'react-icons/pi';
import resumePDF from '../assets/resume.pdf';

//function to trigger resume download
const handleDownload = () => {
  const link = document.createElement('a');
  link.href = resumePDF;
  link.download = 'Subhayan_Roy_Chowdhury_Resume.pdf'; 
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

function About() {
  return (
    <div className='w-full h-screen bg-zinc-900 text-white pt-1 flex items-center'>
      <div className='flex-1 textstructure px-20'>
        {["IT Student","Web Developer","ML Enthusiast"].map((item,index)=>{
            return(<div key={index} className='masker mr-[1vw]'>
              <div className='w-fit flex items-center'>
                <h1 className='uppercase text-[7vw] font-["Roboto"] leading-[6vw] tracking-tight font-medium'>
                    {item}
                </h1>
                </div>
            </div>)
        })}
        <div className='border-t-[2px] border-zinc-500 mt-32 flex flex-col py-5 px-10 space-y-4'>
          <div className='flex items-center'>
            <PiStudent className='mr-2 text-[3vw]' />
            <p className='text-md font-light tracking-tight leading-none text-[3vw]'>3rd Year IT Undergraduate</p>
          </div>
          <div className='flex items-center'>
            <MdOutlineLocationOn className='mr-2 text-[3vw]' />
            <p className='text-md font-light tracking-tight leading-none text-[3vw]'>Jadavpur University,Kolkata</p>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center mr-20'>
        <div className='w-[300px] h-[300px] rounded-full overflow-hidden border-4 border-white mb-6'>
          <img src={selfImage} alt="Subhayan Roy Chowdhury" className='w-full h-full object-cover' />
        </div>
        <div className='start flex items-center gap-3'>
          <div className='px-6 py-3 border-[1px] border-zinc-200 rounded-full text-base font-light uppercase cursor-pointer' onClick={handleDownload}>
            Resume
          </div>
          <div className='flex items-center justify-center cursor-pointer' onClick={handleDownload}>
            <FaArrowAltCircleDown size={30} /> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;