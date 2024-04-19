import React from 'react'
import GlobalStatistics from '../../components/GlobalStatistics'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpWideShort, faFilter, faUserCircle } from '@fortawesome/free-solid-svg-icons'

function Notifs() {
    return (
        <section className="notifs py-10">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-[30%_70%] gap-4 px-4 lg:px-0">
                    <GlobalStatistics/>
                    <div className="bg-white flex flex-col p-4 rounded-md shadow-[0_0_12px_rgba(0,0,0,0.2)]">
                        <div className="flex justify-between p-4">
                            <span className='border p-2 text-xl'><FontAwesomeIcon icon={faArrowUpWideShort} className='mr-2'/>Filtre</span>
                            <h2 className=' text-xl'>0 Notifications</h2>
                        </div>
                        <div className="w-full h-[1px] bg-[#7a1317]"></div>
                        <div className=" flex flex-col gap-4 p-4">
                            <small>Il y a 2 jours</small>
                            <div className="bg-[#ebebe8] flex gap-4 items-center p-4">
                                <FontAwesomeIcon className='text-6xl text-white' icon={faUserCircle}/>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam qui, perferendis sunt dolorem exercitationem atque culpa voluptate neque vitae recusandae.</p>
                            </div>
                            <div className="bg-[#ebebe8] flex gap-4 items-center p-4">
                                <FontAwesomeIcon className='text-6xl text-white' icon={faUserCircle}/>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam qui, perferendis sunt dolorem exercitationem atque culpa voluptate neque vitae recusandae.</p>
                            </div>
                            <div className="bg-[#ebebe8] flex gap-4 items-center p-4">
                                <FontAwesomeIcon className='text-6xl text-white' icon={faUserCircle}/>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam qui, perferendis sunt dolorem exercitationem atque culpa voluptate neque vitae recusandae.</p>
                            </div>
                            <div className="bg-[#ebebe8] flex gap-4 items-center p-4">
                                <FontAwesomeIcon className='text-6xl text-white' icon={faUserCircle}/>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam qui, perferendis sunt dolorem exercitationem atque culpa voluptate neque vitae recusandae.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Notifs