import React from 'react'

function PostsPopUp({open, onClose, children}) {

    return (
        <div onClick={onClose} className={`w-full px-4 lg:px-0 fixed inset-0 flex justify-center items-center transition-colors z-10
            ${open ? "visible bg-black/20" : "invisible"}`}>
            <div className={`w-full -mt-[26rem] lg:w-[65%] flex flex-col gap-8 bg-white rounded-xl shadow p-6 transition-all ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}>
                <button className={`absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600`} onClick={onClose}>X</button>
                {children}
            </div>
        </div>
    )
}

export default PostsPopUp;