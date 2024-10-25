import React from 'react'
import './index.css'

function footer() {
  return (
    <div className='footer w-1120 mx-auto'>
        <div className="flex">
            <div className="left w-1/2">
                <p className="brand mb-5 font-EB text-nightBlack text-32 font-semibold">Julie Hansen Partnership</p>
                <p className="sub-title w-455 text-wrap text-nightBlack">An elite group of the East Bay's most talented and visionary real estate professionals believed buyers and sellers deserved more from their real estate company. More service. More resources. More integrity. More global reach. In a word, more of everything people should expect when they buy or sell their homes.</p>
                <div className="soc-links flex gap-50 my-50">
                    <img src='./Assets/realtor-icon.svg' alt="realtor-icon" />
                    <img src='./Assets/eqo-icon.svg' alt="realtor-icon" />
                    <img src='./Assets/sereno-icon.svg' alt="realtor-icon" />
                </div>
            </div>
            <div className="right w-1/2">
                <p className="label font-EB text-22 font-medium leading-10">Contact Us</p>
                <p className="telephone my-5 text-nightBlack text-17 font-Karla">(925) 553-6707</p>
                <p className="location my-5 text-nightBlack text-17 font-Karla">4733 Chabot Drive #100 Pleasanton, CA 94588</p>
                <p className="email my-5 text-nightBlack text-17 font-Karla">luxuryhomesinwc@icloud.com</p>
                <p className="other my-5 text-nightBlack text-17 font-Karla">Julie Hansen-Orvis | CA DRE# 00934447</p>
                <div className="soc-links flex gap-50">
                    <img src='./Assets/Facebook.svg' alt="realtor-icon" />
                    <img src='./Assets/LinkedIn.svg' alt="realtor-icon" />
                </div>
            </div>
        </div>
        <div className="newslatter mb-20">
                <div className="title text-nightBlack font-EB font-medium text-22">Newsletter</div>
                <div className="sub-title text-nightBlack font-Karla text-17 my-2.5">Subscribe to our Newsletter for latest news and updates. Stay tuned!</div>
                <p className="label mt-30 text-nightBlack font-Karla text-17 opacity-75">Email Address</p>
                <input type="email" name="" id="email" className='w-550 bg-transparent border-b-nightBlack border-solid border-b-2 border-opacity-25' />
            </div>
            <div className="footer2 mb-5 text-center text-17 font-Karla text-nightBlack">Website Designed & Developed for Application Purposes Only</div>
    </div>
  )
}

export default footer