import React from 'react'
import pubImg from '../../images/pub-home.jpg'

function DetailsPublication() {
    return (
        <section className='details-pub bg-slate-200 h-screen py-10'>
            <div className="container mx-auto bg-white p-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <div className="flex flex-col gap-4">
                        <div className="top w-full bg-white">
                            <img src={pubImg} alt="" />
                        </div>
                        <div className="bot w-full flex gap-4">
                            <div className="w-1/4 h-28 items-center border bg-white"> Lorem, ipsum dolor.</div>
                            <div className="w-1/4 h-28 items-center border bg-white"> Lorem, ipsum dolor.</div>
                            <div className="w-1/4 h-28 items-center border bg-white"> Lorem, ipsum dolor.</div>
                            <div className="w-1/4 h-28 items-center border bg-white"> Lorem, ipsum dolor.</div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center gap-10">
                        <h1 className='text-3xl font-bold text-gray-700'>Titre ou intitulé de la pub</h1>
                        <span className='text-xl text-[#7a1713]'>200 000 FCFA</span>
                        <div className="w-full lg:w-4/6">
                            Description, Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla itaque ipsam laboriosam, praesentium doloribus quod molestias minima pariatur earum quibusdam in, corrupti necessitatibus iusto ipsa ut dolores accusamus aut. Dolorum.
                        </div>
                        <div className="flex flex-col gap-4">
                            <h2 className='text-xl font-semibold text-gray-700'>Infromations suppléméntaires</h2>
                            <div className="flex flex-col">
                                <span>Lorem ipsum dolor sit.</span>
                                <span>Tempora sint ut magnam!</span>
                                <span>Molestiae velit ipsum vitae?</span>
                                <span>Perferendis officiis quia totam.</span>
                                <span>Aperiam obcaecati fugit ipsa.</span>
                                <span>Ratione maiores iure molestiae?</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DetailsPublication