import Filial from "./Filial";
import CardF from "./CardF";
import './card.scss'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const CardPage = () => {
    let xarita = useNavigate()

    let handleColor = (value) => {

        if (value == 'xizmatlar') {
            document.querySelector('.btn1').style.color = 'orange'
            document.querySelector('.btn2').style.color = '#000'

            document.querySelector('.box-1').style.display = 'grid'
            document.querySelector('.xarita-1').style.display = 'none'


            xarita('/branchs')
            return;
        } else {
            document.querySelector('.btn1').style.color = '#000'

            document.querySelector('.box-1').style.display = 'none'
            document.querySelector('.xarita-1').style.display = 'block'

            document.querySelector('.btn2').style.color = 'orange'
            xarita('/branchs?map')

        }

    }


    let [work, setWorkk] = useState([])

    let getWork = async () => {

        try {
            let getData = await axios.get('https://579162ced3e0ca31.mokky.dev/fillial')
            setWorkk(getData.data)
            console.log(getData.data);
        } catch (error) {
            console.log(error);
        }

    }
    useEffect(() => {
        getWork()
    }, [])


    return (


        <div>

            {
                work.length === 0 && <div className='w-[100%] bg-[white] flex flex-col justify-start p-[20px]  gap-5 '>

                    <div className='flex flex-wrap items-center justify-center gap-[70px]'>
                        <Skeleton height={500} width={400} />
                        <Skeleton height={500} width={400} />
                        <Skeleton height={500} width={400} />
                        <Skeleton height={500} width={400} />
                        <Skeleton height={500} width={400} />
                        <Skeleton height={500} width={400} />

                    </div>


                </div>
            }
            <Filial link={'/branches'} textLink={'Filial'} />


            <div
                className="
flex
items-center 
justify-center
p-[10px]
"
            >

                <div className="w-[1224px] border h-[100vh]">

                    <div className="box">
                        <div>
                            <h1 className=" font-[700] text-[20px] py-[10px] sm:py-0">Fillial</h1>
                        </div>
                        <div className="btn-box">

                            <button value={'xizmatlar'} onClick={(e) => handleColor(e.target.value)} className="px-[18px] btn1 py-[10px] md:px-[52px] border-l-[1px] h-full md:h-[96px] text-orange-500 border-[#D2D2D2] ">
                                Xizmatlar
                            </button>
                            <button value={'xarita'} onClick={(e) => handleColor(e.target.value)} className="px-[18px] btn2 py-[10px] md:px-[52px] border-l-[1px] h-full md:h-[96px] border-[#D2D2D2] ">
                                Xarita
                            </button>

                        </div>
                    </div>



                    <div className="grid grid-cols-1 box-1 lg:grid-cols-2 ">
                        {
                            work.map((item) => {
                                return <CardF key={item.id} title={item.title} location={item.location} time={item.time} phone={item.phone} />

                            })
                        }

                    </div>
                    <div className="w-[100%] h-[100%] hidden p-[60px] xarita-1">

                        <iframe
                            style={{ width: "100%", height: "100%" }}
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345096745!2d144.95373531531664!3d-37.81627927975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5778b315d827a1!2sGoogle!5e0!3m2!1sen!2sau!4v1572592825067!5m2!1sen!2sau"
                            allowFullScreen
                        ></iframe>

                    </div>

                </div>






            </div>


        </div>
    );
}

export default CardPage;