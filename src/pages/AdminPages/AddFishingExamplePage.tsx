import React, {useContext, useState} from 'react';
import {IFishing} from "../../models/IFishing";
import {Context} from "../../index";
import {IToast} from "../../models/IToast";
import {ToastTypes} from "../../models/enum/ToastTypes";
import {FishingService} from "../../service/FishingService";

const AddFishingExamplePage = () => {

    const [newFishing, setNewFishing] = useState<IFishing>({
        fakeSender: "",
        sender: "",
        description: "",
        date: new Date(),
        img: "",
    } as IFishing)

    const [selectedFile, setSelectedFile] = useState<File>()

    const handleFileChange = (event: any) => {
        setSelectedFile(event.target.files[0]);
    };

    const {store} = useContext(Context)

    const createFishing = () => {
        if (newFishing.description !== "" && newFishing.sender !== "" &&
            newFishing.fakeSender !== "" && selectedFile !== undefined) {
            FishingService.addFishing(newFishing, selectedFile).then(res => {
                store.addToast({content: "Приклад успішно доданий", type: ToastTypes.Successful} as IToast)
                setNewFishing({fakeSender: "", sender: "", description: "", date: new Date(), img: "",} as IFishing)
                console.log(res)
            }).catch(e => {
                store.addToast({content: e.response.data.message, type: ToastTypes.Error} as IToast)
            })
        } else {
            store.addToast({content: "Поля введені неккоректно", type: ToastTypes.Warning} as IToast)
        }
    }

    return (
        <>
            <div className={"flex flex-col items-center proba-pro-medium  "}>
                <p className={"proba-pro-bold text-3xl mb-3 flex justify-center items-center gap-4"}>
                    Додати новий приклад фішингу
                    <i className="text-5xl   bi bi-bug"></i>

                </p>
                <div className={"grid grid-cols-2 gap-10 items-center border p-8 shadow-md mb-14  text-xl"}>
                    <label htmlFor="">Підробний відправник</label>
                    <input value={newFishing.fakeSender} onChange={e => {
                        setNewFishing({...newFishing, fakeSender: e.target.value})
                    }} className={"border rounded-md"} type="text"/>

                    <label htmlFor="">Відпраник(зловмисник)</label>
                    <input value={newFishing.sender} onChange={e => {
                        setNewFishing({...newFishing, sender: e.target.value})
                    }} className={"border rounded-md"} type="text"/>

                    <label htmlFor="">Опис</label>
                    <textarea value={newFishing.description} onChange={e => {
                        setNewFishing({...newFishing, description: e.target.value})
                    }} className={"border rounded-md"}/>

                    <label htmlFor="">Фото прикладу</label>
                    <input onChange={e => handleFileChange(e)} className={"border rounded-md"} type="file"/>

                    <div className={"col-span-2 flex justify-center"}>
                        <button onClick={createFishing}
                                className={"border-2  col-span-2 hover:scale-110 duration-200 border-[#ffd423] px-8 py-2 rounded-[150px]"}>
                            Додати
                        </button>
                    </div>
                </div>

            </div>
        </>
    );
};

export default AddFishingExamplePage;