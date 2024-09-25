import { motion } from 'framer-motion'
import React from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { fadeIn } from '../variants'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5
  })
  return (
    <section id='about' className='section' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-7-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          <motion.div
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='rounded-xl flex-1 bg-about bg-contain bg-no-repeat h-[500px] bg-top'
          ></motion.div>
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 text-black'
          >
            <h1 className=' text-accent text-[5vh] mt-[10px]'>About me</h1>
            <h3 className='text-[3vh] mb-4 font-semi-bold mt-2'>
              I'm a Free lance
            </h3>
            <p className='mb-6 '>
              As a video editor with skills in editing videos using Adobe
              Premiere Pro, I have the ability to create high-quality, engaging
              content that is optimized for social media platforms, while also
              incorporating dynamic graphics and compelling storytelling to
              maximize audience impact.
            </p>
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={4} duration={3} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Years of <br />
                  Experience
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={500} duration={3} /> : null}
                  +
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Projects <br />
                  Completed
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={20} duration={3} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Satisfied <br />
                  Clients
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
