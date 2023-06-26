import React, {FC, useRef, useState} from 'react';

interface PaginationProps {
    page: number;
    setPage: (page: number) => any;
    countPages: number;
    limit: number;
    setLimit: (limit: number) => any;
}

const PaginationControl: FC<PaginationProps> = ({page, limit, setPage, countPages, setLimit}) => {

    const [inputPage, setInputPage] = useState<number>(page)
    const [inputPageIsActive, setInputPageIsActive] = useState<boolean>(false)

    const inputRef = useRef(null)
    const handleClick = () => {
        // @ts-ignore
        inputRef.current.focus();
    };

    return (
        <div className={"flex w-full justify-center items-center "}>
            <div className={"flex flex-col items-center proba-pro-light"}>
                <div className={"border-2 rounded-xl flex items-center justify-center px-3 py-1"}>
                    <button className={"proba-pro-bold text-3xl "}
                            onClick={() => {
                                if (page !== 1) {
                                    setPage(page - 1)
                                    setInputPage(inputPage - 1)
                                }
                            }}>-
                    </button>
                    <div onClick={() => {
                        handleClick()
                    }} className={"flex items-center justify-center relative"}>
                        <button onClick={() => {
                            setPage(1)
                            setInputPage(1)
                        }} className={"hover:text-blue-500 duration-100 ml-3 mr-6"}>
                            1 ...
                        </button>

                        <input ref={inputRef} onChange={e => {
                            setInputPage(Number(e.target.value))
                        }} onBlur={() => {
                            setPage(inputPage)
                        }} onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.keyCode === 13) {
                                setPage(inputPage)
                                e.currentTarget.blur()
                            }
                        }} value={inputPage} autoFocus={inputPageIsActive}
                               className={"  absolute -z-[1]  focus:ring-0 text-lg proba-pro-bold border-none rounded text-center no-arrows "}
                               min={1} max={countPages} type="number"/>
                        <button onClick={() => {
                            setPage(countPages)
                            setInputPage(countPages)
                        }} className={"hover:text-blue-500 duration-100 "}>
                            ... {countPages}
                        </button>
                    </div>

                    <button className={"proba-pro-bold text-3xl ml-3"}
                            onClick={() => {
                                if (page !== countPages) {
                                    setPage(page + 1)
                                    setInputPage(inputPage + 1)
                                }
                            }}>+
                    </button>
                </div>
            </div>


            <div className={"flex items-center justify-center ml-4 border-2 rounded-2xl p-2"}>
                <label htmlFor="countOnPage">Кількість:</label>
                <select value={limit} onChange={(e) => {
                    setLimit(Number(e.target.value))
                    setInputPage(1)
                    setPage(1)
                }} className={"border-none focus:border-none ml-2"} name="" id="countOnPage">
                    <option value={4}>4</option>
                    <option value={8}>8</option>
                    <option value={12}>12</option>
                    <option value={16}>16</option>
                    <option value={20}>20</option>
                    <option value={24}>24</option>
                </select>
            </div>
        </div>
    );
};

export default PaginationControl;