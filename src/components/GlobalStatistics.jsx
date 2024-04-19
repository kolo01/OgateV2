import { faAddressCard, faBookBookmark, faBookmark, faComputer, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function GlobalStatistics() {
    return (
        <section className='global-statistics'>
            <div className="bg-white shadow-[0_0_12px_rgba(0,0,0,0.2)]">
                <div className="flex flex-col gap-4">
                    <div className="rounded-t-md py-6 bg-[#7a1317]"></div>
                    <div className="flex flex-col items-center gap-2 -mt-10 z-10">
                        <FontAwesomeIcon icon={faUserCircle} className='size-20 text-[#7a1317] border border-gray-300 rounded-full'/>
                        <h2 className=''>Monsieur...</h2>
                    </div>
                    <hr />
                    <div className="flex flex-col p-6 gap-4">
                        <h3 className='text-2xl font-bold'>Statistique globale</h3>
                        <div className='flex justify-between'>
                            <span><FontAwesomeIcon icon={faComputer} className='mr-2'/> Publications favoris :</span>
                            <span className='font-bold' >5</span>
                        </div>
                        <div className='flex justify-between'>
                            <span><FontAwesomeIcon icon={faBookmark} className='mr-2'/> Interessés par :</span>
                            <span className='font-bold' >5</span>
                        </div>
                        <div className='flex justify-between'>
                            <span><FontAwesomeIcon icon={faAddressCard} className='mr-2'/> Mes publications:</span>
                            <span className='font-bold' >6</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GlobalStatistics