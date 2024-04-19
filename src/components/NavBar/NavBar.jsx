import React, { useState } from 'react'
import ogateLogo from '../../images/logo.jpg.png'
import { Link } from 'react-router-dom'
import PostsPopUp from '../PostsPopUp/PostsPopUp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRestroom } from '@fortawesome/free-solid-svg-icons'

function NavBar() {

    const [nav, setNav] = useState(true)
    const [isOpen, setIsOpen] = useState(false)
    const [next, setNext] = useState(false)

    const OpenPopUp = () => {
        setIsOpen(!isOpen)
    }
    
    const Next =  () => {
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
                            <button onClick={() => OpenPopUp()} className='border border-[#7a1713] px-2 text-[#7a1713]'>Postes</button>
                            <PostsPopUp open={isOpen} onClose={() => setIsOpen(false)}>
                                <div className="">
                                    <h1 className='text-3xl font-bold text-gray-700'>Informations de base !</h1>
                                </div>
                                <div className='m-6'>
                                    <ol class="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
                                        <li class="flex md:w-full items-center text-[#7a1713] sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-2 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-[#7a1713]">
                                            <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                                                <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                                </svg>
                                                Informations <span class="hidden sm:inline-flex sm:ms-2">Info</span>
                                            </span>
                                        </li>
                                        <li class="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-2 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                                            <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                                                <span class="me-2">2</span>
                                                Sur le bien <span class="hidden sm:inline-flex sm:ms-2">Info</span>
                                            </span>
                                        </li>
                                        <li class="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-2 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                                            <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                                                <span class="me-2">3</span>
                                                Additionnelle <span class="hidden sm:inline-flex sm:ms-2">Info</span>
                                            </span>
                                        </li>
                                        <li class="flex items-center">
                                            <span class="me-2">4</span>
                                            Généralités et Docs
                                        </li>
                                    </ol>
                                </div>
                                {
                                    next ? <div className="">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, facilis.
                                    </div> : null
                                }
                                

                                <div className="flex justify-between">
                                    <div className="">
                                        <label className='text-lg font-semibold' htmlFor="countries_multiple">Type de postes</label>
                                        <select id="countries_multiple" className="focus:outline-none focus:border-[#7a1317] bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-white block w-full p-2.5">
                                            <option className='' value="Particulier">Informations</option>
                                            <option className='' value="Particulier">Particulier</option>
                                            <option className='' value="Entreprise">Entreprise</option>
                                        </select>
                                    </div>
                                    <div className="flex gap-8">
                                        <button onClick={() => Next()} className='bg-blue-600 h-12 py-2 px-6 rounded-md text-white'>Suivant</button>
                                        <button className='bg-red-600 h-12 py-2 px-6 rounded-md text-white'>Fermer</button>
                                    </div>
                                </div>
                                
                            </PostsPopUp>
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

            {/* {isOpen ? <h1 className='text-rose-300 text-4xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, minus.</h1> : <p>Null</p>} */}
        </header>
    )
}

export default NavBar