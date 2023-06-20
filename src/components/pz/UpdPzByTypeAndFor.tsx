import React, {useContext, useEffect, useState} from 'react';
import {IUpdPz} from "../../models/IUpdPz";
import {Context} from "../../index";
import {PzService} from "../../service/PzService";
import {ToastTypes} from "../../models/enum/ToastTypes";
import {IToast} from "../../models/IToast";
import {FTP_URL_DOWNLOAD} from "../../http";


const UpdPzByTypeAndFor = () => {

    const [updPz, setUpdPz] = useState<IUpdPz[]>([])
    const {store} = useContext(Context)

    useEffect(() => {
        PzService.getAllUpdPz().then(res => {
            setUpdPz(res.data)

        }).catch(e => {
            store.addToast({type: ToastTypes.Error, content: e.data.message} as IToast)
        })
    }, [])

    function groupByTypeAndFor(data: IUpdPz[]) {
        return data.reduce((acc, obj) => {
            const {type, for: forValue} = obj;
            const key = `${type}-${forValue}`;

            // @ts-ignore
            if (!acc[key]) {
                // @ts-ignore
                acc[key] = [];
            }

            // @ts-ignore
            acc[key].push(obj);
            return acc;
        }, {});
    }


    const groupedData = groupByTypeAndFor(updPz);

    // @ts-ignore
    const uniqueTypes = [...new Set(updPz.map(obj => obj.type))];

    return (
        <div>
            {uniqueTypes.map(type => (
                <div className={"mt-10"} key={type}>
                    <h3 className={"text-4xl"}>{type}</h3>
                    {Object.keys(groupedData).map(key => {
                        const [itemType, forValue] = key.split('-');
                        // @ts-ignore
                        const items = groupedData[key];

                        if (itemType === type) {
                            return (
                                <ul key={key}>
                                    <div
                                        className={"grid grid-cols-2 my-2 border rounded-md  p-3 shadow-md border-[#252525]"}>
                                        <li className={"text-xl"}>{forValue}</li>
                                        <div className={"text-right"}>
                                            {items.map((item: any) => (
                                                <li className={"hover:text-yellow-400 duration-200"} key={item.id}>
                                                    <a href={FTP_URL_DOWNLOAD + item.src}>
                                                        {item.name}
                                                        <i className=" bi bi-cloud-download ml-3"></i>
                                                    </a>
                                                </li>
                                            ))}
                                        </div>
                                    </div>
                                </ul>
                            );
                        }

                        return null;
                    })}
                </div>
            ))}
        </div>
    );
}

export default UpdPzByTypeAndFor