import React, { ReactNode, useEffect, useState } from 'react';
import { FaCog, FaSearch } from 'react-icons/fa';
import Home from './pages/store/Home';
import Browse from './pages/store/Browse';

export default function StorePage() {

  const handleClick = (element: HTMLAnchorElement) => {
    const links = document.querySelectorAll('a');
    links.forEach((link) => {
      link.classList.remove('bg-color-secondary');
    });
    element.classList.add('bg-color-secondary');
}

const [currentComponent, setCurrentComponent] = useState<React.ReactNode | null>(Home);
const componentsMap: { [key: string]: ReactNode } = {
  '': <Home />,
  '#browse': <Browse />,
  // '#discover': Discover,
  // '#pointshop': PointShop,
  // '#curators': Curators,
  // '#giftcards': GiftCards,
  // '#news': News,
  // '#wishlist': Wishlist,
  // '#cart': Cart,
};

const handleHashChange = () => {
  const hash = window.location.hash;
  setCurrentComponent(componentsMap[hash] || Home);
}

useEffect(() => {
  window.addEventListener('hashchange', handleHashChange);
  handleHashChange(); // Set initial component based on current hash
}, []);



  

  return (
    <div className='relative'>
      <nav>
        <ul className='flex justify-between gap-3 bg-background-tertiary h-16 items-center px-3'>
            <li><a onClick={(e) => handleClick(e.target as HTMLAnchorElement)} className='px-6 rounded py-4 bg-color-secondary' href="#">Accueil</a></li>
            <li><a onClick={(e) => handleClick(e.target as HTMLAnchorElement)} className='px-6 rounded py-4' href="#browse">Parcourir</a></li>
            <li><a onClick={(e) => handleClick(e.target as HTMLAnchorElement)} className='px-6 rounded py-4' href="#discover">Découvrir</a></li>
            <li><a onClick={(e) => handleClick(e.target as HTMLAnchorElement)} className='px-6 rounded py-4' href="#pointshop">Boutique de points</a></li>
            <li><a onClick={(e) => handleClick(e.target as HTMLAnchorElement)} className='px-6 rounded py-4' href="#curators">Curateurs</a></li>
            <li><a onClick={(e) => handleClick(e.target as HTMLAnchorElement)} className='px-6 rounded py-4' href="#giftcards">Cartes cadeaux</a></li>
            <li><a onClick={(e) => handleClick(e.target as HTMLAnchorElement)} className='px-6 rounded py-4' href="#news">Actualités</a></li>
            <li className='flex-auto'></li>
              <li className='p-2 px-4 rounded bg-background-main-20 flex justify-between items-center flex-auto w-1/5'>
              <input type="text" className='bg-transparent outline-none w-full'  placeholder='Recherche...' /><FaSearch className='text-color-secondary'/></li>
            <li className='flex-auto'></li>
            <li><a onClick={(e) => handleClick(e.target as HTMLAnchorElement)} className='px-6 rounded py-4' href="#giftcards">Wishlist</a></li>
            <li><a onClick={(e) => handleClick(e.target as HTMLAnchorElement)} className='px-6 rounded py-4' href="#news">Panier</a></li>
            <li><button className='px-4 rounded py-4 bg-[#76808C10] text-text-dim'><FaCog/></button></li>

        </ul>
      </nav>

    <div id="renderer">
      {currentComponent}
    </div>


    </div>
  );
}