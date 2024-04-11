import { faG, faRightFromBracket, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function SignIn() {
    return (
        <section className='sign-in py-20 roboto-thin'>
            <div className="container mx-auto">
                <div className="w-3/6 mx-auto py-10 flex flex-col items-center rounded-md gap-10 bg-[#7a131638] shadow-[0_0_12px_rgba(0,0,0,0.1)]">
                        <div className="text-4xl text-center text-[#7a1317] flex flex-col items-center gap-2">
                            <h1 className=''>Connexion</h1>
                            <FontAwesomeIcon icon={faRightFromBracket}/>
                        </div>
                        <div className=" flex flex-col items-center gap-10">
                            <Link className='bg-[#7a1317] text-white py-2 px-6'>
                                <FontAwesomeIcon icon={faG} className=' mr-2'/>
                                <span>Continuer avec Google</span>
                            </Link>
                            <div className="flex items-center text-slate-700 roboto-thin">
                                <span className=' text-slate-500'>_____________</span>
                                <span className='text-lg'>Ou se connecter avec l'email</span>
                                <span className=' text-slate-500'>_____________</span>
                            </div>
                            <form className='w-full grid grid-rows-[1fr_1fr_1fr_1fr] gap-6'>
                                <input type="text" className='border p-3 w-full rounded-md focus:outline-none focus:border-[#7a1317]' placeholder='Email'/>
                                <input type="password" className='border p-3 w-full rounded-md focus:outline-none focus:border-[#7a1317]' placeholder='Mot de passe'/>
                                <small className='text-sm'>Mot de passe oublié ?</small>
                                <button className='bg-[#7a1317] text-white'><FontAwesomeIcon icon={faUserPlus} className='mr-2'/>Connexion</button>
                            </form>
                        </div>
                    </div>
                </div>
        </section>
    )
}

export default SignIn