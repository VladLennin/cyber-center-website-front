import React, {FC} from 'react';

interface MainProps {
    children: React.ReactNode
}

const Main: FC<MainProps> = ({children}) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default Main;