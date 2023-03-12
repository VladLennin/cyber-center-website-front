import React, {FC} from 'react';

interface MainProps {
    children: React.ReactNode
}

const Main: FC<MainProps> = ({children}) => {
    return (
        <div className={"min-h-[77vh] pb-[8vh]"}>
            {children}
        </div>
    );
};

export default Main;