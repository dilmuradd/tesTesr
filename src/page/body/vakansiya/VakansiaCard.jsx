import axios from "axios";
import { useEffect, useState } from "react";

const VakansiaCard = ({text1,text2,text3,text4,title}) => {




    return (
        
<div  className="border h-[auto] md:h-[800px] relative p-[70px]">
<div className="flex items-center justify-between border-b pb-[15px]">
    <div >
<h2 className="text-[22px]">Biz izlayapmiz:</h2>
<h1 className="text-[22px] font-bold">{title}</h1>
    </div>
    <div className="p-[5px] bg-[#fecc00]">
   <img className="w-[30px] h-[30px]" src="https://feedup.uz/_next/image?url=https%3A%2F%2Fapi.feedup.uz%2Fapi%2Fmedia%2Fvacancies%2Fcall-center.png&w=48&q=75" alt="" />
    </div>
</div>
<div className="mt-[30px] flex flex-col gap-4">

<div className="flex items-center gap-2">
 <img className="w-[10px]" src="https://pngimg.com/d/circle_PNG41.png" alt="" />

<p>{text1}</p>

</div>

<div className="flex items-center gap-2">
 <img className="w-[10px]" src="https://pngimg.com/d/circle_PNG41.png" alt="" />

<p>{text2}</p>

</div>

<div className="flex items-center gap-2">
 <img className="w-[10px]" src="https://pngimg.com/d/circle_PNG41.png" alt="" />

<p>{text3}</p>

</div>

<div className="flex items-center gap-2">
 <img className="w-[10px]" src="https://pngimg.com/d/circle_PNG41.png" alt="" />

<p>{text4}</p>

</div>





</div>
<div className="h-[100px] mt-[30px]">

<div className="absolute left-0 bottom-7 w-[100%] flex justify-center gap-4 items-center flex-col">
<button className="w-[80%] h-[50px] bg-[#fecc00] cursor-pointer text-[22px]">Ariza Topshirsh</button>
<button className="w-[80%] h-[50px] bg-[transparent] cursor-pointer border text-[22px]">Ko'proq</button>

</div>
</div>



</div>
    );
}

export default VakansiaCard;