import React from "react";

// import "./Modal.css";

export const Modal = ({ onSubmit, onCancel, closeModal, children }) => {
    // export const Modal = ({ onSubmit, onCancel, closeModal, children }) => {
    return (
        <div className="modal-container w-full h-full fixed top-0 left-0 flex justify-center items-center bg-[#00000035] z-50" 
            onClick={(e) => { if (e.target.className === "modal-container") closeModal("Modal was closed")}}>
            <div className="modal bg-white w-4/6 mx-auto p-4 flex flex-col gap-10">
                <div className="modal-header flex justify-end" onClick={() => closeModal("Modal was closed")}>
                    <p className="close cursor-pointer text-3xl bg-red-200 px-4 rounded-md">&times;</p>
                </div>
                <div className="modal-content w-full">{children}</div>
                {/* <div className="modal-footer w-full flex justify-end gap-4">
                    <button type="submit" className="btn btn-submit bg-green-600 py-3 px-8 rounded-md text-white roboto-thin font-bold" onClick={() => onSubmit("Submit button was clicked")}>
                        Suivant
                    </button>
                    <button type="submit" className="btn btn-cancel bg-red-600 py-3 px-8 rounded-md text-white roboto-thin font-bold" onClick={() => onCancel("Cancel button was clicked")}>
                        Fermer
                    </button>
                </div> */}
            </div>
        </div>
    );
};
