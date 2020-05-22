/* eslint-disable react/prop-types */
import React, { useLayoutEffect } from 'react';

function Modal({modalvalue, handleChangeModalForm, handleModalSubmit}) {
    useLockBodyScroll();

    return (
        <div className="modal">
            <form onSubmit={handleModalSubmit}>
                <label htmlFor="name-input">create username: </label>
                <input id="name-input" 
                    type="text"
                    required minLength="3"
                    maxLength="10"
                    value={modalvalue}
                    autoComplete="off"
                    placeholder=""
                    onChange={handleChangeModalForm}
                />
                <button className="modal-button" type="submit" onSubmit={handleModalSubmit}>submit</button>
            </form>
        </div>
    );
}  

function useLockBodyScroll() {
    useLayoutEffect(() => {
     // Get original body overflow
     const originalStyle = window.getComputedStyle(document.body).overflow;  
     // Prevent scrolling on mount
     document.body.style.overflow = 'hidden';
     // Re-enable scrolling when component unmounts
     return () => document.body.style.overflow = originalStyle;
     }, []); // Empty array ensures effect is only run on mount and unmount
}

export default Modal;