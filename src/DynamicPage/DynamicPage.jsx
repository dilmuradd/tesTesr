import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BasketContext } from "../Context/Basket";

const DynamicPage = () => {
    let { BasketObject } = useContext(BasketContext)
    let Params = useParams()
    console.log(Params);
    let a = Params.id

    let [xit, setxit] = useState([])
    let getSwipper = async () => {
        try {

            let SwipperData = await axios.get(`https://579162ced3e0ca31.mokky.dev/xit/${a}`)
            setxit(SwipperData.data)
        } catch (error) {
        }
    }
    useEffect(() => {
        getSwipper()
    }, [Params.id])

    let [burger, setburger] = useState([])
    let getBurger = async () => {
        try {

            let BurgerData = await axios.get(`https://579162ced3e0ca31.mokky.dev/burger/${a.slice(1)}`)
            setburger(BurgerData.data)
        } catch (error) {
        }
    }
    useEffect(() => {
        getBurger()
    }, [Params.id])


    let [lavash, setlavash] = useState([])
    let getlavash = async () => {
        try {

            let LavashData = await axios.get(`https://579162ced3e0ca31.mokky.dev/lavash/${a.slice(1)}`)
            setlavash(LavashData.data)
        } catch (error) {

        }
    }
    useEffect(() => {
        getlavash()
    }, [Params.id])

    let [donar, setdonar] = useState([])
    let getDonar = async () => {
        try {

            let DonarData = await axios.get(`https://579162ced3e0ca31.mokky.dev/Donar/${a.slice(1)}`)
            setdonar(DonarData.data)
        } catch (error) {

        }
    }
    useEffect(() => {
        getDonar()
    }, [Params.id])


    let [sendvich, setsendvich] = useState([])
    let getSendvich = async () => {
        try {

            let SendData = await axios.get(`https://579162ced3e0ca31.mokky.dev/sendvich/${a.slice(1)}`)
            setsendvich(SendData.data)
        } catch (error) {
        }
    }
    useEffect(() => {
        getSendvich()
    }, [Params.id])

    let [xotdog, setxotdog] = useState([])
    let getXotDog = async () => {
        try {

            let XotData = await axios.get(`https://579162ced3e0ca31.mokky.dev/XotDog/${a.slice(1)}`)
            setxotdog(XotData.data)
        } catch (error) {
        }
    }
    useEffect(() => {
        getXotDog()
    }, [Params.id])

    let arr = [xit, burger, lavash, donar, sendvich, xotdog]

    return (
        <div className="lg:h-[60vh] flex mt-3 items-center justify-center text-center flex-col lg:flex-row lg:justify-between gap-2">
            <div className="lg:w-[50%]  h-[100%] flex items-center justify-center">
                <img src={xit.img || burger.img || lavash.img || donar.img || sendvich.img || xotdog.img} className="w-[70%]" alt="" />

            </div>

            <div className="lg:w-[50%] p-[30px]  h-[100%] lg:p-[50px]">
                <h1 className="font-bold text-[36px]">
                    {xit.title || burger.title || lavash.title || donar.title || sendvich.title || xotdog.title}
                </h1>
                <p className="text-[18px] lg:text-[22px] font-semibold mt-[20px]">
                    <span className="text-gray-500 font-bold">Batafsil:</span>     {xit.text || burger.text || lavash.text || donar.text || sendvich.text || xotdog.text}
                </p>
                <p className="lg:text-[28px] font-semibold mt-[20px]">
                    <span className="text-gray-500 font-bold">Narx:</span>      {xit.narx || burger.narx || lavash.narx || donar.narx || sendvich.narx || xotdog.narx} so'm
                </p>
                <div className="flex items-center justify-center active:scale-[0.9] transition-all">
                    <button onClick={() => BasketObject({
                        title: xit.title || burger.title || lavash.title || donar.title || sendvich.title || xotdog.title,
                        narx: xit.narx || burger.narx || lavash.narx || donar.narx || sendvich.narx || xotdog.narx,
                        img: xit.img || burger.img || lavash.img || donar.img || sendvich.img || xotdog.img,
                        text: xit.text || burger.text || lavash.text || donar.text || sendvich.text || xotdog.text
                    })} className="w-[300px] bg-yellow-400 font-bold h-[50px] mt-[32px]"> Savatga qo'shish</button>
                </div>

            </div>


        </div>
    );
}

export default DynamicPage;