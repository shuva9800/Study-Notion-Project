import React from 'react'

// import frameimage from "../assets/frame.png "
import FrameImage from '../assets/background.png'
import SignupForm from './SignupForm'
import Logkaro from './Logkaro'

export default function Commonpart({title,desc1,desc2,formtype,image,setLogin}) {
  return (
    <div>
        <div>
            <h1>{title}</h1>
            <p>
                <span>{desc1}</span>
                <span>{desc2}</span>
            </p>
            {formtype ==="signup"?(<SignupForm/>):(<Logkaro/>)}

            <div>
                <div></div>
                <p>OR</p>
                <div></div>
            </div>
            <div>
                <button>
                    <p>Signup With Google</p>
                </button>
            </div>
        </div>
        <div>
            <img src={FrameImage}
                alt='frameimg'
                    height={504}
                    width={558}
                    loading='lazy'
            />
               <img src={image}
                alt='signup or login img'
                    height={504}
                    width={558}
                    loading='lazy'
            />
        </div>
    </div>
  )
}
