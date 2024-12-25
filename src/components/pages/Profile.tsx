import React, { useEffect, useLayoutEffect } from 'react';
import { FaAngleDown } from 'react-icons/fa6';
import { User } from '../../data/user';

export default function ProfilePage() {

    const [user, setUser] = React.useState<User | null>(null);

    useLayoutEffect(() => {
        let user = window.localStorage.getItem('user');
        if (user !== null) {
            setUser(JSON.parse(user));
        } else {
            window.location.href = '/login';
        }
    }, []);


    return (
        <div className='w-5/6 mx-auto mt-16 p-5 flex flex-col gap-6 bg-[#31384335]'>
            {/* Top */}
            <section className='flex gap-5'>
                <img src={user?.avatarURL} alt="Profile avatar" className='w-64 rounded border-4 border-[#ffffff60]' />
                <div className='flex flex-col gap-16'>
                    <h1 className='flex items-center gap-3 text-4xl font-bold'>{user?.username} <FaAngleDown className='text-lg' /></h1>
                    <p>{user?.description || 'Description placeholder'}</p>
                </div>
                <div className='flex-auto'></div>
                <div className='flex flex-col gap-5 w-72'>
                    <button className='self-end rounded bg-background-highlight p-4'>Modifier le profil</button>
                    <div className='bg-background-main-20 flex flex-col gap-5 p-5 rounded'>
                        <div className="flex gap-2 h-1/4">
                            <div className='border-2 border-lime-600 rounded-full w-16 h-16 flex items-center justify-center text-3xl'>
                                25
                            </div>
                            <div>
                                Niveau
                                <p className='text-text-dim'>XP : 294 282</p>
                            </div>
                        </div>
                    </div>


                </div>
            </section>

            <section className='flex gap-5'>
                <main className='w-3/4 flex flex-col gap-5'>
                    {/* First Main Section */}
                    <div className='bg-background-main-20 rounded p-5 pt-1'>
                        <p className='text-text-dim'>Game Collector</p>
                        <div className='flex flex-col bg-background-main-50 rounded p-5 gap-6'>
                            <div className='flex gap-36 justify-center'>
                                <div>
                                    <h2 className='text-4xl font-bold text-center'>25</h2>
                                    <p className='text-text-dim'>Jeux possédés</p>
                                </div>
                                <div>
                                    <h2 className='text-4xl font-bold text-center'>25</h2>
                                    <p className='text-text-dim'>DLC</p>
                                </div>
                                <div>
                                    <h2 className='text-4xl font-bold text-center'>32</h2>
                                    <p className='text-text-dim'>Review</p>
                                </div>
                                <div>
                                    <h2 className='text-4xl font-bold text-center'>120</h2>
                                    <p className='text-text-dim'>Wishlist</p>
                                </div>
                            </div>
                            <div className='grid grid-cols-5 gap-5'>
                                <img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4000/header.jpg" alt="image steam" />
                                <img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3000/header.jpg" alt="image steam" />
                                <img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/6000/header.jpg" alt="image steam" />
                                <img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/5000/header.jpg" alt="image steam" />
                                <img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/8000/header.jpg" alt="image steam" />
                                <img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/7500/header.jpg" alt="image steam" />
                                <img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/9000/header.jpg" alt="image steam" />
                                <img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/21000/header.jpg" alt="image steam" />
                                <img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/13000/header.jpg" alt="image steam" />
                                <img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/500/header.jpg" alt="image steam" />
                            </div>
                        </div>

                    </div>

                </main>
                <aside className='w-1/4 bg-background-main-20 rounded'>
                    test
                </aside>
            </section>


        </div>)
}