import FadeInSection from './ani-scroll';
import './index.css';

function TSP() {
  return (
    <div className='the-selling-process my-100'>
        <FadeInSection>
            <div className="title mb-50 uppercase text-32 font-Karla font-medium text-center">The Selling Process</div>
            <img src="./Assets/animationbg.png" alt="#" className='mx-auto mb-30' />
            <div className="selling-process flex justify-between mx-auto w-990 font-Karla text-17 text-nightBlack">
                <p>Initial Consultation</p>
                <p>Devise and Execute</p>
                <p>Reveiw and Reach</p>
                <p>Complete Transaction</p>
                <p>After-sale Service</p>
            </div>
        </FadeInSection>
    </div>
  )
}

export default TSP