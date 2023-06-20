import React, {FC} from 'react';

interface MainProps {
    children: React.ReactNode
}

const Main: FC<MainProps> = ({children}) => {

    return (
        <>
            <div className={" min-h-[77vh] "}>
                {children}
            </div>
        </>

    );
};

export default Main;