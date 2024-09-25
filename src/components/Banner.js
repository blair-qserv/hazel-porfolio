import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-scroll'
import { TypeAnimation } from 'react-type-animation'
import Image from '../assets/avatar.png'
import { fadeIn } from '../variants'

const Banner = () => {
  return (
    <section
      id='home'
      className='min-h-[85vh] lg:min-h-[78vh] flex items-center'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='text-black text-[55px] font-bold leading-[0.8] lg:text-[110px]'
            >
              CRISTINE <span> HAZEL</span>
            </motion.h1>
            <motion.div
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold  leading-[1]'
            >
              <span className='text-[#3C3D37] mr-4 text-[5vh]'>I am a</span>
              <TypeAnimation
                sequence={[
                  'Video Editor',
                  2000,
                  'Graphic Designer',
                  2000,
                  'Script Writer',
                  2000
                ]}
                speed={50}
                className='text-accent text-[5vh]'
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn('up', 0.5)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='text-black mb-8 max-w-lg mx-auto lg:mx-0'
            >
              Your trusted partner in multimedia creation, specializing in VSL
              (Video Sales Letter) production. Let’s transform your message into
              compelling video content that drives conversions and engages
              viewers.
            </motion.p>
            <motion.div
              variants={fadeIn('up', 0.6)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
            >
              <Link
                className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'
                to='contact'
              >
                <button className='btn btn-lg'>Contact me</button>
              </Link>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn('down', 0.5)}
            initial='hidden'
            whileInView={'show'}
            className='hidden lg:flex flex-1 max-w-[400px] lg:max-w-[600px] '
          >
            <img src={Image} alt='' />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Banner
