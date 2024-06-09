import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { BasketContext } from "../Context/Basket";
const Checkout = () => {


    let handleChecked1 = (id) => {

        let check1 = document.querySelector('.check1')
        let check2 = document.querySelector('.check2')


        check1.style.background = '#FECC00'
        check2.style.background = '#fff'


    }


    let handleChecked2 = (id) => {

        let check1 = document.querySelector('.check1')
        let check2 = document.querySelector('.check2')

        check1.style.background = '#fff'
        check2.style.background = '#FECC00'


    }
    let { TestObject, TestAddButton, ArrBasket, SetArrBasket, AddCount, MinusCount, AllSum, SetDynamicPageObject } = useContext(BasketContext)


    let handleClear = () => {
        SetArrBasket([])
        localStorage.clear()
    }

    return (




        <div>
            <div className="w-[100%] h-[80px]  flex items-center justify-between relative pl-[25px]">
                <p>
                    <Link to='/' className="hoverCursor" >Bosh sahifa
                    </Link> / <Link to={'/checkout'} className="text-[orange]">

                        Buyurtma berish</Link>
                </p>

            </div>

            <div className="flex items-center justify-center p-0 md:p-[50px]">


                <div className="w-[100%] h-[auto] p-[20px] lg:h-[950px] border-2 flex-col flex items-center lg:flex-row lg:justify-between ">

                    <div className="h-full w-[100%] lg:w-[60%] border-2 p-[30px]">
                        <h1 className="font-bold text-[18px] md:text-[20px] lg:text-[28px] ">
                            BUYURTMA BERISH
                        </h1>

                        <h2 className=" text-[16px] md:text-[18px] lg:text-[26px] mt-[15px]">
                            Shaxsiy ma'lumotlar
                        </h2>




                        <form >

                            <div className="flex items-center gap-[30px] flex-col md:flex-row md:gap-[100px] mt-[30px] md:justify-between">

                                <div className=" w-[100%] md:w-[50%]">
                                    <label htmlFor="ism" className="text-[18px] text-[gray] ">Ism<span className="text-[red]">*</span></label>
                                    <input id="ism" type="text" placeholder="Bu yerga kiriting" className=" pl-[10px] border mt-[10px] w-[100%] h-[55px]" />
                                </div>
                                <div className=" w-[100%] md:w-[50%]">
                                    <label htmlFor="phone" className="text-[18px] text-[gray] ">Telefon raqami<span className="text-[red]">*</span></label>
                                    <input id="phone" type="text" placeholder="Bu yerga kiriting" className=" pl-[10px] border mt-[10px] w-[100%] h-[55px]" />
                                </div>




                            </div>

                            <div className="flex items-center gap-9 py-[30px]">

                                <div className="flex items-center gap-1 cursor-pointer" onClick={() => handleChecked1()}>
                                    <p className=" text-[18px] font-bold">Yetkazib Berish</p>
                                    <div id="a" className="w-[30px] check1 h-[30px] border-2 bg-[#FECC00] rounded-sm cursor-pointer flex items-center justify-center text-[#fff]">
                                        <i className="fa-solid fa-check"></i>
                                    </div>

                                </div>

                                <div className="flex items-center gap-1 cursor-pointer" onClick={() => handleChecked2()}>
                                    <p className=" text-[18px] font-bold">Borib Olish</p>
                                    <div id="b" className="w-[30px] border-2 h-[30px] check2 bg-[#fff] rounded-sm cursor-pointer flex items-center justify-center text-[#fff]">
                                        <i className="fa-solid fa-check"></i>
                                    </div>

                                </div>


                            </div>

                            <Link className="underline text-[18px]" to={'/location'}>
                                <i className="fa-solid fa-location-dot mr-1"></i>
                                Manzilni tanlang
                            </Link>
                            <h2 className="text-[26px] mt-[15px]">
                                To'lov usuli
                            </h2>

                            <div className="border-yellow-400 border w-[100%] h-[60px] mt-[20px] flex gap-4 items-center px-[20px]">
                                <div id="a" className="w-[30px] check1 h-[30px] border-2 bg-[#FECC00] rounded-sm cursor-pointer flex items-center justify-center text-[#fff]">
                                    <i className="fa-solid fa-check"></i>
                                </div>
                                <img src="https://feedup.uz/_next/image?url=%2Fassets%2Fimages%2Fpng%2Fcash.png&w=48&q=75" alt="wallet" />
                                <p>
                                    naqd pul
                                </p>
                            </div>

                            <h2 className="text-[26px] mt-[15px]">
                                Izoh
                            </h2>

                            <textarea name="izoh" className="border-yellow-400 border w-[100%] h-[300px] pl-[10px] pt-[10px]" placeholder="Masalan 104-uy 2-yo'lak 4-qavat 103-honadon eshik kodi 1234" ></textarea>



                        </form>




                    </div>

                    <div className="h-full w-full lg:w-[40%] border-1">




                        <div className="border w-[100%] max-h-[50%] overflow-y-auto relative">
                            {/* <div className="h-[500px]">

                            </div> */}




                            {
                                ArrBasket.map((value) => {

                                    return (
                                        <div key={value.id} className="w-[100%] border  h-[150px] flex items-center">

                                            <div className="border-l w-[30%] border h-[100%] flex items-center justify-center">
                                                <img className="object-cover w-[150px] h-[auto]" src={value.img} alt="food" />
                                            </div>
                                            <div className="flex items-start flex-col w-[70%] justify-between p-[5px] md:p-[30px] ">

                                                <h1 className="font-bold text-[16px] md:text-[19px]">{value.title}</h1>

                                                <div className="mt-[10px] w-[100%] flex items-center justify-between">
                                                    <p className="font-bold text-yellow-500">{value.count}x</p>
                                                    <h1 className="relative hidden md:block right-2  text-gray-400">{value.narx}</h1>

                                                    <div className="flex items-center gap-4">

                                                        <p className="text-[green] cursor-pointer" onClick={() => MinusCount(value)}><i className="fa-solid fa-minus"></i></p>
                                                        <p className="text-[18px] font-bold">{value.count}</p>
                                                        <p className="text-[green] cursor-pointer" onClick={() => AddCount(value)} ><i className="fa-solid fa-plus"></i></p>
                                                    </div>

                                                </div>


                                            </div>

                                        </div>
                                    )



                                })
                            }






                        </div>











                        <div className="p-[20px] border">

                            <p className="text-[18px] mt-[20px] font-bold">
                                Promo-kod
                            </p>
                            <div className="w-[100%]  border-yellow-400 h-[50px] border mt-[10px] flex items-center">
                                <input type="text" placeholder="Bu yerga kiriting" className="h-[100%] w-[80%] border pl-[10px] outline-none" />
                                <button className="h-[100%] text-[12px] md:text-[14px] xl:text-[18px] font-bold w-[20%] bg-yellow-400">
                                    Yuborish
                                </button>

                            </div>
                        </div>


                        <p className="text-[18px] pl-[20px] mt-[20px] font-bold">
                            Jami:
                        </p>

                        <div className="w-[100%] flex pl-[20px] items-center justify-between pt-[10px] p-[5px]">
                            <p className="font-bold">
                                Mahsulot:
                            </p>
                            <p className="font-mono">
                                0 so'm
                            </p>
                        </div>


                        <div className="w-[100%] pl-[20px] flex items-center justify-between p-[5px]">
                            <p className="font-bold">
                                Yetkazib Berish:
                            </p>
                            <p className="font-mono">
                                11000 so'm
                            </p>
                        </div>
                        <div className="w-[100%] border-b pl-[20px] flex items-center justify-between p-[5px]">
                            <p className="font-bold">
                                Promo-kod:
                            </p>
                            <p className="font-mono">
                                0 so'm
                            </p>
                        </div>
                        <div className="w-[100%] pl-[20px]  flex items-center justify-between p-[5px]">
                            <p className="text-[18px] mt-[20px] font-bold">
                                To'lash:
                            </p>
                            <p className="font-mono">
                                {AllSum}
                            </p>
                        </div>

                        <div className="w-[100%] pl-[20px] flex items-center justify-between p-[5px]">
                            <p className="text-[16px] font-bold">
                                Yetkazib Berish Vaqti:
                            </p>
                            <p className="font-mono">
                                40 daqiqa
                            </p>
                        </div>

                        <div className="flex items-center justify-center p-[10px]">

                            <button className="w-[100%] h-[50px] font-bold text-[18px] bg-yellow-400 ">
                                Buyrutma Berish

                            </button>

                        </div>
                        <p className="text-[red] cursor-pointer mt-[20px] text-[18px] text-center " onClick={handleClear}><i className="fa-solid fa-trash"></i> O'chirib tashlash</p>


                    </div>

                </div>


            </div>



        </div>

    );
}

export default Checkout;