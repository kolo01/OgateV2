import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function ViewPublications() {
    return (
        <section className='view-publications'>
            <div className="bg-white rounded-md">
                <div className="flex flex-col gap-4">
                    <h2 className='text-3xl text-center p-6 font-semibold'>Vous pourriez être intéressé !</h2>
                    <div className="flex flex-col p-6 gap-4">
                        <div className='flex flex-col justify-between'>
                            <h3 className='text-lg'>Lorem, ipsum dolor.</h3>
                            <Link className='py-2 px-8 font-bold text-center text-blue-400 bg-slate-100'>Voir publication</Link>
                        </div>
                        <div className='flex flex-col justify-between'>
                            <h3 className='text-lg'>Lorem, ipsum dolor.</h3>
                            <Link className='py-2 px-8 font-bold text-center text-blue-400 bg-slate-100'>Voir publication</Link>
                        </div>
                        <div className='flex flex-col justify-between'>
                            <h3 className='text-lg'>Lorem, ipsum dolor.</h3>
                            <Link className='py-2 px-8 font-bold text-center text-blue-400 bg-slate-100'>Voir publication</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ViewPublications