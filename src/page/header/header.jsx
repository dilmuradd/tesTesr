import { Link } from "react-router-dom";
import './header.scss'
import { ScrollContext } from "../../Context/ScrollContext";
import { useContext } from "react";
import { BasketContext } from "../../Context/Basket";

const Header = () => {
    let { ScrollID,menu } = useContext(ScrollContext)
    let { AllYigindi, handleNavbar } = useContext(BasketContext)



    return (
        <div className="relative">





            <header className=" lg:flex mx-auto border-b  hidden    justify-between  text-[18px] h-full ">
                <div className="w-[105px] h-[78px] lg:w-[11vw] lg:h-[76px] bg-[#2d2d2d] flex items-center justify-center">
                    <img className="w-[100%] h-[auto] p-1 " src="https://feedup.uz/assets/images/logos/logo.svg" alt="logo" />
                </div>
                <nav className="border-b-none px-[26px] py-[24px] ml-[20px] mr-[9px] xxl:mx-[38px] hidden lg:flex h-[100%] items-center gap-[31px] ">
                    <Link onClick={()=>menu()}>Menyu</Link>
                    <Link className="link" to="/branchs">Filial</Link>
                    <Link className="link" to="/vacancies">Ish o'rinlari</Link>
                    <Link className="link" to="/news">Yangiliklar</Link>
                    <Link className="link" to="/aboutus">Biz haqimizda</Link>
                </nav>
                <Link to={'/'} onClick={ScrollID} className="py-[24px] border border-b-0  px-[26px] flex items-center gap-2 justify-center">
                    <img className="w-[26px] h-[25px]" src="https://feedup.uz/assets/images/svg/star.svg" alt="" />
                    <p className=" cursor-pointer block lg:hidden  xl:block"  >XIT Sotuvlar</p>
                </Link>




                <div className="flex items-center justify-center ">

                    <div className="flex absolute gap-5 right-0 lg:static">

                        <div className="    flex items-center justify-center gap-2  ">
                            <Link className="cursor-pointer flex items-center justify-center relative gap-2" to={'/checkout'}>
                                {
                                    AllYigindi > 0 ? <div className="bg-[red] flex items-center justify-center w-[16px] h-[16px] rounded-[50%] absolute left-[17px] bottom-[17px]">
                                        <p className="text-[10px] text-[#fff]">{AllYigindi}</p>

                                    </div> : null

                                }



                                <img src="https://feedup.uz/assets/images/svg/bag.svg" alt="" />
                                <p className=" hidden lg:hidden xl:flex ">Savatcha</p>
                            </Link>
                        </div>




                    </div>

                </div>







                <div>

                    <div className=" hidden lg:flex items-center border border-b-0 h-[80px] px-[20px] gap-3 justify-center">
                        <img className="w-[26px] h-[25px]" src="https://feedup.uz/_next/image?url=%2Fassets%2Fimages%2Fpng%2Fflag-uz.png&w=32&q=75" alt="test" />
                        UZ
                    </div>



                </div>

                <div className="   border-b-0 hidden   lg:flex lg:py-[20px] lg:px-[26px] items-center justify-center cursor-pointer">
                    <img src="https://feedup.uz/assets/images/svg/logout.svg" alt="" />

                </div>











            </header>
            <div className="flex border-b lg:hidden justify-between  top-0 w-[100%]">
                <div className="w-[100px] h-[50px] bg-[#2d2d2d] flex items-center justify-center">
                    <img className="w-[100%] object-cover h-[auto] p-1 " src="https://feedup.uz/assets/images/logos/logo.svg" alt="logo" />

                </div>


                <Link to={'/'} onClick={ScrollID} className="  px-[26px] flex items-center gap-2 justify-center">
                    <img className="w-[26px] h-[25px]" src="https://feedup.uz/assets/images/svg/star.svg" alt="" />
                    <p className=" block lg:hidden  xl:block" >XIT Sotuvlar</p>
                </Link>

                <div className="w-[100px] h-[50px]  flex items-center justify-center gap-2">
                    <Link to={'/checkout'} className="relative">
                        {
                            AllYigindi > 0 ? <div className="bg-[red] flex items-center justify-center w-[16px] h-[16px] rounded-[50%] absolute left-[17px] bottom-[17px]">
                                <p className="text-[10px] text-[#fff]">{AllYigindi}</p>

                            </div> : null

                        }
                        <img src="https://feedup.uz/assets/images/svg/bag.svg" alt="" />
                    </Link>
                    <div onClick={handleNavbar} className="ViewNav">

                        <img src="https://feedup.uz/assets/images/svg/home.svg" alt="" />
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Header;
