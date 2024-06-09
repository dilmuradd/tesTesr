import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/Auth";

const Account = () => {
    let navigate = useNavigate()
    let { SetisAuth } = useContext(AuthContext)
    let str = JSON.parse(localStorage.getItem('userInfo'))
    return (
        <div className="w-[100%] pb-[100px] lg:h-[800px] border flex p-[30px] items-center justify-center">
            <div className="h-[100%] border w-[100%] flex flex-col gap-[40px] lg:flex-row items-center justify-between border-black">

                <div className="w-[100%] lg:w-[30%] border h-[100%]">
                    <h1 className=" text-[20px]   mt-[20px] font-bold text-center">SHAXSIY MA'LUMOTLAR</h1>
                    <div className="w-[100%] px-[30px] mt-[30px] flex flex-col justify-start">
                        <label htmlFor="ism" className="text-[18px]">Ism<span className="text-red-500">*</span></label>
                        <input type="text" defaultValue={str.fullName} id="ism" className="border border-gray-400 h-[50px] pl-[10px]" placeholder="Bu yerga Kiriting" />
                    </div>
                    <div className="w-[100%] px-[30px] mt-[20px] flex flex-col justify-start">
                        <label htmlFor="fam" className="text-[18px]">Familya<span className="text-red-500">*</span></label>
                        <input type="text" id="fam" className="border border-gray-400 h-[50px] pl-[10px]" placeholder="Bu yerga Kiriting" />
                    </div>

                    <div className="w-[100%]  px-[30px] mt-[20px] flex flex-col justify-start">
                        <label htmlFor="email" className="text-[18px]">Email<span className="text-red-500">*</span></label>
                        <input type="email" defaultValue={str.email} id="email" className="border border-gray-400 h-[50px] pl-[10px]" placeholder="Bu yerga Kiriting" />
                    </div>

                    <div className="w-[100%]  px-[30px] mt-[20px] flex flex-col justify-start">
                        <label htmlFor="tel" className="text-[18px]">Joylashuv<span className="text-red-500">*</span></label>
                        <input type="text" id="tel" className="border border-gray-400 h-[50px] pl-[10px]" placeholder="Bu yerga Kiriting" />
                    </div>
                    <div className="w-[100%]  px-[30px] mt-[20px] flex flex-col justify-start">
                        <button className="bg-yellow-200 text-[15px] xl:text-[22px] font-bold h-[60px] w-[100%]" type="submit">O'zgartirishlarni Saqlash</button>

                    </div>

                    <div className="w-[100%]  px-[30px] mt-[20px] flex flex-col justify-start">
                        <button onClick={() => {
                            localStorage.clear()

                        }} className="border border-black text-[24px] font-bold h-[60px] w-[100%]" >Chiqish</button>

                    </div>
                </div>

                <div className="w-[100%] mb-[100px] lg:mb-[0] lg:w-[70%] h-[100%] border">

                    <div className="flex items-center justify-between p-[20px] px-[30px] border-b">
                        <h1 className="md:text-[28px] font-bold">
                            BUYURTMA TARIXI
                        </h1>
                        <h1 className="md:text-[28px] font-bold">
                            0 SO'M
                        </h1>
                    </div>

                    <div className="flex items-center justify-between border-b p-[10px]">
                        <div className="flex items-center justify-center text-[14px] gap-[20px] md:gap-[80px]">
                            <p className="font-bold text-[14px] md:text-[22px]" >#</p>
                            <div className="flex items-center justify-center gap-[10px] md:gap-[50px]">

                                <p className="font-bold text-[14px] md:text-[22px]" >Sana</p>
                                <p className="font-bold text-[14px] md:text-[22px]" >To'lov Usuli</p>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-center gap-[10px] md:gap-[50px]">

                                <p className="font-bold text-[14px] md:text-[22px]" >Holat</p>
                                <p className="font-bold text-[14px] md:text-[22px]" >Narx</p>
                            </div>
                        </div>
                    </div>



                </div>
            </div>

        </div>
    );
}

export default Account;