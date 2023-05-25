import React, {FC} from "react";
import "../../style/modal.scss"

interface ModalProps {
    show: boolean;
    close: () => void;
    children: React.ReactNode;
    title:string
}

const Modal: FC<ModalProps> = ({show, close, children, title}) => {
    return (
        <>
            {
                show ?
                    <div
                        className="modalContainer z-10"
                        onClick={() => close()}
                    >
                        <div className="modal" onClick={(e) => e.stopPropagation()}>
                            <header className="modal_header">
                                <h2 className="modal_header-title proba-pro-bold text-3xl">{title}</h2>
                                <button className="close" onClick={() => close()}>
                                    <i className="bi bi-x-circle"></i>
                                </button>
                            </header>
                            <main className="modal_content">
                                {children}
                            </main>
                        </div>
                    </div>
                    : null
            }
        </>
    );

};

export default Modal;