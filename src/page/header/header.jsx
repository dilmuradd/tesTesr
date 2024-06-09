import { Link, useNavigate } from "react-router-dom";
import './header.scss';
import { ScrollContext } from "../../Context/ScrollContext";
import { useContext, useEffect, useState } from "react";
import { BasketContext } from "../../Context/Basket";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { SwipperPrevH } from "../body/Home/swipperPrev";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import i18n from '../../locals/i18n';
import { AuthContext } from "../../Context/Auth";
import Account from "../body/Account/Account";
import App from "../../App";
import axios from "axios";

const Header = () => {
    const { ScrollID, menu, ScrollDonar, donar, ScrollBurger, burger, Smenu, lavash, ScrollLavash, sendvich, ScrollSendvich, Scrollxotdog, xotdog } = useContext(ScrollContext);
    const { AllYigindi, handleNavbar } = useContext(BasketContext);
    const { t, i18n } = useTranslation();

    const handleChangeLangue = (lng) => {
        i18n.changeLanguage(lng);
        console.log(lng);
    };

    const [Lang, setLang] = useState(false);
    const LangueEditUz = () => {
        setLang(true);
    };

    const [Lang2, setLang2] = useState(false);
    const LangueEditRu = () => {
        setLang2(true);
        setLang(false);
    };

    const [MyTru, SetMyTru] = useState(false);
    const newLang = () => {
        SetMyTru(true);
    };

    const OldLang = () => {
        SetMyTru(false);
        setLang2(false);
        setLang(false);
    };

    let { isAuth, SetisAuth, SetIsHeader, isHeader, SetIsApp } = useContext(AuthContext);
    let privatePage = useNavigate();

    let handleForm = () => {
        // if (!isAuth) {

        //     let Login = document.querySelector('.LoginPage');
        //     Login.style.display = 'block';
        //     let Login2 = document.querySelector('.LoginPage-2');
        //     Login2.style.display = 'block';

        // }else{
        //     SetIsHeader(true)
        // }
        if (!isAuth) {
            SetIsHeader(true)

        }
    };
    useEffect(() => {
        if (isAuth) {
            SetIsApp(true)

        }
    }, [handleForm])




    let OnLogin = () => {
        SetIsHeader(false)
    };

    let PostData = async (data) => {

        try {
            let responseData = await axios.post('https://579162ced3e0ca31.mokky.dev/register', data)
            console.log(responseData.data);
            localStorage.setItem('userInfo', JSON.stringify(responseData.data.data))
            localStorage.setItem('token', JSON.stringify(responseData.data.token))
            SetisAuth(true)
        } catch (error) {
            console.log(error);
        }

    }


    let handleSubmit = (e) => {
        e.preventDefault()
        let data = {
            fullName: e.target.fullName.value,
            email: e.target.email.value,
            password: e.target.password.value,
        }


        PostData(data)
    }
    let [InpuTypte, setInputType] = useState(true)

    let loginForm = () => {
        setInputType(false)
    }
    let loginReg = () => {
        setInputType(true)
    }

    let LoginData = async (data) => {

        try {
            let responseData = await axios.post('https://579162ced3e0ca31.mokky.dev/auth', data)
            console.log(responseData.data);
            localStorage.setItem('userInfo', JSON.stringify(responseData.data.data))
            localStorage.setItem('token', JSON.stringify(responseData.data.token))
            SetisAuth(true)
        } catch (error) {
            console.log(error);
        }

    }

    let handleSubmitLogin = (e) => {
        e.preventDefault()
        let data = {
            email: e.target.email.value,
            password: e.target.password.value,
        }
        LoginData(data)
        console.log(data);
    }

    let storage = JSON.stringify(localStorage.getItem('token'))
    return (
        <div className="relative">

            {isHeader ?
                <div className="w-[100%] h-[100vh] fixed z-[349]">

                    <div onClick={() => OnLogin()} className="w-[100%] LoginPage  z-[350] fixed h-[100vh] bg-[#00000074]"></div>
                    <div className="fixed w-[350px] sm:w-[400px] md:w-[500px]  LoginPage-2 h-[600px] z-[351] bg-[white] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="w-[100%] p-[10px] flex items-center justify-between bg-[#3a3737]">
                            <h1></h1>
                            <img src="https://feedup.uz/_next/image?url=%2Fassets%2Fimages%2Flogos%2Flogo.png&w=128&q=75" alt="" />
                            <button onClick={() => OnLogin()} className="text-[36px] text-[#fff] pr-[10px]"><i className="fa-solid fa-xmark"></i></button>
                        </div>
                        <div className="flex flex-col gap-3">
                            {InpuTypte ?

                                <form className="flex flex-col gap-3" onSubmit={handleSubmit}>

                                    <div className="w-[100%] px-[40px] mt-[30px] flex flex-col justify-start">
                                        <label htmlFor="ism" className="text-[18px]">Ism<span className="text-red-500">*</span></label>
                                        <input type="text" name="fullName" id="ism" className="border border-gray-400 h-[50px] pl-[10px]" placeholder="Bu yerga Kiriting" />
                                    </div>

                                    <div className="w-[100%] px-[40px] mt-[10px] flex flex-col justify-start">
                                        <label htmlFor="email" className="text-[18px]">Email<span className="text-red-500">*</span></label>
                                        <input type="email" name="email" id="email" className="border border-gray-400 h-[50px] pl-[10px]" placeholder="Bu yerga Kiriting" />
                                    </div>
                                    <div className="w-[100%] px-[40px] mt-[10px] flex flex-col justify-start">
                                        <label htmlFor="pass" className="text-[18px]">Password<span className="text-red-500">*</span></label>
                                        <input type="Password" name="password" id="pass" className="border border-gray-400 h-[50px] pl-[10px]" placeholder="Bu yerga Kiriting" />
                                    </div>

                                    <div className="flex items-center justify-center p-[20px] pl-[40px] pr-[40px]">

                                        <button onClick={() => setTimeout(() => {
                                            OnLogin()
                                        }, 1000)} className="bg-yellow-400 text-[24px] font-bold h-[60px] w-[100%]" type="submit">Ro'yxatdan O'tish</button>

                                    </div>
                                </form>
                                :
                                <form className="flex flex-col gap-3" onSubmit={handleSubmitLogin}>

                                    <div className="w-[100%] px-[40px] mt-[30px] flex flex-col justify-start">

                                    </div>

                                    <div className="w-[100%] px-[40px] mt-[10px] flex flex-col justify-start">
                                        <label htmlFor="email" className="text-[18px]">Email<span className="text-red-500">*</span></label>
                                        <input type="email" name="email" id="email" className="border border-gray-400 h-[50px] pl-[10px]" placeholder="Bu yerga Kiriting" />
                                    </div>
                                    <div className="w-[100%] px-[40px] mt-[10px] flex flex-col justify-start">
                                        <label htmlFor="pass" className="text-[18px]">Password<span className="text-red-500">*</span></label>
                                        <input type="Password" name="password" id="pass" className="border border-gray-400 h-[50px] pl-[10px]" placeholder="Bu yerga Kiriting" />
                                    </div>

                                    <div className="flex items-center justify-center p-[20px] pl-[40px] pr-[40px]">

                                        <button onClick={() => setTimeout(() => {
                                            OnLogin()
                                        }, 1000)} className="bg-yellow-400 text-[24px] font-bold h-[60px] w-[100%]" type="submit">Login</button>

                                    </div>
                                </form>

                            }


                            <div className="flex items-center justify-center pl-[40px] pr-[40px]">


                                {
                                    InpuTypte ? <button onClick={loginForm} className="text-[24px] border border-gray-500 font-bold h-[60px] w-[100%]" type="submit">Menda Hisob Mavjud</button>
                                        : <button onClick={loginReg} className="text-[24px] border border-gray-500 font-bold h-[60px] w-[100%]" type="submit">Ro'yxatdan O'tish</button>
                                }

                            </div>

                        </div>
                    </div>
                </div> : null}

            <header className="lg:flex mx-auto border-b hidden justify-between text-[18px] h-full">
                <div className="w-[105px] h-[78px] lg:w-[11vw] lg:h-[76px] bg-[#2d2d2d] flex items-center justify-center">
                    <img className="w-[100%] h-[auto] p-1" src="https://feedup.uz/assets/images/logos/logo.svg" alt="logo" />
                </div>
                <nav className="border-b-none px-[26px] py-[24px] ml-[20px] mr-[9px] xxl:mx-[38px] hidden lg:flex h-[100%] items-center gap-[31px]">
                    <Link to={'/'} onClick={() => menu()}>{t("menyu")}</Link>
                    <Link className="link" to="/branchs">{t("filial")}</Link>
                    <Link className="link" to="/vacancies">{t("ish")}</Link>
                    <Link className="link" to="/news">{t("news")}</Link>
                    <Link className="link" to="/aboutus">{t("about")}</Link>
                </nav>
                <Link to={'/'} onClick={ScrollID} className="py-[24px] border border-b-0 px-[26px] flex items-center gap-2 justify-center">
                    <img className="w-[26px] h-[25px]" src="https://feedup.uz/assets/images/svg/star.svg" alt="" />
                    <p className="cursor-pointer block lg:hidden xl:block">{t("xit")}</p>
                </Link>
                <div className="flex items-center justify-center">
                    <div className="flex absolute gap-5 right-0 lg:static">
                        <div className="flex items-center justify-center gap-2">
                            <Link className="cursor-pointer flex items-center justify-center relative gap-2" to={'/checkout'}>
                                {AllYigindi > 0 && (
                                    <div className="bg-[red] flex items-center justify-center w-[16px] h-[16px] rounded-[50%] absolute left-[17px] bottom-[17px]">
                                        <p className="text-[10px] text-[#fff]">{AllYigindi}</p>
                                    </div>
                                )}
                                <img src="https://feedup.uz/assets/images/svg/bag.svg" alt="" />
                                <p className="hidden lg:hidden xl:flex">{t("savat")}</p>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="uz-lang">
                    <div className="relative">
                        {!Lang2 && (
                            <div onClick={LangueEditUz} className="lang-father-uz cursor-pointer hidden lg:flex items-center border border-b-0 h-[80px] px-[20px] gap-3 justify-center">
                                <img className="w-[26px] h-[25px]" src="https://feedup.uz/_next/image?url=%2Fassets%2Fimages%2Fpng%2Fflag-uz.png&w=32&q=75" alt="test" />
                                <p>UZ</p>
                            </div>
                        )}
                        {Lang && (
                            <div onClick={() => { LangueEditRu(); handleChangeLangue("ru"); }} className="w-[100px] flex lang-ru absolute z-[87] bottom-[-55px] rounded-md cursor-pointer items-center justify-center gap-2 shadow-xl h-[50px] bg-gray-100">
                                <img className="w-[26px] shadow-xl h-[25px]" src="https://feedup.uz/_next/image?url=%2Fassets%2Fimages%2Fpng%2Fflag-ru.png&w=32&q=75" alt="test" />
                                <p>RU</p>
                            </div>
                        )}
                    </div>
                </div>
                {Lang2 && (
                    <div className="ru-lang">
                        <div className="relative">
                            <div onClick={newLang} className="lang-father-uz cursor-pointer hidden lg:flex items-center border border-b-0 h-[80px] px-[20px] gap-3 justify-center">
                                <img className="w-[26px] h-[25px]" src="https://feedup.uz/_next/image?url=%2Fassets%2Fimages%2Fpng%2Fflag-ru.png&w=32&q=75" alt="test" />
                                RU
                            </div>
                            {MyTru && (
                                <div onClick={() => { OldLang(); handleChangeLangue("uz"); }} className="w-[100px] flex lang-ru-2 absolute z-[87] bottom-[-55px] rounded-md cursor-pointer items-center justify-center gap-2 shadow-xl h-[50px] bg-gray-100">
                                    <img className="w-[26px] shadow-xl h-[25px]" src="https://feedup.uz/_next/image?url=%2Fassets%2Fimages%2Fpng%2Fflag-uz.png&w=32&q=75" alt="test" />
                                    <p>UZ</p>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                <Link to={'/account'} onClick={handleForm} className="border-b-0 hidden lg:flex lg:py-[20px] lg:px-[26px] items-center justify-center ">
                    <img src={'https://feedup.uz/assets/images/svg/user.svg'} alt="" />
                </Link>

            </header>
            <div className="flex border-b lg:hidden justify-between top-0 w-[100%]">
                <div className="w-[100px] h-[50px] bg-[#2d2d2d] flex items-center justify-center">
                    <img className="w-[100%] object-cover h-[auto] p-1" src="https://feedup.uz/assets/images/logos/logo.svg" alt="logo" />
                </div>
                <Link to={'/'} onClick={ScrollID} className="px-[26px] flex items-center gap-2 justify-center">
                    <img className="w-[26px] h-[25px]" src="https://feedup.uz/assets/images/svg/star.svg" alt="" />
                    <p className="block lg:hidden xl:block">{t("xit")}</p>
                </Link>
                <div className="w-[100px] h-[50px] flex items-center justify-center gap-2">
                    <Link to={'/checkout'} className="relative">
                        {AllYigindi > 0 && (
                            <div className="bg-[red] flex items-center justify-center w-[16px] h-[16px] rounded-[50%] absolute left-[17px] bottom-[17px]">
                                <p className="text-[10px] text-[#fff]">{AllYigindi}</p>
                            </div>
                        )}
                        <img src="https://feedup.uz/assets/images/svg/bag.svg" alt="" />
                    </Link>
                    <div onClick={handleNavbar} className="ViewNav">
                        <img src="https://feedup.uz/assets/images/svg/home.svg" alt="" />
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Header;
