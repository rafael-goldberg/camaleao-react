import React from 'react';
import '../../assets/css/ModalDefault.css';

const ModalDefault = (props) => {
    const {show, children} = props
    const showHideClassName = show ? "modal d-block" : "modal d-none";

    return (
        <div id="modalDefault">
            <div className={showHideClassName}>
                <div className="modal-container">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default ModalDefault;
