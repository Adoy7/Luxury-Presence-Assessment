import React from 'react';
import FadeInScroll from './ani-scroll'
import './index.css'


function CMP() {
    return (
        <div className="Comprehensive Marketing Plan">
        <FadeInScroll>
            <div className="container grid grid-cols-12 gap-5 mx-auto max-w-[75rem]">
                <p className="title col-start-4 col-span-6 mt-135 mb-30 uppercase font-Karla font-medium text-32 text-center">Comprehensive Marketing Plan</p>
            </div>w
        </FadeInScroll>

        <FadeInScroll>
            <div className="marketing-plan grid grid-cols-12 gap-5 mx-auto max-w-[75rem]">
                    <div className="card1 col-start-1 rounded-32 shadow-md bg-white w-285 h-265 px-4 py-14">
                        <img src="./Assets/Voice Recognition.png" alt="responsive-icon" className='mx-auto mb-2.5 w-75 h-75 border-s-black' />
                        <p className='text-center'>Responsive</p>
                        <p className='text-center'>I am always available via phone, text, or email.</p>
                    </div>
                    <div className="card2 col-start-4 rounded-32 shadow-md bg-white w-285 h-265 px-4 py-14">
                        <img src="./Assets/Flag.png" alt="responsive-icon" className='mx-auto mb-2.5 w-75 h-75 border-s-black' />
                        <p className='text-center'>Syndication</p>
                        <p className='text-center'>I market your property locally, nationally, and internationally</p>
                    </div>
                    <div className="card3 col-start-7 rounded-32 shadow-md bg-white w-285 h-265 px-4 py-14">
                        <img src="./Assets/Marker A.png" alt="responsive-icon" className='mx-auto mb-2.5 w-75 h-75 border-s-black' />
                        <p className='text-center'>Virtual Tour</p>
                        <p className='text-center'>Let's make your home stand out with a high quality virtual tour.</p>
                    </div>
                    <div className="card4 col-start-10 rounded-32 shadow-md bg-white w-285 h-265 px-4 py-14">
                        <img src="./Assets/Compact Camera.png" alt="responsive-icon" className='mx-auto mb-2.5 w-75 h-75 border-s-black' />
                        <p className='text-center'>Photography</p>
                        <p className='text-center'>High-end photography is a central part of our marketing plan for your property.</p>
                    </div>
                </div>
            </FadeInScroll>
    </div>
  )
}
export default CMP;