import React, {FC} from 'react';

interface ErrorsProps {
    errors: string[]
}

const ErrorsBlock: FC<ErrorsProps> = ({errors}) => {
    return (
        <>
            {errors.length > 0 &&
                <div className={"mb-5 text-red-800 flex justify-center"}>
                    {errors.map((err, index) => (
                            <div key={index} className={"flex items-center border px-3 py-1 border-red-800 rounded"}>
                                <p>{err}</p>
                                <i className="bi bi-exclamation-triangle-fill ml-2"></i>
                            </div>

                        )
                    )}
                </div>
            }
        </>
    );
};

export default ErrorsBlock;