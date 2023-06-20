import React from 'react';
import UpdPzByTypeAndFor from "../../components/pz/UpdPzByTypeAndFor";

const UpdatePz = () => {
    return (
        <div
            className={"flex flex-col justify-center items-center min-h-[77vh] proba-pro-medium mb-10 mt-5 w-full"}>
            <p className={"proba-pro-bold text-[6vh]"}> Оновлення прошивок і ОС</p>
            <div className={" border rounded shadow p-10 max-w-[75vw] min-w-[50vw]"}>
                    <UpdPzByTypeAndFor/>
            </div>

        </div>
    );
};

export default UpdatePz;