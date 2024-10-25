import React from 'react'
import './index.css'
import FadeInSection from './ani-scroll'

function SixthSec() {
  return (
    <div className='SixthSec mb-100'>
        <FadeInSection>
            <div className="comm-tab">
                <p className="text-32 font-Karla font-medium text-nightBlack text-center">The Hansen Partner Communication Tablet</p>
                <p className='my-30 w-740 m-auto text-wrap text-17 font-Karla text-nightBlack text-center'>We have created this as a wonderful tool so that we can communicate with you daily, provide you with updates on what is happening with your home. We are available at the with a click of your tablet.</p>
            </div>
        </FadeInSection>
        <FadeInSection>
            <div className="benefits mt-30 mb-100">
                <p className='font-Karla font-bold font-22 text-center'>Benefits</p>
                <img src="./Assets/benefit line.png" alt="benefit-line-img" className='mx-auto' />
                <div className="benefits flex justify-center gap-5">
                    <p className='w-265'>Review all documents and sign in the comfort of your home or anywhere.</p>
                    <p className='w-265'>Stay up to date on all marketing activities, review materials, photos, etc. in real time.</p>
                    <p className='w-265'>Meet with us face to face on our Gotomeeting.com platform to go over and discuss the events of the week.</p>
                    <p className='w-265'>You have your own email assigned just for you and your common space to quickly write a note, or quickly send a video message to us for fast communication using our Bomb bomb video messaging system.</p>
                </div>
            </div>
        </ FadeInSection>
    </div>
  )
}

export default SixthSec