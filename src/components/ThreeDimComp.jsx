import { motion } from 'framer-motion'
import React from 'react'
import { styles } from '../styles'
import { name, subText } from '../constants'
import { ComputersCanvas } from './index'


const ThreeDimComp = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div>
          <h1 className={`font-black tracking-light text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2`}>
            I'm <span className='text-[#915EFF]'>{name}</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            {subText}
          </p>
        </div>
      </div>
      <ComputersCanvas />
    </section>
  )
};
export default ThreeDimComp