import React from 'react'
import signupImg from '../assets/signup.png'
import Commonpart from '../components/Commonpart'

export default function Singup({setLogin}) {
  return (
    <Commonpart 
      title="Join the millions learning to code with StudyNotion for free"
      desc1="Build skill for today, tomorrow, and beyond."
      desc2="Education to future-proof your career."
      type="signup"
      image={signupImg}
      setLogin={setLogin}

    />
  )
}
