import { Link } from "react-router-dom";

const Page404 = () => {

    return (
   <div className="h-[70vh] flex items-center justify-center">
    <div className="flex items-center justify-center flex-col">
<img src="https://feedup.uz/_next/image?url=%2Fassets%2Fimages%2Fpng%2Ferror-404.png&w=384&q=75" alt="not found" />
<h1 className="font-bold text-[28px]">Sahifa topilmadi</h1>
<button className="w-[100%] h-[60px] bg-yellow-400 mt-[10px]">
<Link to={'/'}>
Asosiy menyuga Qaytish
</Link>
</button>
    </div>
   </div>
    );
}

export default Page404;