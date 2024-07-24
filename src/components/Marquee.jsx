import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div className='w-full py-5 rounded-tl-3xl rounded-tr-3xl bg-[#97A6A2] overflow-hidden'>
      <div className='text py-5 border-t-2 border-b-2 border-zinc-800 flex gap-10 whitespace-nowrap'>
        <motion.div
          initial={{ x: '0%' }}
          animate={{ x: '-100%' }}
          transition={{ ease: 'linear', repeat: Infinity, duration: 20 }}
          className='flex gap-10'
        >
          <h1 className='text-[10vw] leading-none font-["Founders_Grotesk_Bold"] font-semibold uppercase'>
            Open to Work
          </h1>
          <h1 className='text-[10vw] leading-none font-["Founders_Grotesk_Bold"] font-semibold uppercase'>
            Open to Work
          </h1>
          <h1 className='text-[10vw] leading-none font-["Founders_Grotesk_Bold"] font-semibold uppercase'>
            Open to Work
          </h1>
          <h1 className='text-[10vw] leading-none font-["Founders_Grotesk_Bold"] font-semibold uppercase'>
            Open to Work
          </h1>
        </motion.div>
      </div>
    </div>
  )
}

export default Marquee
