import { createContext, useEffect, useState } from "react";


export let BasketContext = createContext()



export let BasketProvider = ({ children }) => {
    let storage = JSON.parse(localStorage.getItem('basket')) || [];
    let [ArrBasket, SetArrBasket] = useState(storage);

    let [AllYigindi, SetAllYigindi] = useState(0)
    let [AllSum, SetAllSum] = useState(0)

    let [DynamicPageObject, SetDynamicPageObject] = useState()
    // let [DynamicPage_Minus,SetDynamicPage_Minus] = useState()


    let [NoneBlock, SetNOneBlock] = useState(false)

    let BasketObject = (data) => {

        SetNOneBlock(true)
        let TrueOrFalse = ArrBasket.some((item) => item.id === data.id)

        if (!TrueOrFalse) {
            let newData = { ...data, count: 1 };
            SetArrBasket([...ArrBasket, newData])
        } else {
            let updateBasket = ArrBasket.map((count1) => {
                if (count1.id === data.id) {

                    return { ...count1, count: count1.count + 1 }

                }

                return count1

            })



            SetArrBasket(updateBasket)


        }



        console.log(data);

        ArrBasket.map((value) => {
            if (value.id === data.id) {
                SetDynamicPageObject(() => ({
                    ...value,
                    count: value.count + 1,
                }))
            }
        })










    }





    let AddCount = (data) => {
        SetDynamicPageObject(null)
        let updateBasket = ArrBasket.map((count1) => {
            if (count1.id === data.id) {

                return { ...count1, count: count1.count + 1 }

            }
            return count1

        })
        SetArrBasket(updateBasket)
        localStorage.setItem('basket', JSON.stringify(ArrBasket))


    }

    let MinusCount = (data) => {
        let updateBasket = ArrBasket.map((count1) => {
            if (count1.id === data.id) {
                if (count1.count > 1) {

                    return { ...count1, count: count1.count - 1 }
                }
                return null;
            }
            return count1

        })
        updateBasket = updateBasket.filter(element => element !== null)
        SetArrBasket(updateBasket)



    }

    useEffect(() => {
        let Yigindi = ArrBasket.reduce((a1, a2) => a1 + a2.count, 0)
        SetAllYigindi(Yigindi)
        localStorage.setItem('basket', JSON.stringify(ArrBasket))
    }, [AddCount, ArrBasket])

    useEffect(() => {
        let YigindiNarx = ArrBasket.reduce((s1, s2) => s1 + (parseInt(s2.narx) * parseInt(s2.count)), 11000)
        SetAllSum(YigindiNarx)
        localStorage.setItem('basket', JSON.stringify(ArrBasket))

    }, [AddCount, ArrBasket])

    let [MyNav, SetMyNav] = useState('')
    let handleNavbar = () => {
        SetMyNav('block')
    }


    console.log(AllYigindi);
    return (
        <BasketContext.Provider value={{
            SetDynamicPageObject,
            DynamicPageObject,
            BasketObject,
            NoneBlock,
            ArrBasket,
            AddCount,
            MinusCount,
            AllYigindi,
            AllSum,
            SetArrBasket,
            handleNavbar,
            MyNav,
            SetMyNav
        }}>
            {children}
        </BasketContext.Provider>
    )

}