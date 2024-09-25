import MuiAlert from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'
import emailjs from 'emailjs-com'
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { fadeIn } from '../variants'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [snackbarOpen, setSnackbarOpen] = useState(false)
  const [snackbarMessage, setSnackbarMessage] = useState('')
  const [snackbarSeverity, setSnackbarSeverity] = useState('success')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const sendEmail = (e) => {
    e.preventDefault() // Prevent default form submission

    emailjs
      .send(
        'service_5ty33mi',
        'template_6yh1pi9',
        formData,
        'YYUjGgfjtpc8czyd0'
      )
      .then((result) => {
        setSnackbarMessage('Message sent successfully!')
        setSnackbarSeverity('success')
        setSnackbarOpen(true)
        setFormData({ name: '', email: '', message: '' }) // Clear form
      })
      .catch((error) => {
        setSnackbarMessage('Error sending message: ' + error.text)
        setSnackbarSeverity('error')
        setSnackbarOpen(true)
      })
  }

  const handleSnackbarClose = () => {
    setSnackbarOpen(false)
  }
  return (
    <section id='contact' className='py-16 lg:section '>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <motion.div
            variants={fadeIn('right', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex justify-start items-center'
          >
            <div className='text-black'>
              <h4 className='text-xl text-accent font-medium mb-2 tracking-wide'>
                Get in touch
              </h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
                Lets work <br /> together
              </h2>
            </div>
          </motion.div>

          <motion.form
            onSubmit={sendEmail}
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1  border border-black rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'
          >
            <input
              name='name'
              className='bg-transparent text-black border-black border-b py-3 outline-none w-full placeholder:text-black focus:border-accent transition-all'
              type='text'
              placeholder='Name'
              onChange={handleChange}
            />
            <input
              name='email'
              className='bg-transparent text-black border-black border-b py-3 outline-none w-full placeholder:text-black focus:border-accent transition-all'
              type='text'
              placeholder='Email'
              onChange={handleChange}
            />
            <textarea
              name='message'
              className='bg-transparent text-black border-black border-b py-12 outline-none w-full placeholder:text-black focus:border-accent transition-all rezize-none mb-12'
              placeholder='Message'
              onChange={handleChange}
            ></textarea>
            <button style={{ alignSelf: 'center' }} className='btn btn-lg'>
              Send message
            </button>
          </motion.form>
          {/* Snackbar Component */}
          <Snackbar
            open={snackbarOpen}
            autoHideDuration={6000}
            onClose={handleSnackbarClose}
          >
            <MuiAlert
              elevation={6}
              severity={snackbarSeverity}
              onClose={handleSnackbarClose}
              sx={{ width: '100%' }}
            >
              {snackbarMessage}
            </MuiAlert>
          </Snackbar>
        </div>
      </div>
    </section>
  )
}

export default Contact
