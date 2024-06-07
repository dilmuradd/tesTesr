import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const NewsPage = () => {

    let [NewsData, SetaNewsData] = useState([])

    let getNews = async () => {
        try {
            let CollectData = await axios.get('https://579162ced3e0ca31.mokky.dev/news')
            SetaNewsData(CollectData.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getNews()
    })
let [cardObj,setCardobj] = useState()
let SetCard = (cardObject)=>{
console.log(cardObject);
setCardobj(cardObject)
}

    return (
        <div>


            <div className="w-[100%] h-[80px] border-b  flex items-center pl-[25px]">
                <p>
                    <Link to='/' className="hoverCursor" >Bosh sahifa
                    </Link> / <Link to={'/news'} className="text-[orange]">

                        Yangiliklar</Link>
                </p>
            </div>


            <h1 className="text-[32px] font-bold pl-[50px] my-4">Yangiliklar</h1>





            <div className="flex items-center  justify-center p-[30px] ">


                <div className="w-[100%] flex-col bg-gray-100  border flex gap-5 xl:flex-row xl:justify-between">



                    <div className="  w-[100%] xl:w-[50%] xl:h-[100%] border bg-gray-50">
                        <div className="w-[100%] h-[60%] border">
                            <img className="w-[100%] h-[100%] object-cover" src={`
                            ${cardObj ? cardObj.img : 'https://feedup.uz/_next/image?url=https%3A%2F%2Fapi.feedup.uz%2Fapi%2Fmedia%2Fnews%2F%25D0%259D%25D0%259E%25D0%2592%25D0%259E%25D0%25A1%25D0%25A2%25D0%2598_1.jpg&w=640&q=75'}
                            `} alt="" />
                        </div>

                        <div className="p-[30px] pt-[60px] new-record  cursor-pointer">
                            <h2 className="text-[26px] font-bold">{
                            
                            cardObj ? cardObj.title : 'Feed Up Urgenchda tez kunda...'
                            
                            }</h2>
                            <p className="text-[20px] mt-[15px] text-[gray]">
                                {cardObj ? cardObj.text : `Feed Up 36-filial Urgenchda tez kunda ochilish marosimi bo'lib o'tadi.`}
                            </p>
                            <p className="text-[18px] mt-[15px]">
                                
                                {cardObj ? cardObj.sana : '24.04.2024'}
                                </p>
                        </div>


                    </div>


                    <div className=" h-[100%] w-[100%] relative xl:w-[50%]">





                            {
                                NewsData.map((item) => {
                                    return (


                                        <div key={item.id} className="  border w-[100%] p-[40px]   bg-gray-50">
                                            <h1 className="text-[24px] ">{item.title}</h1>
                                            <p className="text-[18px] mt-[10px] text-gray-400">{item.text}</p>
                                            <div className="flex  items-center justify-between">
                                                <p>{item.sana}
                                                </p>

                                                <button onClick={()=>SetCard(item)} className="text-[20px] border-b-4 mt-[15px]">Ko'proq</button>


                                            </div>
                                        </div>


                                    )
                                })
                            }
                     






                    </div>

                </div>



            </div>






        </div>
    );
}

export default NewsPage;