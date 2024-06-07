import { useSwiper } from "swiper/react";

const SwipperPrev = () => {
    let set = useSwiper()
    return (
        <div className="flex items-center justify-center gap-8 mt-[30px]">
            <button className="h-[60px] w-[60px] text-[32px] border-2 flex items-center justify-center" onClick={() => set.slidePrev()}>
                <i className="fa-solid fa-chevron-left"></i>

            </button>
            <button className="h-[60px] w-[60px] text-[32px] border-2 flex items-center justify-center" onClick={() => set.slideNext()}>
                <i className="fa-solid fa-chevron-right"></i>

            </button>
        </div>
    );
}


export const SwipperPrevM = () => {
    let set = useSwiper()
    return (
        <div className="flex items-center  justify-between p-[10px] gap-8 mt-[30px] relative bottom-[120px] ">
            <button className="h-[60px] relative z-10 hover:bg-white w-[60px] text-[32px] border-2 flex items-center justify-center" onClick={() => set.slidePrev()}>
                <i className="fa-solid fa-chevron-left"></i>

            </button>
            <button className="h-[60px] relative z-10 hover:bg-white w-[60px] text-[32px] border-2 flex items-center justify-center" onClick={() => set.slideNext()}>
                <i className="fa-solid fa-chevron-right"></i>

            </button>
        </div>
    );
}


export default SwipperPrev;