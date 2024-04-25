import { faAddressCard, faHeart, faMessage, faThumbsUp, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import home from '../../images/home.jpg'
import GlobalStatistics from '../../components/GlobalStatistics'
import ViewPublications from '../../components/Publications/ViewPublications'

function HomePage() {
    return (
        <section className="home-page h-auto bg-[#ebebe8] py-10 roboto-thin">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-[28%_44%_28%] gap-4">{/*grid-cols-1 lg:grid-cols-3*grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 */}
                    <div className="">
                        <GlobalStatistics/>
                    </div>
                    <div className="grid grid-rows-[auto_auto_auto] gap-10">
                        <div className="bg-white p-10">
                            <div className="grid grid-cols-2 grid-rows-2 gap-4">
                                <div className="">
                                    <label htmlFor="">Type de poste</label>
                                    <select id="countries_multiple" className="focus:outline-none focus:border-[#7a1317] bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-white block w-full p-2.5 dark:bg-[#ebebe8] dark:placeholder-gray-800 dark:text-gray-800 dark:focus:ring-white dark:focus:border-white">
                                        <option className='' value="Particulier">Information</option>
                                        <option className='' value="Entreprise">Vente</option>
                                        <option className='' value="Entreprise">Location</option>
                                        <option className='' value="Entreprise">Location-Vente</option>
                                    </select>
                                </div>
                                <div className="">
                                    <label htmlFor="">Type de bien</label>
                                    <select id="countries_multiple" className="focus:outline-none focus:border-[#7a1317] bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-white block w-full p-2.5 dark:bg-[#ebebe8] dark:placeholder-gray-800 dark:text-gray-800 dark:focus:ring-white dark:focus:border-white">
                                        <option className='' value="Particulier">Maison</option>
                                        <option className='' value="Particulier">Studio</option>
                                        <option className='' value="Entreprise">Terrain</option>
                                    </select>
                                </div>
                                <div className="">
                                    <label htmlFor="">Meublé ?</label>
                                    <select id="countries_multiple" className="focus:outline-none focus:border-[#7a1317] bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-white block w-full p-2.5 dark:bg-[#ebebe8] dark:placeholder-gray-800 dark:text-gray-800 dark:focus:ring-white dark:focus:border-white">
                                        <option className='' value="Particulier">Oui</option>
                                        <option className='' value="Entreprise">Non</option>
                                    </select>
                                </div>
                                <div className="">
                                    <label for="medium-range" className="block text-sm text-gray-900">Prix</label>
                                    <input id="medium-range" type="range" value="50" class="w-full h-2 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-[#E53E3E]"/>
                                    <div className="flex justify-between mt-4">
                                        <button className='bg-[#E53E3E] py-2 px-6 text-white rounded-md'>Réinitialiser</button>
                                        <button className='bg-blue-600 py-2 px-6 text-white rounded-md'>Appliquer</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="bg-white p-10 rounded-md flex flex-col">
                            <button className='text-center text-xl font-bold text-white py-2 px-6 bg-[#7a1317] mb-4'>View all on map</button>
                            <div className="bg-[#ebebe8]">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore laudantium possimus quasi laboriosam deserunt debitis, mollitia doloremque. Velit deleniti, magni, amet animi sequi aspernatur, perspiciatis inventore assumenda quia reprehenderit fuga perferendis et! Aliquid deserunt repudiandae corporis optio quo voluptatem! Excepturi impedit doloribus laboriosam unde temporibus blanditiis iusto possimus aspernatur porro provident molestiae, iste voluptatibus a quisquam vero debitis accusantium modi fugiat corporis ea repellendus. Sunt at qui autem ratione! Nihil dolor aut eligendi quod ipsam modi eveniet architecto ratione asperiores sunt ullam rerum est quidem, explicabo atque at commodi? Dignissimos ipsum praesentium illo, voluptas dolore laboriosam nostrum. Vitae dolorem distinctio facere reprehenderit neque ad, suscipit dignissimos similique nisi recusandae aliquid explicabo libero, nostrum magnam, optio dolore itaque esse? Est eius consectetur aliquid quam molestias! Amet ipsam eum delectus fuga doloremque?
                            </div>
                        </div>
                        <div className="bg-white p-10 rounded-md">
                            <div className="header flex flex-col gap-4">
                                <div className="flex justify-between">
                                    <div className="flex items-center gap-4">
                                        {/* <img src="" alt="" /> */}
                                        <FontAwesomeIcon icon={faUserCircle} className='size-20'/>
                                        <div className="">
                                            <h3>Lorem, ipsum dolor.</h3>
                                            <span>11-04-2024, 11:33</span>
                                        </div>
                                    </div>
                                    <button className="text-blue-400 font-bold">Intéressé</button>
                                </div>
                                <div className="flex flex-col">
                                    <span>Habitation,Yopougon</span>
                                    <span>Juste une description</span>
                                </div>
                            </div>
                            <div className="body py-4">
                                <img src={home} alt="" />
                            </div>
                            <div className="footer flex flex-col gap-4">
                                <div className="flex justify-between">
                                    <div className="flex items-center gap-2">
                                        <FontAwesomeIcon icon={faThumbsUp}/>
                                        <span>0</span>
                                        <span>Personne(s)</span>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex items-center gap-2">
                                            <span>66</span>
                                            <span>Commentaire(s)</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span>3</span>
                                            <span>Reaction(s)</span>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className="flex justify-between">
                                    <button className="flex items-center gap-2">
                                        <FontAwesomeIcon icon={faThumbsUp}/>
                                        <span>J'aime</span>
                                    </button>
                                    <button className="flex items-center gap-2">
                                        <FontAwesomeIcon icon={faMessage}/>
                                        <span>Commenter</span>
                                    </button>
                                    <button className="flex items-center gap-2">
                                        <FontAwesomeIcon icon={faAddressCard}/>
                                        <span>Republier</span>
                                    </button>
                                    <button className="flex items-center gap-2">
                                        <FontAwesomeIcon icon={faHeart}/>
                                        <span>Favoris</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <ViewPublications/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomePage