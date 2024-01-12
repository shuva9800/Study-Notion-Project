import React from 'react'
import Commonpart from '../components/Commonpart'
import loginImg from '../assets/login.png'

export default function Login({setLogin}) {
  return (
    <Commonpart 
      title="Wellcome Back"
      desc1="Build skill for today, tomorrow, and beyond."
      desc2="Education to future-proof your career."
      type="login"
      image={loginImg}
      setLogin={setLogin}

    />
  )
}
