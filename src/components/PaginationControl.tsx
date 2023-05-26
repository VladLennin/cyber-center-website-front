import React, {FC} from 'react';

interface PaginationProps {
    page: number;
    setPage: (page: number) => any;
    countPages: number;
    limit: number;
    setLimit: (limit: number) => any;
}

const PaginationControl: FC<PaginationProps> = ({page, limit, setPage, countPages, setLimit}) => {
    return (
        <div className={"flex w-full justify-center items-center mb-5"}>
            <div className={"border-2 rounded-xl flex items-center justify-center px-3 py-1"}>
                <button className={"proba-pro-bold text-3xl mr-2"}
                        onClick={() => page !== 1 && setPage(page - 1)}>-
                </button>
                <p className={"w-10  proba-pro-medium text-center"}>
                    {page}
                </p>
                <button className={"proba-pro-bold text-3xl ml-2"}
                        onClick={() => page !== countPages && setPage(page + 1)}>+
                </button>
            </div>

            <div className={"flex items-center justify-center ml-4 border-2 rounded-2xl p-2"}>
                <label htmlFor="countOnPage">Кількість:</label>
                <select defaultValue={limit} onChange={(e) => {
                    setLimit(Number(e.target.value))
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