import React, { useEffect, useLayoutEffect } from 'react';
import { User } from '../data/user';
import { FaBell, FaCaretDown, FaUser, FaUserGroup, FaWrench } from 'react-icons/fa6';
import { FaArrowCircleLeft } from 'react-icons/fa';

export default function Navbar() {


  var [user, setUser] = React.useState<User | null>(null);
  var [dropdownMenu, setDropdownMenu] = React.useState(false);
  var [dropdownNotif, setDropdownNotif] = React.useState(false);

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

  useLayoutEffect(() => {
    let user = window.localStorage.getItem('user');
    if (user !== null) {
      setUser(JSON.parse(user));
    }
  }, []);

  return (
    <nav className='bg-background-main text-text-main h-16 flex w-full gap-8 motiva font-bold text-xl items-center px-5'>
      <a href="/">
        <img src="/steam-logo.png" alt="Steam logo" className='w-32' />
      </a>
      <a id="store" href="/store#">MAGASIN</a>
      <a id="community" href="/community">COMMUNAUTÉ</a>
      <a id="profile" href='/profile'>{user !== null ? user.username.toUpperCase() : "PROFIL"}</a>
      <a id="library" href="/library">BIBLIOTHÈQUE</a>
      <a id="downloads" href="/downloads">TÉLÉCHARGEMENTS</a>
      <div className="flex-auto"></div>


      {user !== null ?
        <div className='flex gap-2'>
          <button className='btn bg-background-highlight text-text-dim text-2xl p-2 px-4 rounded'><FaUserGroup /></button>
          <button onClick={() => setDropdownNotif(!dropdownNotif)} className='btn bg-background-highlight text-text-dim text-2xl p-2 px-4 rounded relative'>
            <div className="absolute w-5 h-5 items-center text-xs font-bold text-black  bg-color-primary rounded-full -top-0 -end-2">2</div>
            <FaBell />
          </button>
          <button onClick={() => setDropdownMenu(!dropdownMenu)} className='btn bg-background-highlight p-2 text-base rounded flex gap-3 items-center'>
            <img src={user.avatarURL} alt="Avatar" className='w-10 h-10 rounded-sm' />
            {user.username}
            <span className='text-text-dim'>{user.wallet}€</span>
            <FaCaretDown />
          </button>
        </div>
        :
        <div className='p-1 rounded text-base font-normal'>
          <a id="register" href="/register">INSCRIPTION</a>
          <span className='text-text-main'> | </span>
          <a id="login" href="/login">CONNEXION</a>
        </div>}

      {/* dropdownMenu */}
      <div className={`absolute top-[4.5rem] z-10 right-5 flex flex-col bg-background-main w-48 p-4 rounded ${dropdownMenu ? 'block' : 'hidden'}`}>
        <a href='/profile' className={`flex items-center gap-2 ${user?.isAdmin ? "block" : "hidden"}`}> <FaWrench /> Admin</a>
        <a href='/profile' className='flex items-center gap-2'> <FaUser /> Profil</a>
        <button className='flex items-center gap-2' onClick={disconnectUser}> <FaArrowCircleLeft /> Déconnexion</button>
      </div>

      {/* dropdownNotif */}
      <div className={`absolute top-[4.5rem] z-10 right-36 flex flex-col gap-3 bg-background-main w-96 h-96  p-4 rounded ${dropdownNotif ? 'block' : 'hidden'}`}>
        {/* Notification */}
        <div className='bg-gradient-to-t from-background-main to-background-secondary h-1/4 rounded flex p-2 border border-background-secondary'>
          <img src="https://image.api.playstation.com/vulcan/img/rnd/202010/2723/knxU5uU5aKvQChKX5OvWtSGC.png" alt="Sekiro" className='rounded' />
          <div className='flex flex-col gap-4 p-4 pt-0'>
            <h1 className='text-lg motiva'>SEKIRO : Shadow die twice  est en solde!</h1>
          </div>
        </div>

        <div className='bg-gradient-to-t from-background-main to-background-secondary h-1/4 rounded flex p-2 border border-background-secondary'>
          <img src="https://s3.dathost.net/2015/03/half-life-3-logo.jpg" alt="Half life 3" className='rounded' />
          <div className='flex flex-col gap-4 p-4 pt-0'>
            <h1 className='text-lg motiva'>Half life 3 Confirmé par valve!</h1>
          </div>
        </div>
      
      
      </div>



    </nav>


  );
}