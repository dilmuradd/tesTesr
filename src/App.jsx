import { useContext, useEffect, useState } from 'react'
import Header from './page/header/header'
import { Route, Routes } from 'react-router-dom'
import Filial from './page/body/card/Filial'
import CardPage from './page/body/card/CardPage'
import VakansiyaPage from './page/body/vakansiya/VakansiyaPage'
import NewsPage from './page/body/news/yangilik'
import About from './page/body/About/About'
import Home from './page/body/Home/Home.jsx'
import Checkout from './checkout/Checkout.jsx'
import { BasketContext } from './Context/Basket.jsx'
import { ScrollContext } from './Context/ScrollContext.jsx'
import { Link } from 'react-router-dom'
import Account from './page/body/Account/Account.jsx'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from './Context/Auth.jsx'
import Footer from './Footer/Footer.jsx'
import Page404 from './Page404/Page404.jsx'
import DynamicPage from './DynamicPage/DynamicPage.jsx'


function App() {

  let { isAuth, isHeader, isApp, SetIsApp, SetIsHeader } = useContext(AuthContext)
  let { MyNav, SetMyNav, SetDynamicPageObject, DynamicPageObject, BasketObject, AddCount, MinusCount } = useContext(BasketContext)
  let { ScrollID, ScrollBurger, burger, ScrollDonar, donar, ScrollSendvich, sendvich, Scrollxotdog, xotdog, menu, Smenu, ScrollLavash, lavash } = useContext(ScrollContext)
  let handleNone = () => {
    SetMyNav('none')
  }

  let handleNet = () => {
    let b = document.querySelector('.FullFloat')
    let b1 = document.querySelector('.FullFloat1')
    b.style.display = 'none'
    b1.style.display = 'none'
  }

  let FlexHead = () => {
    SetDynamicPageObject(null)

  }
  useEffect(() => {
    handleNet()
    if (DynamicPageObject) {
      let b = document.querySelector('.FullFloat')
      let b1 = document.querySelector('.FullFloat1')

      b.style.display = 'block'
      b1.style.display = 'flex'
    }
  }, [DynamicPageObject])







  let a = document.querySelector('.DislplayNone')
  if (a) {
    a.style.display = MyNav

  }

  let menuBox = () => {
    let menuBox = document.querySelector('.menu-box')
    let menuIcon = document.querySelector('.menuIcon')

    if (menuBox.style.display === 'none') {
      menuBox.style.display = 'grid'
      menuIcon.style.transform = 'rotate(-90deg)';

    } else {
      menuBox.style.display = 'none'
      menuIcon.style.rotate = '0deg'
      menuIcon.style.transform = 'rotate(90deg)';



    }


  }

  let handleForm = () => {

    if (!isAuth) {
      SetIsHeader(true)

    }
  };
  useEffect(() => {
    if (isAuth) {
      SetIsApp(true)

    }
  }, [handleForm])

  return (
    <div >
      <div className="w-[100%] DislplayNone hidden z-[200] fixed h-[200%] bg-gray-100">

        <div className='flex items-center justify-between p-[20px] bg-gray-700'>
          <h1 className='text-[#fff]'></h1>

          <button onClick={handleNone} className='text-[24px]  text-[#fff]'>
            <i className="fa-solid fa-x"></i>
          </button>

        </div>

        <div onClick={menuBox} className='flex cursor-pointer items-center justify-between p-[20px] border border-black'>
          <h1 className='text-[22px]'>Menu</h1>
          <h1 className='menuIcon'><i className=" fa-solid fa-arrow-right"></i></h1>
        </div>
        <div className='menu-box border hidden border-black grid-cols-2 flex-wrap gap-2 justify-center p-[15px] '>

          <div onClick={() => { ScrollBurger(), handleNone() }} className='p-[10px] border border-black flex items-center gap-4'>
            <img src="https://feedup.uz/_next/image?url=https%3A%2F%2Fapi.feedup.uz%2Fapi%2Fmedia%2Fcategories%2Ficon_BUOylwi.png&w=32&q=75" alt="" />
            <p>Burger</p>
          </div>

          <div onClick={() => { ScrollLavash(), handleNone() }} className='p-[10px] border border-black flex items-center gap-4'>
            <img src="https://feedup.uz/_next/image?url=https%3A%2F%2Fapi.feedup.uz%2Fapi%2Fmedia%2Fcategories%2Ficon1_ceUkJaU.png&w=32&q=75" alt="" />
            <p>Lavash</p>
          </div>


          <div onClick={() => { ScrollDonar(), handleNone() }} className='p-[10px] border border-black flex items-center gap-4'>
            <img src="https://feedup.uz/_next/image?url=https%3A%2F%2Fapi.feedup.uz%2Fapi%2Fmedia%2Fcategories%2Fiocn.png&w=32&q=75" alt="" />
            <p>Donar</p>
          </div>


          <div onClick={() => { Scrollxotdog(), handleNone() }} className='p-[10px] border border-black flex items-center gap-4'>
            <img src="https://feedup.uz/_next/image?url=https%3A%2F%2Fapi.feedup.uz%2Fapi%2Fmedia%2Fcategories%2Ficon2_EMuHfpV.png&w=32&q=75" alt="" />
            <p>Xot-Dog</p>
          </div>

          <div onClick={() => { ScrollSendvich(), handleNone() }} className='p-[10px] border border-black flex items-center gap-4'>
            <img src="https://feedup.uz/_next/image?url=https%3A%2F%2Fapi.feedup.uz%2Fapi%2Fmedia%2Fcategories%2Ficon3_PGbCebR.png&w=32&q=75" alt="" />
            <p>Sendvich</p>
          </div>







        </div>

        <div className='border grid grid-cols-2'>
          <Link to='/' onClick={() => { SetMyNav('none'), ScrollID() }} className='h-[80px] border border-gray-300 flex p-[15px] items-center justify-start gap-4'>
            <img className='w-[30px] h-[30px]' src="https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" alt="img" />
            <p className='text-[14px] font-bold text-[black]'>Eng ko'p Saralanganlar</p>
          </Link>
          <Link to={'/account'} onClick={() => { SetMyNav('none'), handleForm() }} className='h-[80px] border border-gray-300 flex p-[15px] items-center justify-start gap-4'>
            <img className='w-[30px] h-[30px]' src="https://icons.veryicon.com/png/o/miscellaneous/administration/person-16.png" alt="img" />
            <p className='text-[14px] font-bold text-[black]'>Profil</p>
          </Link>
          <Link to='/branchs' onClick={() => SetMyNav('none')} className='h-[80px] border border-gray-300 flex p-[15px] items-center justify-start gap-4'>
            <img className='w-[30px] h-[30px]' src="https://png.pngtree.com/png-vector/20230413/ourmid/pngtree-3d-location-icon-clipart-in-transparent-background-vector-png-image_6704161.png" alt="img" />
            <p className='text-[14px] font-bold text-[black]'>Filial</p>
          </Link>
          <Link to='/vacancies' onClick={() => SetMyNav('none')} className='h-[80px] border border-gray-300 flex p-[15px] items-center justify-start gap-4'>
            <img className='w-[30px] h-[30px]' src="https://cdn-icons-png.flaticon.com/512/26/26099.png" alt="img" />
            <p className='text-[14px] font-bold text-[black]'>Ish o'rinlari</p>
          </Link>
          <Link to='/news' onClick={() => SetMyNav('none')} className='h-[80px] border border-gray-300 flex p-[15px] items-center justify-start gap-4'>
            <img className='w-[30px] h-[30px]' src="https://static.thenounproject.com/png/3141439-200.png" alt="img" />
            <p className='text-[14px] font-bold text-[black]'>Yangiliklar</p>
          </Link>
          <Link to='/aboutus' onClick={() => SetMyNav('none')} className='h-[80px] border border-gray-300 flex p-[15px] items-center justify-start gap-4'>
            <img className='w-[30px] h-[30px]' src="https://upload.wikimedia.org/wikipedia/commons/4/43/Minimalist_info_Icon.png" alt="img" />
            <p className='text-[14px] font-bold text-[black]'>Biz haqimizda</p>
          </Link>
        </div>





      </div>




      <div className=' w-[350px] sm:w-[500px] md:w-[700px] z-[100]  lg:w-[800px] FullFloat hidden fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  lg:h-[auto] md:p-[30px] bg-[#fff] rounded-2xl '>
        <div className='border-b border-black font-bold text-[32px] p-[15px] flex items-center justify-end '>
          <i onClick={() => { handleNet(), FlexHead() }} className=" cursor-pointer fa-solid fa-xmark"></i>
        </div>


        <div className='h-[65%]  flex items-center flex-col lg:flex-row lg:justify-between'>

          <div className='flex items-center justify-center h-[100%] w-[50%] '>

            <img className='object-contain mt-[20px] lg:mt-[2px]' src={DynamicPageObject ? DynamicPageObject.img : 'default-image-url.jpg'} alt="" />

          </div>

          <div className=' h-[100%] w-[50%]  text-center p-[20px]'>
            <h1 className='font-semibold text-[24px] lg:text-[34px]'>{DynamicPageObject ? DynamicPageObject.title : "Xatolik"}</h1>
            <h1 className='text-gray-400 text-[16px] lg:text-[18px] lg:mt-[50px]'>{DynamicPageObject ? DynamicPageObject.text : 'error'}</h1>
            <h1 className='font-bold text-[22px] lg:text-[32px] lg:mt-[60px]'>{DynamicPageObject ? DynamicPageObject.narx : '0000'} so'm</h1>

          </div>


        </div>

        <div className='flex flex-col items-center  justify-center mb-[30px] lg:mb-[2px]  mt-[30px]'>

          <button onClick={() => BasketObject(DynamicPageObject)} className=' active:scale-[0.9] w-[100%] bg-[orange] h-[55px]'>
            Savatga Qo'shish
          </button>





        </div>



      </div>





      <div onClick={handleNet} className='w-full FullFloat1  hidden bg-[#4e4b5091] fixed z-[90]  h-[100vh]  items-center p-[10px] justify-center'>


      </div>












      <Header />
      <Routes>

        <Route path='/branchs' element={<CardPage />} />
        <Route path='/branchs' element={<CardPage />} />
        <Route path='/vacancies' element={<VakansiyaPage />} />
        <Route path='/news' element={<NewsPage />} />
        <Route path='/aboutus' element={<About />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/account' element={isApp ? <Account /> : <Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<DynamicPage />} />
        <Route path='*' element={<Page404 />} />

      </Routes>
      <Footer />
    </div>
  )
}

export default App
