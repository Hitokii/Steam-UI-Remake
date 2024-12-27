import React, { ReactNode, useEffect, useState } from 'react';
import { FaCog, FaSearch } from 'react-icons/fa';
import Home from './pages/store/Home';
import Browse from './pages/store/Browse';
import { Game, getGamesByName } from '../data/game';
import { db } from '../services/Firebase';

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

const searchForGame = async (arg: string): Promise<Game[]> => {
  if (arg === '')
    return [];
  const games = await getGamesByName(db, arg);
  return games;
}

const [searchResults, setSearchResults] = useState<Game[]>([]);

const handleSearchChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
  const games = await searchForGame(e.target.value);
  setSearchResults(games);
}

const renderGamesSearch = (games: Game[]) => {
  return (
    <>
      {games.map(game => (
        <div key={game.id} className='absolute top-0 left-0 flex bg-background-dim justify-around w-full p-4 m-4 rounded'>
          <img src={game.image} alt={game.title} className='h-48 object-contain rounded' />
          <div>
            <h1 className='text-xl font-bold'>{game.title}</h1>
            <p>{game.description}</p>
            <p>{game.price}€</p>
          </div>
        </div>
      ))}
    </>
  );
}

  

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
              <input type="text" onChange={(e) => handleSearchChange(e)} className='bg-transparent outline-none w-full'  placeholder='Recherche...' /><FaSearch className='text-color-secondary'/></li>
            <li className='flex-auto'></li>
            <li><a onClick={(e) => handleClick(e.target as HTMLAnchorElement)} className='px-6 rounded py-4' href="#giftcards">Wishlist</a></li>
            <li><a onClick={(e) => handleClick(e.target as HTMLAnchorElement)} className='px-6 rounded py-4' href="#news">Panier</a></li>
            <li><button className='px-4 rounded py-4 bg-[#76808C10] text-text-dim'><FaCog/></button></li>
        </ul>
      </nav>

      <div className={`${searchResults.length > 0 ? 'block' : 'hidden'} animate-fade-in absolute left-1/2 mx-auto top-20 text-center h-1/2 z-10 bg-background-main rounded w-1/4`}>
        {renderGamesSearch(searchResults)}
      </div>

    <div id="renderer">
      {currentComponent}
    </div>


    </div>
  );
}