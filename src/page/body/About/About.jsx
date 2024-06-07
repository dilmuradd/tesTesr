import { Link } from "react-router-dom";
import './about.scss'
const About = () => {

    return (
        <div>

            <div className="w-[100%] h-[80px] border-b  flex items-center pl-[25px]">
                <p>
                    <Link to='/' className="hoverCursor" >Bosh sahifa
                    </Link> / <Link to={'/news'} className="text-[orange]">

                        Biz haqimizda</Link>
                </p>
            </div>


            <h1 className="text-[32px] font-bold pl-[50px] my-4">Biz haqimizda</h1>

            {
                ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
            }




            <div className="flex items-center  justify-center p-[10px]">

                <div className="w-[100%] h-[auto] border">

                    <div className="w-[100%] h-[auto] border">
                        <img className="w-[100%] h-[100%] object-cover" src="https://feedup.uz/_next/image?url=%2Fassets%2Fimages%2Fpng%2Faboutus.png&w=1920&q=75" alt="about" />
                    </div>


                    <div className="w-[100%] h-[auto] lg:h-[700px] border flex items-center flex-col lg:flex-row lg:justify-between">

                        <div className=" w-[100%] lg:w-[50%] h-[100%] border-2 p-[30px]">
                            <h1 className="text-[26px] font-bold mt-[20px]">
                                FeedUp haqida
                            </h1>

                            <p className="text-[20px] text-gray-400 mt-[20px]">
                                Feed Up bu O'zbekistondagi tez taomlanish tarmog'i bo'lib , 34 ta filialga ega. <br />
                                Birinchi filial Algoritmda ochilgan, kompaniya dastlab Dastyor  nomi <br /> bilan, keyin Bisyor nomi bilan faoliyat yuritgan. <br />
                                2016-yilda kompaniya oldiga katta maqsadlar rejalar qo'yiladi <br /> va kompaniya rebrending amalga oshirib hozirgi siz bilgan Feed Up <br /> tarmog'iga aylantiriladi!
                            </p>


                        </div>



                        <div className="w-[100%] lg:w-[50%] h-[100%] border-2">

                            <div className="w-[100%] h-[auto] border p-[30px]">
                                <h1 className="text-[26px] font-bold mt-[20px]">
                                    Asoschisi
                                </h1>

                                <p className="text-[20px] text-gray-400 mt-[20px]">
                                    Kompaniyaga 2010-yilda Umid Irgashev tomonidan asos solingan. <br />
                                    <br />
                                    Hozirga kelib kompaniyamizda 600 ga yaqin xodimlar ishlaydi.
                                </p>

                            </div>


                            <div className="float-start p-[20px]">

                                <h1 className="text-[26px] font-bold mt-[20px]">
                                    Taklif va hamkorlik uchun
                                </h1>

                                <p className="text-[22px] mt-[20px]">
                                    Ofis manzili: <a className="newStyle" href="https://yandex.uz/maps/-/CDRy4XOK" target="_blank">Toshkent shahar, Shayxontohur tumani, ko'kcha darvoza 10B</a>
                                </p>


                                <p className="text-[22px]">
                                    Ish vaqti: <span className="font-mono text-[16px]">
                                        9:00 - 18:00
                                    </span>
                                </p>

                                <p className="text-[22px]">
                                    Telefon raqami: <a className="newStyle" href="tel:+998 71 200 22 11">+998 71 200 22 11</a>

                                </p>
                                <p className="text-[22px]">
                                    Email: feedupuzb@gmail.com <a className="newStyle" href="gmail.com" target="_blank">feedupuzb@gmail.com</a>

                                </p>


                                <img className="h-[60px] mt-[15px]" src="https://feedup.uz/assets/images/logos/logo-public.svg" alt="" />
                            </div>


                        </div>

                    </div>






                </div>





            </div>







        </div>
    );
}

export default About;