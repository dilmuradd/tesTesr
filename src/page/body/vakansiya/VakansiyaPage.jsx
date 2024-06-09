import { Link } from "react-router-dom";
import VakansiaCard from "./VakansiaCard";
import { useEffect, useState } from "react";
import axios from "axios";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const VakansiyaPage = () => {

    let [info, GetInfo] = useState([])


    let myBot = async () => {
        try {
            let AllBot = await axios.get('https://579162ced3e0ca31.mokky.dev/ish')
            GetInfo(AllBot.data)
        } catch (error) {
            console.log(error);
        }
    }
    console.log(info);

    useEffect(() => {
        myBot()
    }, [])

    return (
        <div>

{
                info.length === 0 && <div className='w-[100%] bg-[white] flex flex-col justify-start p-[20px]  gap-5 '>

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



            <div className="w-[100%] h-[80px]  flex items-center pl-[25px]">
                <p>
                    <Link to='/' className="hoverCursor" >Bosh sahifa
                    </Link> / <Link to={'/vacancies'} className="text-[orange]">
                        Ish o'rinlari</Link>
                </p>
            </div>





            <h1 className="text-[32px] font-bold pl-[50px] my-4">Ish o'rinlari</h1>



            <div className="flex justify-center items-center">

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 p-[20px]">

                    {
                        info.map((item) => {
                            return <VakansiaCard key={item.id} title={item.title} text1={item.text.text1} text2={item.text.text2} text3={item.text.text3} text4={item.text.text4} />

                        })
                    }







                </div>




            </div>


















        </div>
    );
}

export default VakansiyaPage;