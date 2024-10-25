import React from 'react'
import FadeInScroll from './ani-scroll'

function CollageSection() {
  return (
    <div className='collage-section my-100'>
        <FadeInScroll>
            <div className="collage1 flex justify-center">
                <div className="left">
                    <div className="title w-600 h-400 bg-nightBlack text-white font-EB text-32 flex items-center justify-center">Decor Guidance</div>
                </div>
                <div className="right">
                    <img src="./Assets/collage1.png" alt="#" className='w-600 h-400 bg-white object-cover'/>
                </div>
            </div>
        </FadeInScroll>
        <FadeInScroll>
            <div className="collage2 flex justify-center">
                <div className="left">
                        <img src="./Assets/collage2.png" alt="#" className='w-600 h-400 bg-white object-cover'/>
                    </div>
                    <div className="right">
                        <div className="title w-600 h-400 px-44 bg-white text-richBlack font-EB text-17 flex items-center justify-center text-wrap">Unclutter and organize your home. Neatly arrange drawers and cabinets.  Keep pets outdoors or off the premises. Play soft music</div>
                    </div>
            </div>
        </FadeInScroll>
        <FadeInScroll>
            <div className="collage3 flex justify-center">
                <div className="left">
                    <div className="title w-600 h-400 bg-richBlack text-white font-EB text-32 flex items-center justify-center">Intentional Layout</div>
                </div>
                <div className="right">
                    <img src="./Assets/collage3.png" alt="#" className='w-600 h-400 bg-white object-cover'/>
                </div>
            </div>
        </FadeInScroll>
        <FadeInScroll>
            <div className="collage4 flex justify-center">
                <div className="left">
                        <img src="./Assets/collage4.png" alt="#" className='w-600 h-400 bg-white object-cover'/>
                    </div>
                    <div className="right">
                    <div className="title w-600 h-400 px-44 bg-white text-richBlack font-EB text-17 flex items-center justify-center text-wrap">Unclutter and organize your home. Neatly arrange drawers and cabinets.  Keep pets outdoors or off the premises. Play soft music</div>
                    </div>
                </div>
        </FadeInScroll>
        </div>
  )
}

export default CollageSection