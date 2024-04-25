import React, { useState } from 'react'
import ogateLogo from '../../images/logo.jpg.png'
import { Link } from 'react-router-dom'

import { createPortal } from "react-dom";

import { Modal } from "../Modal/Modal";


function NavBar() {

    const [nav, setNav] = useState(true)
    const [next, setNext] = useState(false)
    const [nextStep3, setNextStep3] = useState(false)
    const [nextStep4, setNextStep4] = useState(false)

    const [display, setDisplay] = useState(true)

    const [modalOpen, setModalOpen] = useState(false);
    const [message, setMessage] = useState("");

    const [colStep2, setColStep2] = useState(false);
    const [colStep3, setColStep3] = useState(false);
    const [colStep4, setColStep4] = useState(false);


    
    const handleButtonClick = (value) => {
        console.log("value : ", value);
        setModalOpen(false);
        setMessage(value);
    };

    const handleNextButtonClick = () => {
        setDisplay(false)
        setNext(true)
        setColStep2(true)
    }

    const handleNextStep3ButtonClick = () => {
        setDisplay(false)
        setNext(false)
        setNextStep3(true)
        setColStep3(true)
    }

    const handleNextStep4ButtonClick = () => {
        setDisplay(false)
        setNext(false)
        setNextStep3(false)
        setNextStep4(true)
        setColStep4(true)
    }

    const handleReturnStep2ButtonClick = () => {
        setNext(false)
        setDisplay(true)
        setColStep2(false)
    }

    const handleReturnStep3ButtonClick = () => {
        setDisplay(false)
        setNextStep3(false)
        setNext(true)
        setColStep3(false)
    }

    const handleReturnStep4ButtonClick = () => {
        setNextStep4(false)
        setNextStep3(true)
        setColStep4(false)
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
                                    // onSubmit={handleNextButtonClick}
                                    // onCancel={handleButtonClick}
                                >
                                    <h1 className='-mt-10 text-3xl font-semibold text-gray-600 text-center roboto-thin'>Informations de base</h1>
                                    
                                    <ol class=" roboto-thin flex items-center w-full p-3 justify-between text-xl font-medium text-center my-10 text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm sm:text-base  sm:p-4 sm:space-x-4 rtl:space-x-reverse">
                                        <li class="flex items-center text-[#7a1713]">
                                            <span class="flex items-center justify-center w-10 h-10 me-2 text-3xl border border-[#7a1713] rounded-full shrink-0">
                                                1
                                            </span>
                                            Informations {/*<span class="hidden sm:inline-flex sm:ms-2">Info</span>*/}
                                            <svg class="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 9 4-4-4-4M1 9l4-4-4-4"/>
                                            </svg>
                                        </li>
                                        <li class={`flex items-center ${colStep2 ? " text-[#7a1713] ":"text-gray-500"}`}>
                                            <span class={`flex items-center justify-center w-10 h-10 me-2 text-3xl border rounded-full shrink-0 ${colStep2 ? "border-[#7a1713] ":"border-gray-500"}`}>
                                                2
                                            </span>
                                            Informations sur le bien {/*<span class="hidden sm:inline-flex sm:ms-2">Info</span>*/}
                                            <svg class="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 9 4-4-4-4M1 9l4-4-4-4"/>
                                            </svg>
                                        </li>
                                        <li class={`flex items-center ${colStep3 ? " text-[#7a1713] ":"text-gray-500"}`}>
                                            <span class={`"flex items-center justify-center w-10 h-10 me-2 text-3xl border border-gray-500 rounded-full shrink-0" ${colStep3 ? "border-[#7a1713] ":"border-gray-500"}`}>
                                                3
                                            </span>
                                            Informations additionnelles
                                            <svg class="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 9 4-4-4-4M1 9l4-4-4-4"/>
                                            </svg>
                                        </li>
                                        <li class={`flex items-center ${colStep4 ? " text-[#7a1713] ":"text-gray-500"}`}>
                                            <span class={`"flex items-center justify-center w-10 h-10 me-2 text-3xl border border-gray-500 rounded-full shrink-0" ${colStep4 ? "border-[#7a1713] ":"border-gray-500"}`}>
                                                4
                                            </span>
                                            Généralités et Documents
                                        </li>
                                    </ol>

                                    {display && (
                                        <div className="flex flex-col gap-6 roboto-thin">
                                            <div className="">
                                                <label className='text-lg roboto-thin font-semibold' htmlFor="countries_multiple">Type de postes</label>
                                                <select id="countries_multiple" className="border border-[#7a1713] focus:outline-none focus:border-[#7a1317] bg-gray-50 text-gray-900 text-lg rounded-lg focus:ring-white block w-full p-2">
                                                    <option className='' value="Particulier">Informations</option>
                                                    <option className='' value="Particulier">Particulier</option>
                                                    <option className='' value="Entreprise">Entreprise</option>
                                                </select>
                                            </div>
                                            <div className="modal-footer w-full flex justify-end gap-4">
                                                <button type="submit" className="btn btn-submit bg-green-600 py-3 px-8 rounded-md text-white roboto-thin font-bold" onClick={() => handleNextButtonClick()}>
                                                    Suivant
                                                </button>
                                                <button type="submit" className="btn btn-cancel bg-red-600 py-3 px-8 rounded-md text-white roboto-thin font-bold" onClick={() => handleButtonClick()}>
                                                    Fermer
                                                </button>
                                            </div>
                                        </div>
                                    )}

                                    {next && (
                                        <div className="flex flex-col gap-6">
                                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 roboto-thin">
                                                <div className="flex flex-col gap-4 self-start">
                                                    <div className="w-full flex flex-col gap-1">
                                                        <label className='text-lg roboto-thin font-semibold' htmlFor="countries_multiple">Type de postes</label>
                                                        <select id="countries_multiple" className="focus:outline-none focus:border-[#7a1317] bg-gray-50 text-gray-900 text-lg rounded-lg focus:ring-white block w-full p-2">
                                                            <option className='' value="Particulier">Informations</option>
                                                            <option className='' value="Particulier">Particulier</option>
                                                            <option className='' value="Entreprise">Entreprise</option>
                                                        </select>
                                                    </div>
                                                    <div className="w-full flex flex-col gap-1">
                                                        <label className='text-lg roboto-thin font-semibold' htmlFor="countries_multiple">Localisation</label>
                                                        <input type="text" className='border border-[#7a1713] rounded-md focus:outline-none p-1 w-full placeholder:text-gray-400' placeholder='Localisation'/>
                                                    </div>
                                                    <div className="w-full flex flex-col gap-1">
                                                        <label className='text-lg roboto-thin font-semibold' htmlFor="countries_multiple">Longitude</label>
                                                        <input type="text" className='border border-[#7a1713] rounded-md focus:outline-none p-1 w-full placeholder:text-gray-400' placeholder='Longitude'/>
                                                    </div>
                                                    <div className="w-full flex flex-col gap-1">
                                                        <label className='text-lg roboto-thin font-semibold' htmlFor="countries_multiple">Latitude</label>
                                                        <input type="text" className='border border-[#7a1713] rounded-md focus:outline-none p-1 w-full placeholder:text-gray-400' placeholder='Latitude'/>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-4">
                                                    <div className="w-full flex flex-col gap-1">
                                                        <label className='text-lg roboto-thin font-semibold' htmlFor="countries_multiple">Fichier(s)</label>
                                                        <input type="file" className='border border-[#7a1713] rounded-md focus:outline-none p-1 w-full placeholder:text-gray-400' placeholder=''/>
                                                    </div>
                                                    <div className="w-full flex flex-col gap-1 mt-2">
                                                        <label className='text-lg roboto-thin font-semibold' htmlFor="countries_multiple">Description</label>
                                                        <textarea rows={7} className='border border-[#7a1713] rounded-md focus:outline-none resize-none w-full placeholder:text-gray-400 p-2'
                                                        placeholder='Une belle demeure en bordure de plage'>
                                                        </textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="modal-footer w-full flex justify-end gap-4">
                                                <button type="submit" className="btn btn-submit bg-green-600 py-3 px-8 rounded-md text-white roboto-thin font-bold" onClick={() => handleNextStep3ButtonClick()}>
                                                    Suivant
                                                </button>
                                                <button type="submit" className="btn btn-cancel bg-red-600 py-3 px-8 rounded-md text-white roboto-thin font-bold" onClick={() => handleReturnStep2ButtonClick()}>
                                                    Revenir
                                                </button>
                                            </div>
                                        </div>
                                    )}

                                    {nextStep3 && (
                                        <div className='flex flex-col gap-6'>
                                            <div className="grid grid-cols-2 gap-10">
                                                <div className="flex flex-col gap-4">
                                                    <div className="">
                                                        <label htmlFor="" className='text-lg roboto-thin font-semibold'>Informations additionnelles sur le bien</label>
                                                        <select id="countries_multiple" className="roboto-thin border border-[#7a1713] focus:outline-none focus:border-[#7a1317] bg-gray-50 text-gray-900 text-lg rounded-lg focus:ring-white block w-full py-4 px-2">
                                                            <option className='' value="Particulier">Select</option>
                                                            <option className='' value="Particulier">Particulier</option>
                                                            <option className='' value="Entreprise">Entreprise</option>
                                                        </select>
                                                    </div>
                                                    <div className="">
                                                        <label htmlFor="" className='text-lg roboto-thin font-semibold'>Informations additionnelles sur le quartier</label>
                                                        <select id="countries_multiple" className="roboto-thin border border-[#7a1713] focus:outline-none focus:border-[#7a1317] bg-gray-50 text-gray-900 text-lg rounded-lg focus:ring-white block w-full py-4 px-2">
                                                            <option className='' value="Particulier">Select</option>
                                                            <option className='' value="Particulier">Particulier</option>
                                                            <option className='' value="Entreprise">Entreprise</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-4">
                                                    <div className="">
                                                        <label htmlFor="" className='text-lg roboto-thin font-semibold'>Autre informations sur le bien</label>
                                                        <textarea className="border border-[#7a1713] focus:outline-none focus:border-[#7a1317] bg-gray-50 text-gray-900 text-lg rounded-lg focus:ring-white block w-full p-2" rows="4"></textarea>
                                                    </div>
                                                    <div className="">
                                                        <label htmlFor="" className='text-lg roboto-thin font-semibold'>Autre informations sur le quartier</label>
                                                        <textarea className="border border-[#7a1713] focus:outline-none focus:border-[#7a1317] bg-gray-50 text-gray-900 text-lg rounded-lg focus:ring-white block w-full p-2" rows="4"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="modal-footer w-full flex justify-end gap-4">
                                                <button type="submit" className="btn btn-submit bg-green-600 py-3 px-8 rounded-md text-white roboto-thin font-bold" onClick={() => handleNextStep4ButtonClick()}>
                                                    Suivant
                                                </button>
                                                <button type="submit" className="btn btn-cancel bg-red-600 py-3 px-8 rounded-md text-white roboto-thin font-bold" onClick={() => handleReturnStep3ButtonClick()}>
                                                    Revenir
                                                </button>
                                            </div>
                                        </div>
                                    )}

                                    {nextStep4 && (
                                        <div className='flex flex-col gap-6'>
                                            <div className="grid grid-cols-2 gap-10">
                                                <div className="flex flex-col gap-4">
                                                    <div className="w-full flex flex-col gap-1">
                                                        <label className='text-lg roboto-thin font-semibold' htmlFor="countries_multiple">N. de pièce</label>
                                                        <input type="text" className='border border-[#7a1713] rounded-md focus:outline-none p-2 w-full placeholder:text-gray-400' placeholder='120'/>
                                                    </div>
                                                    <div className="w-full flex flex-col gap-1">
                                                        <label className='text-lg roboto-thin font-semibold' htmlFor="countries_multiple">N. de salle de bain</label>
                                                        <input type="text" className='border border-[#7a1713] rounded-md focus:outline-none p-2 w-full placeholder:text-gray-400' placeholder='3'/>
                                                    </div>
                                                    <div className="w-full flex flex-col gap-1">
                                                        <label className='text-lg roboto-thin font-semibold' htmlFor="countries_multiple">Prix</label>
                                                        <input type="text" className='border border-[#7a1713] rounded-md focus:outline-none p-2 w-full placeholder:text-gray-400' placeholder='200 000'/>
                                                    </div>
                                                    <div className="w-full flex flex-col gap-1">
                                                        <label className='text-lg roboto-thin font-semibold' htmlFor="countries_multiple">Apport initial</label>
                                                        <input type="text" className='border border-[#7a1713] rounded-md focus:outline-none p-2 w-full placeholder:text-gray-400' placeholder='200 000'/>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-4">
                                                    <div className="w-full flex flex-col gap-1">
                                                        <label className='text-lg roboto-thin font-semibold' htmlFor="countries_multiple">N. de chambre</label>
                                                        <input type="text" className='border border-[#7a1713] rounded-md focus:outline-none p-2 w-full placeholder:text-gray-400' placeholder='5'/>
                                                    </div>
                                                    <div className="w-full flex flex-col gap-1">
                                                        <label className='text-lg roboto-thin font-semibold' htmlFor="countries_multiple">N. de salon</label>
                                                        <input type="text" className='border border-[#7a1713] rounded-md focus:outline-none p-2 w-full placeholder:text-gray-400' placeholder='2'/>
                                                    </div>
                                                    <div className="">
                                                    <label htmlFor="" className='text-lg roboto-thin font-semibold'>Périodicitée de paiements</label>
                                                    <select id="countries_multiple" className="roboto-thin border border-[#7a1713] focus:outline-none focus:border-[#7a1317] bg-gray-50 text-gray-900 text-lg rounded-lg focus:ring-white block w-full py-6 px-2">
                                                        <option className='' value="Particulier">Select</option>
                                                        <option className='' value="Particulier">Particulier</option>
                                                        <option className='' value="Entreprise">Entreprise</option>
                                                    </select>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="modal-footer w-full flex justify-end gap-4">
                                                <button type="submit" className="btn btn-submit bg-green-600 py-3 px-8 rounded-md text-white roboto-thin font-bold" onClick={() => handleButtonClick()}>
                                                    Terminer
                                                </button>
                                                <button type="submit" className="btn btn-cancel bg-red-600 py-3 px-8 rounded-md text-white roboto-thin font-bold" onClick={() => handleReturnStep4ButtonClick()}>
                                                    Revenir
                                                </button>
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