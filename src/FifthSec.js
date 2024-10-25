import FadeInSection from './ani-scroll';
import './index.css'

function FifthSec() {
  return (
    <div className='fifth-section '>
        <FadeInSection>
            <div className="first flex justify-center w-930 mx-255 mb-100 gap-5">
                <div className="left">
                    <img src="./Assets/buying process img.jpg" alt="buyingprocessimg" className='rounded-32 w-455 h-448 object-cover object-top' />
                </div>
                <div className="right w-455">
                    <p className="title font-Karla font-medium text-55 w-255 mb-30 leading-none text-wrap ">The Buying Process</p>
                    <p className="sub-title font-Karla font-medium text-17 mb-30 text-wrap">The home-buying process involves an initial consultation and planning, searching for a home while getting pre-approved, submitting an offer, and completing the settlement process to finalize the purchase.</p>
                    <button className='p-2 uppercase font-Karla font-32 bg-nightBlack text-white font-medium border-solid border rounded-32 border-nightBlack delay-150 hover:bg-transparent hover:text-nightBlack ease-in-out transition'>Get Started</button>
                </div>
            </div>
        </FadeInSection>
        <FadeInSection>
            <div className="second flex justify-center gap-5 mb-100">
                <div className="left w-580">
                    <p className="title font-Karla font-medium text-right text-32 w-333 pt-205 ml-auto mb-30 leading-none block ">Over 33 Years of <span>Real Estate Success</span></p>
                    <p className="sub-title font-Karla font-medium text-justify text-17 mb-30 text-wrap">We provide every one of our clients with a level of service they won't find anywhere else. We give them what they need, often before they know they need it. In real estate, almost everything can be negotiated. When you choose Hansen Partners It is experience is 100% nonnegotiable. And it's an experience like no other.</p>
                </div>
                <div className="right w-580">
                <img src="./Assets/33yrs.png" alt="buyingprocessimg" className='rounded-32 w-full object-cover object-top' />
                </div>
            </div>
        </FadeInSection>
        <FadeInSection>
            <div className="third flex justify-center gap-5 mb-100">
                <div className="left w-580">
                    <img src="./Assets/third img.png" alt="buyingprocessimg" className='rounded-32 w-full object-cover object-top' />
                </div>
                <div className="right w-580">
                <p className="title font-Karla font-medium text-32 mb-30 pt-205 leading-none text-wrap ">We Want To Create An Unforgettable Experience For You...</p>
                    <p className="sub-title font-Karla font-medium text-justify text-17 mb-30 text-wrap">We provide every one of our clients with a level of service they won't find anywhere else. We give them what they need, often before they know they need it. In real estate, almost everything can be negotiated. When you choose Hansen Partners It is experience is 100% nonnegotiable. And it's an experience like no other.</p>
                </div>
            </div>
        </FadeInSection>
    </div>
  )
}

export default FifthSec;