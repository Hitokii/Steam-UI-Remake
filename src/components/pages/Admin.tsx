import React, { useEffect, useLayoutEffect } from 'react';
import { User } from '../../data/user';
import { Game, getGames } from '../../data/game';
import { db } from '../../services/Firebase';

export default function AdminPage() {


    var [user, setUser] = React.useState<User | null>(null);
    var [games, setGames] = React.useState<Game[]>([]);

    useLayoutEffect(() => {
        let user = window.localStorage.getItem('user');
        if (user !== null) {
            setUser(JSON.parse(user));
        }
    }, []);

    useEffect(() => {
      if (user !== null && !user.isAdmin) {
        window.location.href = '/';
      }

      getGames(db).then(games => {
        setGames(games);
      });

    }, [user]);

    return (
        <div>
            <div className='flex'>
              {games.map(game => {
                return (
                  <div className='bg-background-dim w-1/4 p-4 m-4 rounded'>
                    <img src={game.image} alt={game.title} className='w-full h-48 object-cover rounded' />
                    <h1 className='text-xl font-bold'>{game.title}</h1>
                    <p>{game.description}</p>
                    <p>{game.price}€</p>
                  </div>
                )

              }
              )}
            </div>
        </div>
    )
}