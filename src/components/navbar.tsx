import React, { useEffect } from 'react';
import { User } from '../data/user';
import { FaBell, FaCaretDown, FaUserGroup } from 'react-icons/fa6';

export default function Navbar() {


  var [user, setUser] = React.useState<User | null>(null);

  const disconnectUser = () => {
    window.location.href = "/";
    window.localStorage.removeItem('user');
  }

  
  useEffect(() => {
    let path = window.location.pathname;
    let links = document.querySelectorAll('a');
    links.forEach(link => {
      if (link.getAttribute('href') === path) {
        link.classList.add('text-color-primary');
      }
    });
  }, []);

  useEffect(() => {
    let user = window.localStorage.getItem('user');
    if (user !== null) {
      setUser(JSON.parse(user));
    }
  }, []);
  
  return (
  <div className='bg-background-main text-text-main h-16 flex w-full gap-8 motiva font-bold text-xl items-center px-5'>
    <a href="/">
    <img src="/steam-logo.png" alt="Steam logo" className='w-32' />
    </a>
    <a id="store" href="/store">MAGASIN</a>
    <a id="community" href="/community">COMMUNAUTÉ</a>
    <a id="profile" href="/profile">{user !== null ? user.username.toUpperCase() : "PROFIL"}</a>
    <a id="library" href="/library">BIBLIOTHÈQUE</a>
    <a id="downloads" href="/downloads">TÉLÉCHARGEMENTS</a>
    <div className="flex-auto"></div>


    {user !== null ? 
    <div className='flex gap-2'>
      <button className='btn bg-background-highlight text-text-dim text-2xl p-2 px-4 rounded'><FaUserGroup/></button>
      <button className='btn bg-background-highlight text-text-dim text-2xl p-2 px-4 rounded relative'>
        <div className="absolute w-5 h-5 items-center text-xs font-bold text-black  bg-color-primary rounded-full -top-0 -end-2">1</div>
        <FaBell/>
      </button>
      <button onClick={disconnectUser}  className='btn bg-background-highlight p-2 text-base rounded flex gap-3 items-center'>
        <img src={user.avatarURL} alt="Avatar" className='w-10 h-10 rounded-sm' />
        {user.username}
        <span className='text-text-dim'>{user.wallet}€</span>
        <FaCaretDown/>
      </button>
    </div>
    :
    <div className='p-1 rounded text-base font-normal'>
      <a id="register" href="/register">INSCRIPTION</a>
      <span className='text-text-main'> | </span>
      <a id="login" href="/login">CONNEXION</a>
    </div>}


  </div>);
}