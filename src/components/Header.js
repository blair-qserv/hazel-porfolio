import React from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../assets/LOGO.png'

const Header = () => {
  const navigate = useNavigate()
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <button onClick={() => navigate('/')}>
            <img src={Logo} alt=' ' style={{ width: '10%' }} />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
