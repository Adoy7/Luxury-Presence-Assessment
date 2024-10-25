import React from 'react'
import FadeInSection from './ani-scroll'
import './index.css'

function WorkwUs() {
  return (
    <div className='WorkWithUs mb-100'>   
        <FadeInSection>
            <div className="work-with-us h-550 p-52 max-h-550 w-full relative z-0 flex flex-col justify-center items-center" 
            style={{
                backgroundImage: "url('./Assets/work-with-us.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
                <p className="title text-center text-white text-55 font-Karla font-bold">Work with Us</p>
                <hr className="divider h-0.5 w-32 bg-white text-white mx-auto my-30" />
                <p className="sub-title max-w-930 mx-auto text-white text-center font-Karla font-medium text-17">With decades of experience in luxurious Tri Valley real estate, our team is here to ensure that your dreams are a reality. Let us guide you through your home buying journey, contact us today!</p>
                <button className='mx-auto my-30 px-30 py-1 text-white border-white border-solid border-2 rounded-32 hover:bg-white hover:text-nightBlack delay-100 transition'> Contact Us</button>
            </div>
        </FadeInSection>
    </div>
  )
}

export default WorkwUs;