import './index.css';

function topBanner() {
  return (
    <div className="heroBanner">
        <div className="navbar w-full bg-transparent px-40 py-8 flex justify-between items-center absolute z-20">
            <div className="navbar-left">
                <img src="./Assets/Brand-Logo.png" alt="#" />
            </div>
            <div className="navbar-right">
                <img src="./Assets/Menu.png" alt="#" className='size-9' />
            </div>
        </div>
        <div className="title absolute w-full top-52 z-40">
            <p className='px-64 py-8 text-6xl text-white font-6xl font-Karla font-bold'>Expert Solutions for Your Real Estate Needs</p>
            <p className='px-64 py-8 text-2xl text-white font-Karla font-semibold'>Your trusted partner for buying, selling, and investing.</p>
        </div>
        <div className="search-field flex gap-8 content-center items-center bg-white shadow-md top-570 mx-255 px-8 w-1047 h-16 rounded-full absolute z-30">
            <img src="./Assets/search-icon.png" alt="search-icon" />
            <input type="text" placeholder='Search by Address or Area...' className='w-810 bg-white text-xl font-dimGray font-Karla font-medium' />
        </div>
        <div className="banner-overlay bg-black opacity-30 w-full h-600 absolute z-10"></div>
        <div className="banner relative z-0">
            <img src="./Assets/banner-img.jpg" alt="#" className='w-screen h-600 object-cover object-top' />
        </div>
        
    </div>
  )
}

export default topBanner