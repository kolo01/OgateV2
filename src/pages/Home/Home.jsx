import React from 'react'

import imgCle from '../../images/cle-porte.avif'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faG, faUserPlus } from '@fortawesome/free-solid-svg-icons'

function Home() {
    return (
        <section className="home bg-[#ebebe8] py-20 roboto-thin">
            <div className="container mx-auto">
                <div className="grid grid-cols-[1fr_1fr]">
                    <div className="grid grid-rows-[1fr_1fr] gap-2">
                        <div className='w-4/6 flex flex-col gap-4'>
                            <h1 className='text-6xl text-[#7a1317] roboto-thin font-bold'>Nous connectons les acteurs du monde immobilier.</h1>
                            <p className='text-xl leading-9'>Réalisez l'acquisition de vos rêves où vendez facilement grâce à notre grand réseau de vendeurs/acheteurs de biens immobiliers.</p>
                        </div>
                        <div className="">
                            {/* <img src={imgCle} alt="" /> */}
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-8">
                        <h2 className='text-4xl text-[#7a1317]'>Connexion</h2>
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
            </div>
        </section>
    )
}

export default Home