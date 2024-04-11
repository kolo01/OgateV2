import React from 'react'
import ogateLogo from '../../images/logo.jpg.png'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <header className='w-full bg-white py-6 shadow-[0_0_12px_rgba(0,0,0,0.2)] roboto-thin'>
            <nav className='container mx-auto'>
                <ul className='flex justify-between items-center'>
                    <li>
                        <Link to={"/"}><img className='w-10' src={ogateLogo} alt="" /></Link>
                    </li>
                    <li className='flex gap-10'>
                        <Link to={"/sign-up"} className='py-2 px-6 rounded-lg text-[#7a1317] border border-[#7a1317]'>S'inscrire</Link>
                        <Link to={"/"} className='py-2 px-6 rounded-lg text-white bg-[#7a1317]'>Connexion</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar