import React, { useState } from 'react'
import ogateLogo from '../../images/logo.jpg.png'
import { Link } from 'react-router-dom'

import { createPortal } from "react-dom";

import { Modal } from "../Modal/Modal";


function NavBar() {

    const [nav, setNav] = useState(true)
    const [next, setNext] = useState(false)

    const [display, setDisplay] = useState(true)


    const [modalOpen, setModalOpen] = useState(false);
    const [message, setMessage] = useState("");
    
    const handleButtonClick = (value) => {
        console.log("value : ", value);
        setModalOpen(false);
        setMessage(value);
    };

    const handleNextButtonClick = () => {
        setDisplay(false)
        setNext(true)

    }

    return (
        <header className='w-full bg-white py-6 shadow-[0_0_12px_rgba(0,0,0,0.2)] roboto-thin'>
            {nav ? (
                <nav className='container mx-auto'>
                    <ul className='flex justify-between items-center px-4 lg:px-0'>
                        <li>
                            <Link to={"/"}><img className='w-10 hidden lg:flex' src={ogateLogo} alt="" /></Link>
                        </li>
                        <li className='flex gap-10'>
                            <Link to={"/"} className=''>Accueil</Link>
                            <Link to={"/notifs"} className=''>Notifications</Link>
                            {/* {message} */}
                            <button onClick={() => setModalOpen(true)} className='border border-[#7a1713] px-2 text-[#7a1713]'>Postes</button>
                            {modalOpen &&
                                createPortal(
                                <Modal
                                    closeModal={handleButtonClick}
                                    onSubmit={handleNextButtonClick}
                                    onCancel={handleButtonClick}
                                >
                                    <h1 className='text-3xl font-semibold text-gray-600 text-center'>Informations de base</h1>
                                    
                                    <ol class="flex items-center w-full p-3 justify-between text-xl font-medium text-center my-10 text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm sm:text-base  sm:p-4 sm:space-x-4 rtl:space-x-reverse">
                                        <li class="flex items-center text-xl text-[#7a1713]">
                                            <span class="flex items-center justify-center w-10 h-10 me-2 text-3xl border border-[#7a1713] rounded-full shrink-0">
                                                1
                                            </span>
                                            Informations {/*<span class="hidden sm:inline-flex sm:ms-2">Info</span>*/}
                                            <svg class="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 9 4-4-4-4M1 9l4-4-4-4"/>
                                            </svg>
                                        </li>
                                        <li class={`flex items-center text-xl  ${next ? " text-[#7a1713] ":"text-gray-500"}`}>
                                            <span class={`flex items-center justify-center w-10 h-10 me-2 text-3xl border rounded-full shrink-0 ${next ? "border-[#7a1713] ":"border-gray-500"}`}>
                                                2
                                            </span>
                                            Informations sur le bien {/*<span class="hidden sm:inline-flex sm:ms-2">Info</span>*/}
                                            <svg class="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 9 4-4-4-4M1 9l4-4-4-4"/>
                                            </svg>
                                        </li>
                                        <li class="flex items-center text-xl">
                                            <span class={`"flex items-center justify-center w-10 h-10 me-2 text-3xl border border-gray-500 rounded-full shrink-0"`}>
                                                3
                                            </span>
                                            Informations additionnelles
                                            <svg class="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 9 4-4-4-4M1 9l4-4-4-4"/>
                                            </svg>
                                        </li>
                                        <li class="flex items-center text-xl">
                                            <span class={`"flex items-center justify-center w-10 h-10 me-2 text-3xl border border-gray-500 rounded-full shrink-0"`}>
                                                4
                                            </span>
                                            Généralités et Documents
                                        </li>
                                    </ol>

                                    {display && (
                                    <div className="">
                                        <label className='text-lg font-semibold' htmlFor="countries_multiple">Type de postes</label>
                                        <select id="countries_multiple" className="focus:outline-none focus:border-[#7a1317] bg-gray-50 text-gray-900 text-lg rounded-lg focus:ring-white block w-full p-2">
                                            <option className='' value="Particulier">Informations</option>
                                            <option className='' value="Particulier">Particulier</option>
                                            <option className='' value="Entreprise">Entreprise</option>
                                        </select>
                                    </div> )}

                                    {next && (
                                        <div className="flex justify-around items-center">
                                            <div className="flex flex-col gap-4 self-start">
                                                <div className="w-full flex flex-col gap-1">
                                                    <label className='text-lg font-semibold' htmlFor="countries_multiple">Type de postes</label>
                                                    <select id="countries_multiple" className="focus:outline-none focus:border-[#7a1317] bg-gray-50 text-gray-900 text-lg rounded-lg focus:ring-white block w-full p-2">
                                                        <option className='' value="Particulier">Informations</option>
                                                        <option className='' value="Particulier">Particulier</option>
                                                        <option className='' value="Entreprise">Entreprise</option>
                                                    </select>
                                                </div>
                                                <div className="w-full flex flex-col gap-1">
                                                    <label className='text-lg font-semibold' htmlFor="countries_multiple">Localisation</label>
                                                    <input type="text" className='border focus:outline-none p-1 w-full placeholder:text-gray-500' placeholder='Localisation'/>
                                                </div>
                                                <div className="w-full flex flex-col gap-1">
                                                    <label className='text-lg font-semibold' htmlFor="countries_multiple">Longitude</label>
                                                    <input type="text" className='border focus:outline-none p-1 w-full placeholder:text-gray-500' placeholder='Longitude'/>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-4">
                                                <div className="w-full flex flex-col gap-1">
                                                    <label className='text-lg font-semibold' htmlFor="countries_multiple">Fichier(s)</label>
                                                    <input type="file" className='border focus:outline-none p-1 w-full placeholder:text-gray-500' placeholder=''/>
                                                </div>
                                                <div className="w-full flex flex-col gap-1">
                                                    <label className='text-lg font-semibold' htmlFor="countries_multiple">Latitude</label>
                                                    <input type="text" className='border focus:outline-none p-1 w-full placeholder:text-gray-500' placeholder='Latitude'/>
                                                </div>
                                                <div className="w-full flex flex-col gap-1">
                                                    <label className='text-lg font-semibold' htmlFor="countries_multiple">Description</label>
                                                    <textarea rows={6} className='border focus:outline-none resize-none w-full placeholder:text-gray-500 p-2'
                                                       placeholder='Une belle demeure en bordure de plage'>
                                                    </textarea>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </Modal>,
                                document.body
                            )}
                            <Link to={"/sign-up"} className=''>0000000</Link>
                        </li>
                    </ul>
                </nav>
            ) : 
                <nav className='container mx-auto'>
                    <ul className='flex justify-between items-center px-4 lg:px-0'>
                        <li>
                            <Link to={"/"}><img className='w-10 hidden lg:flex' src={ogateLogo} alt="" /></Link>
                        </li>
                        <li className='flex gap-10'>
                            <Link to={"/sign-up"} className='py-2 px-6 rounded-lg text-[#7a1317] border border-[#7a1317]'>S'inscrire</Link>
                            <Link to={"/"} className='py-2 px-6 rounded-lg text-white bg-[#7a1317]'>Connexion</Link>
                        </li>
                    </ul>
                </nav>
            }
        </header>
    )
}

export default NavBar