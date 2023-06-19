import React, {useEffect, useState} from 'react';
import FishingCard from "../components/cards/FishingCard";
import {IFishing} from "../models/IFishing";
import PaginationControl from "../components/PaginationControl";
import {FishingService} from "../service/FishingService";

const FishingPage = () => {

    const [fishingData, setFishingData] = useState<IFishing[]>([])
    const [page, setPage] = useState<number>(1)
    const [limit, setLimit] = useState<number>(8)
    let [countPages, setCountPages] = useState<number>(0)

    useEffect(() => {
        FishingService.getFishingPaginated(page, limit).then(res => {
            setFishingData(res.data)
            console.log(fishingData)
        })
        FishingService.getCountFishing().then(res => {
            setCountPages(Math.ceil(res.data / limit))
            setPage(1)
        })
    }, [])

    useEffect(() => {
        FishingService.getFishingPaginated(page, limit).then(res => {
            setFishingData(res.data)
        })
    }, [page])

    useEffect(() => {
        FishingService.getFishingPaginated(page, limit).then(res => {
            setFishingData(res.data)
        })
        FishingService.getCountFishing().then(res => {
            setCountPages(Math.ceil(res.data / limit))
            setPage(1)
        })

    }, [limit])

    return (<>
            <div className={"flex justify-start items-center min-h-[77vh]  flex-col proba-pro-medium pb-5"}>

                <p className={"proba-pro-bold text-[6vh]"}>Фішинг
                    <i className="bi bi-exclamation-triangle ml-4"></i>
                </p>
                <p className={"proba-pro-light w-[28vw] text-center"}>
                    Загальна база електронних листів, які містять шкідливі файли або посилання.
                    Пошук можливий по ймовірно зловмисному відправнику або по змісту повідомлення
                </p>

                <div className={"flex justify-center my-5 "}>
                    <div className={"flex rounded-[150px] border border-black items-center pr-5"}>
                        <input type="text" className={'rounded-l-[150px] w-[30vw] focus:border-none border-none'}/>
                        <div className={"flex justify-center ml-2"}>
                            <i className="bi bi-search"></i>
                        </div>
                    </div>

                    <div className={"ml-4"}>
                        <input className={"rounded-[150px] border border-black"} type="date"/>
                    </div>
                </div>
                <PaginationControl countPages={countPages} page={page} setPage={setPage} limit={limit}
                                   setLimit={setLimit}/>
                {fishingData.map((card, index) => (
                    <div key={index}
                        className={(index % 2 === 0 ? "bg-[#F9F9F9] " : "bg-white ") + " w-screen flex justify-center my-5"}>
                        <FishingCard cardData={card}/>
                    </div>
                ))}

                <PaginationControl countPages={countPages} page={page} setPage={setPage} limit={limit}
                                   setLimit={setLimit}/>

            </div>
        </>
    );
};

export default FishingPage;