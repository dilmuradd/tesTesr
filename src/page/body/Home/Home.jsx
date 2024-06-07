import React, { useContext, useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { ScrollContext } from '../../../Context/ScrollContext';
import SwipperPrev, { SwipperPrevM } from './swipperPrev';
import axios from 'axios';
import { BasketContext } from '../../../Context/Basket';

const Home = () => {
    let { SectionREF, ScrollDonar, donar, ScrollBurger, burger, Smenu, lavash, ScrollLavash, sendvich, ScrollSendvich, Scrollxotdog, xotdog } = useContext(ScrollContext)


    let [getSwipper, SetGetSwipper] = useState([])

    let getAll = async () => {
        try {
            let MyData = await axios.get('https://579162ced3e0ca31.mokky.dev/xit')
            SetGetSwipper(MyData.data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getAll()

    }, [])

    let { BasketObject, NoneBlock } = useContext(BasketContext)

    useContext(() => {
        localStorage.setItem('basket', JSON.stringify(ArrBasket))

    })




    let [getBurger, SetGetBurger] = useState([])

    let getAllBurger = async () => {
        try {
            let MyData = await axios.get('https://579162ced3e0ca31.mokky.dev/burger')
            SetGetBurger(MyData.data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getAllBurger()

    }, [])


    let [getLavash, SetGetLavash] = useState([])

    let getAllLavash = async () => {
        try {
            let MyData = await axios.get('https://579162ced3e0ca31.mokky.dev/lavash')
            SetGetLavash(MyData.data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getAllLavash()

    }, [])


    let [getDonar, SetGetDonar] = useState([])

    let getAllDonar = async () => {
        try {
            let MyData = await axios.get('https://579162ced3e0ca31.mokky.dev/Donar')
            SetGetDonar(MyData.data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getAllDonar()

    }, [])



    let [getxotdog, SetGetxotdog] = useState([])

    let getAllxotdog = async () => {
        try {
            let MyData = await axios.get('https://579162ced3e0ca31.mokky.dev/XotDog')
            SetGetxotdog(MyData.data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getAllxotdog()

    }, [])


    let [getSen, SetGetSen] = useState([])

    let getAllSen = async () => {
        try {
            let MyData = await axios.get('https://579162ced3e0ca31.mokky.dev/sendvich')
            SetGetSen(MyData.data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getAllSen()

    }, [])





    return (
        <div>


            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                autoplay={{
                    delay: 2500,
                }}
                modules={[Pagination, Navigation, Autoplay]}
            >
                <SwiperSlide>
                    <img src="https://feedup.uz/_next/image?url=https%3A%2F%2Fapi.feedup.uz%2Fapi%2Fmedia%2Fbanners%2F2.jpg&w=1920&q=100" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://feedup.uz/_next/image?url=https%3A%2F%2Fapi.feedup.uz%2Fapi%2Fmedia%2Fbanners%2F1_L1L5BlC.jpg&w=1920&q=100" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://feedup.uz/_next/image?url=https%3A%2F%2Fapi.feedup.uz%2Fapi%2Fmedia%2Fbanners%2F3.jpg&w=1920&q=100" alt="" />
                </SwiperSlide>



            </Swiper>



            <div className=' mt-[20px] lg:mt-[70px] pl-[20px] lg:pl-[40px] flex gap-2 items-center pb-[10px] lg:pb-[30px] border-b-2'>
                <img className='w-[40px]' src="https://feedup.uz/assets/images/svg/star.svg" alt="" />
                <h1 ref={SectionREF} className=' lg:text-[28px] font-bold'>
                    XIT SOTUVLAR
                </h1>

            </div>


            <div className="flex items-center relative p-[30px] justify-center"
            >


                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    loop={true}
                    autoplay={{
                        delay: 1500,
                    }}
                    navigation={{
                        nextEl: '.ongga',
                        prevEl: '.chapga'
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                    modules={[Pagination, Autoplay]}
                >
                    <SwipperPrev />



                    {
                        getSwipper.map((value) => {


                            return (

                                <SwiperSlide className='flex justify-center items-center' key={value.id} >
                                    <div className='border max-w-[350px] pb-[100px] h-[700px] '>
                                        <div className='flex items-center  pb-3 flex-col border-b  gap-3 justify-center p-[30px]'>

                                            <img className='w-[262px] h-[208px] object-contain' src={value.img} alt="food" />
                                            <h1 className='text-[32px] h-[140px] font-bold'>
                                                {value.title}
                                            </h1>
                                        </div>
                                        <div className='p-[20px] h-[100px]  border-b'>
                                            <p>
                                                {value.text}
                                            </p>
                                        </div>
                                        <div className=' p-[20px] gap-5 flex flex-col items-center justify-center'>
                                            <div>
                                                <p className='text-[24px] font-bold'>{value.narx} so'm</p>
                                            </div>

                                            <button onClick={() => BasketObject(value)} className=' active:scale-[0.9] w-[100%] bg-[orange] h-[55px]'>
                                                Savatga Qo'shish
                                            </button>
                                        </div>
                                    </div>
                                </SwiperSlide>

                            )


                        })
                    }





                </Swiper>




            </div>

            <div className=' mt-[20px] lg:mt-[70px] pl-[20px] lg:pl-[40px] flex gap-2 items-center pb-[10px] lg:pb-[30px] '>
                <h1 ref={Smenu} className=' lg:text-[28px] font-bold'>
                    MENYU
                </h1>


            </div>

            <Swiper
                slidesPerView={4}
                spaceBetween={0}
                loop={true}
                autoplay={{
                    delay: 8500,
                }}
                navigation={{
                    nextEl: '.ongga',
                    prevEl: '.chapga'
                }}
                modules={[Pagination, Autoplay]}
                className='relative top-[80px]'
            >
                <SwipperPrevM />



                <SwiperSlide onClick={() => ScrollBurger()} className='w-[100px] h-[100px] flex flex-col items-center gap-1 justify-center hover:bg-yellow-100 cursor-pointer border border-black'>

                    <img src="https://feedup.uz/_next/image?url=https%3A%2F%2Fapi.feedup.uz%2Fapi%2Fmedia%2Fcategories%2Ficon_BUOylwi.png&w=64&q=75" alt="food" />
                    <p>Burger</p>
                </SwiperSlide>

                <SwiperSlide onClick={() => ScrollLavash()} className='w-[100px] h-[100px] flex flex-col items-center gap-1 justify-center hover:bg-yellow-100 cursor-pointer border border-black'>

                    <img src="https://feedup.uz/_next/image?url=https%3A%2F%2Fapi.feedup.uz%2Fapi%2Fmedia%2Fcategories%2Ficon1_ceUkJaU.png&w=64&q=75" alt="food" />
                    <p>Lavash</p>
                </SwiperSlide>


                <SwiperSlide onClick={() => ScrollDonar()} className='w-[100px] h-[100px] flex flex-col items-center gap-1 justify-center hover:bg-yellow-100 cursor-pointer border border-black'>

                    <img src="https://feedup.uz/_next/image?url=https%3A%2F%2Fapi.feedup.uz%2Fapi%2Fmedia%2Fcategories%2Fiocn.png&w=64&q=75" alt="food" />
                    <p>Donar</p>
                </SwiperSlide>


                <SwiperSlide onClick={() => Scrollxotdog()} className='w-[100px] h-[100px] flex flex-col items-center gap-1 justify-center hover:bg-yellow-100 cursor-pointer border border-black'>

                    <img src="https://feedup.uz/_next/image?url=https%3A%2F%2Fapi.feedup.uz%2Fapi%2Fmedia%2Fcategories%2Ficon2_EMuHfpV.png&w=64&q=75" alt="food" />
                    <p>Xot-Dog</p>
                </SwiperSlide>

                <SwiperSlide className='w-[100px] h-[100px] flex flex-col items-center gap-1 justify-center hover:bg-yellow-100 cursor-pointer border border-black'>

                    <img onClick={() => ScrollSendvich()} src="https://feedup.uz/_next/image?url=https%3A%2F%2Fapi.feedup.uz%2Fapi%2Fmedia%2Fcategories%2Ficon3_PGbCebR.png&w=64&q=75" alt="food" />
                    <p>Sendvich</p>
                </SwiperSlide>



            </Swiper>


            <div className=' mt-[20px] lg:mt-[70px] pl-[20px] lg:pl-[40px] flex gap-2 items-center pb-[10px] lg:pb-[30px]'>
                <img src="https://feedup.uz/_next/image?url=https%3A%2F%2Fapi.feedup.uz%2Fapi%2Fmedia%2Fcategories%2Ficon_BUOylwi.png&w=64&q=75" alt="" />
                <h1 ref={burger} className=' lg:text-[28px] font-bold'>
                    Бургеры
                </h1>


            </div>


            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-[10px]'>




                {
                    getBurger.map((value) => {


                        return (


                            <div className='flex justify-center items-center' key={value.id} >
                                <div className='border w-[100%] md:max-w-[350px] pb-[100px] h-[700px] '>
                                    <div className='flex items-center  pb-3 flex-col border-b  gap-3 justify-center p-[30px]'>

                                        <img className='w-[262px] h-[208px] object-contain' src={value.img} alt="food" />
                                        <h1 className='text-[32px] h-[140px] font-bold'>
                                            {value.title}
                                        </h1>
                                    </div>
                                    <div className='p-[20px] h-[100px]  border-b'>
                                        <p>
                                            {value.text}
                                        </p>
                                    </div>
                                    <div className=' p-[20px] gap-5 flex flex-col items-center justify-center'>
                                        <div>
                                            <p className='text-[24px] font-bold'>{value.narx} so'm</p>
                                        </div>
                                        <button onClick={() => BasketObject(value)} className=' active:scale-[0.9] w-[100%] bg-[orange] h-[55px]'>
                                            Savatga Qo'shish
                                        </button>

                                    </div>
                                </div>
                            </div>






                        )

                    })
                }

            </div>

            <div className=' mt-[20px] lg:mt-[70px] pl-[20px] lg:pl-[40px] flex gap-2 items-center pb-[10px] lg:pb-[30px]'>
                <img src="https://feedup.uz/_next/image?url=https%3A%2F%2Fapi.feedup.uz%2Fapi%2Fmedia%2Fcategories%2Ficon1_ceUkJaU.png&w=64&q=75" alt="" />
                <h1 ref={lavash} className=' lg:text-[28px] font-bold'>
                    Лаваш
                </h1>


            </div>






            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-[10px]'>




                {
                    getLavash.map((value) => {


                        return (


                            <div className='flex justify-center items-center' key={value.id} >
                                <div className='border w-[100%] md:max-w-[350px] pb-[100px] h-[700px] '>
                                    <div className='flex items-center  pb-3 flex-col border-b  gap-3 justify-center p-[30px]'>

                                        <img className='w-[262px] h-[208px] object-contain' src={value.img} alt="food" />
                                        <h1 className='text-[32px] h-[140px] font-bold'>
                                            {value.title}
                                        </h1>
                                    </div>
                                    <div className='p-[20px] h-[100px]  border-b'>
                                        <p>
                                            {value.text}
                                        </p>
                                    </div>
                                    <div className=' p-[20px] gap-5 flex flex-col items-center justify-center'>
                                        <div>
                                            <p className='text-[24px] font-bold'>{value.narx} so'm</p>
                                        </div>
                                        <button onClick={() => BasketObject(value)} className=' active:scale-[0.9] w-[100%] bg-[orange] h-[55px]'>
                                            Savatga Qo'shish
                                        </button>

                                    </div>
                                </div>
                            </div>






                        )

                    })
                }

            </div>



            <div className=' mt-[20px] lg:mt-[70px] pl-[20px] lg:pl-[40px] flex gap-2 items-center pb-[10px] lg:pb-[30px]'>
                <img src="https://feedup.uz/_next/image?url=https%3A%2F%2Fapi.feedup.uz%2Fapi%2Fmedia%2Fcategories%2Fiocn.png&w=64&q=75" alt="" />
                <h1 ref={donar} className=' lg:text-[28px] font-bold'>
                    Donar
                </h1>


            </div>


            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-[10px]'>




                {
                    getDonar.map((value) => {


                        return (


                            <div className='flex justify-center items-center' key={value.id} >
                                <div className='border w-[100%] md:max-w-[350px] pb-[100px] h-[700px] '>
                                    <div className='flex items-center  pb-3 flex-col border-b  gap-3 justify-center p-[30px]'>

                                        <img className='w-[262px] h-[208px] object-contain' src={value.img} alt="food" />
                                        <h1 className='text-[32px] h-[140px] font-bold'>
                                            {value.title}
                                        </h1>
                                    </div>
                                    <div className='p-[20px] h-[100px]  border-b'>
                                        <p>
                                            {value.text}
                                        </p>
                                    </div>
                                    <div className=' p-[20px] gap-5 flex flex-col items-center justify-center'>
                                        <div>
                                            <p className='text-[24px] font-bold'>{value.narx} so'm</p>
                                        </div>
                                        <button onClick={() => BasketObject(value)} className=' active:scale-[0.9] w-[100%] bg-[orange] h-[55px]'>
                                            Savatga Qo'shish
                                        </button>

                                    </div>
                                </div>
                            </div>






                        )

                    })
                }

            </div>



            <div className=' mt-[20px] lg:mt-[70px] pl-[20px] lg:pl-[40px] flex gap-2 items-center pb-[10px] lg:pb-[30px]'>
                <img src="https://feedup.uz/_next/image?url=https%3A%2F%2Fapi.feedup.uz%2Fapi%2Fmedia%2Fcategories%2Ficon2_EMuHfpV.png&w=64&q=75" alt="" />
                <h1 ref={xotdog} className=' lg:text-[28px] font-bold'>
                    Xot-Dog
                </h1>


            </div>



            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-[10px]'>




                {
                    getxotdog.map((value) => {


                        return (


                            <div className='flex justify-center items-center' key={value.id} >
                                <div className='border w-[100%] md:max-w-[350px] pb-[100px] h-[700px] '>
                                    <div className='flex items-center  pb-3 flex-col border-b  gap-3 justify-center p-[30px]'>

                                        <img className='w-[262px] h-[208px] object-contain' src={value.img} alt="food" />
                                        <h1 className='text-[32px] h-[140px] font-bold'>
                                            {value.title}
                                        </h1>
                                    </div>
                                    <div className='p-[20px] h-[100px]  border-b'>
                                        <p>
                                            {value.text}
                                        </p>
                                    </div>
                                    <div className=' p-[20px] gap-5 flex flex-col items-center justify-center'>
                                        <div>
                                            <p className='text-[24px] font-bold'>{value.narx} so'm</p>
                                        </div>
                                        <button onClick={() => BasketObject(value)} className=' active:scale-[0.9] w-[100%] bg-[orange] h-[55px]'>
                                            Savatga Qo'shish
                                        </button>

                                    </div>
                                </div>
                            </div>






                        )

                    })
                }

            </div>


            <div className=' mt-[20px] lg:mt-[70px] pl-[20px] lg:pl-[40px] flex gap-2 items-center pb-[10px] lg:pb-[30px]'>
                <img src="https://feedup.uz/_next/image?url=https%3A%2F%2Fapi.feedup.uz%2Fapi%2Fmedia%2Fcategories%2Ficon3_PGbCebR.png&w=64&q=75" alt="" />
                <h1 ref={sendvich} className=' lg:text-[28px] font-bold'>
                    Сендвич
                </h1>


            </div>

            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-[10px]'>




                {
                    getSen.map((value) => {


                        return (


                            <div className='flex justify-center items-center' key={value.id} >
                                <div className='border w-[100%] md:max-w-[350px] pb-[100px] h-[700px] '>
                                    <div className='flex items-center  pb-3 flex-col border-b  gap-3 justify-center p-[30px]'>

                                        <img className='w-[262px] h-[208px] object-contain' src={value.img} alt="food" />
                                        <h1 className='text-[32px] h-[140px] font-bold'>
                                            {value.title}
                                        </h1>
                                    </div>
                                    <div className='p-[20px] h-[100px]  border-b'>
                                        <p>
                                            {value.text}
                                        </p>
                                    </div>
                                    <div className=' p-[20px] gap-5 flex flex-col items-center justify-center'>
                                        <div>
                                            <p className='text-[24px] font-bold'>{value.narx} so'm</p>
                                        </div>
                                        <button onClick={() => BasketObject(value)} className=' active:scale-[0.9] w-[100%] bg-[orange] h-[55px]'>
                                            Savatga Qo'shish
                                        </button>

                                    </div>
                                </div>
                            </div>






                        )

                    })
                }

            </div>


        </div>
    );
}

export default Home;
