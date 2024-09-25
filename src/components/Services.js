import React from 'react'

import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
//  import { Link } from 'react-scroll';

const services = [
  {
    name: 'Video Editor',
    description:
      'Craft compelling video sales letters, TikTok videos, and social media ads, tailored to engage audiences and drive conversions.'
  },
  {
    name: 'Graphic Design',
    description:
      'Design eye-catching visuals for Facebook ads and Instagram posts, tailored to enhance engagement and drive results.'
  },
  {
    name: 'Script Writer',
    description:
      'Write engaging scripts for video sales letters, TikTok content, and social media ads, tailored to capture attention and drive action.'
  }
]

const Services = () => {
  return (
    <section id='services' className='section '>
      <div className='container mx-auto'>
        <div className='flex  flex-col lg:flex-row'>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 bg-opacity-overlay lg:bg-bottom bg-cover bg-no-repeat text-black mb-12 lg:mb-0'
          >
            <h2 className='text-black text-[3vh] font-bold text-accent mb-6 '>
              What I do?
            </h2>
            <h3 className='text-[4vh] max-w-[445px] mb-16 leading-tight'>
              I create engaging video sales letters for health, lifestyle, and
              beauty sectors in multiple languages, blending storytelling with
              motion graphics. I also produce dynamic TikTok content and design
              eye-catching graphics for Facebook and Instagram to boost
              engagement and conversions.
            </h3>
          </motion.div>
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 text-black'
          >
            <div>
              {services.map((services, index) => {
                const { name, description, link } = services
                return (
                  <div
                    className='border-b border-black/20 h-[146px] mb-[38px] flex'
                    key={index}
                  >
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] track-wider font-primary font-semibold mb-6'>
                        {name}
                      </h4>
                      <p className='font-secondary leading-tight'>
                        {description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Services
