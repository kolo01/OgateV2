import { faMobile, faUser, faUserLock, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function SignUp() {
    return (
        <section className="sign-up py-20 roboto-thin">
            <div className="container mx-auto">
                <div className="w-full lg:w-3/6 mx-auto ">
                    <div className="flex flex-col p-10 rounded-md gap-10 bg-[#7a131638] shadow-[0_0_12px_rgba(0,0,0,0.1)] ">
                        <div className="text-4xl text-center text-[#7a1317] flex flex-col items-center gap-2">
                            <h1 className=''>Inscription</h1>
                            <FontAwesomeIcon icon={faUserPlus}/>
                        </div>

                        <div className="p-4">
                            <select id="countries_multiple" className="focus:outline-none focus:border-[#7a1317] bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-white block w-full p-2.5 dark:bg-white dark:placeholder-[#7a1317] dark:text-[#7a1317] dark:focus:ring-white dark:focus:border-white">
                                <option className='' value="Particulier">Particulier</option>
                                <option className='' value="Entreprise">Entreprise</option>
                            </select>
                        </div>

                        <form className='flex flex-col gap-4 p-4'>
                            <div className=" rounded-md flex gap-2 items-center p-3 bg-white">
                                <FontAwesomeIcon icon={faMobile} className='text-[#7a1317] '/>
                                <input type="text" className='w-full focus:outline-none' placeholder='Téléphone'/>
                            </div>
                            <div className=" rounded-md flex gap-2 items-center p-3 bg-white">
                                <FontAwesomeIcon icon={faUser} className='text-[#7a1317] '/>
                                <input type="text" className='w-full focus:outline-none focus:border-[#7a1317]' placeholder='Nom'/>
                            </div>
                            <div className=" rounded-md flex gap-2 items-center p-3 bg-white">
                                <FontAwesomeIcon icon={faUserLock} className='text-[#7a1317] '/>
                                <input type="password" className='w-full focus:outline-none focus:border-[#7a1317]' placeholder='Mot de passe'/>
                            </div>
                            <div className=" rounded-md flex gap-2 items-center p-3 bg-white">
                                <FontAwesomeIcon icon={faUserLock} className='text-[#7a1317] '/>
                                <input type="password" className='w-full focus:outline-none focus:border-[#7a1317]' placeholder='Confirmer mot de passe'/>
                            </div>
                            <button className='bg-[#7a1317] p-2 text-white'><FontAwesomeIcon icon={faUserPlus} className='mr-2'/>S'inscrire</button>
                        </form>

                        <p className='text-center'>Vous êtes déjà membre ? <Link to={"/sign-in"} className='text-lg underline text-[#7a1317]'>Connectez-vous ici !</Link></p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignUp