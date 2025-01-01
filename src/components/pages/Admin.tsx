import React, { useEffect, useLayoutEffect } from 'react';
import { User } from '../../data/user';
import { addGame, Game, getGames } from '../../data/game';
import { db } from '../../services/Firebase';

export default function AdminPage() {


    var [user, setUser] = React.useState<User | null>(null);

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
    }, [user]);

    const addGameDB = () => {
        var title = (document.getElementById('title') as HTMLInputElement).value;
        var description = (document.getElementById('description') as HTMLInputElement).value;
        var price = (document.getElementById('price') as HTMLInputElement).value;
        var image = (document.getElementById('image') as HTMLInputElement).value;
        var genre = (document.getElementById('genre') as HTMLInputElement).value.split(',');
        var platform: string[] = [];


        document.querySelectorAll('input[name=platform]:checked').forEach((checkbox) => {
            platform.push(checkbox.id);
        });

        var game: Game = {
            title: title,
            description: description,
            price: parseFloat(price),
            image: image,
            genre: genre,
            platform: platform,
            rating: 0,
            releaseDate: '',
            developer: '',
            publisher: '',
            tags: []
        }

        addGame(db, game);
    }

    return (
        <div>
            <form className='grid grid-cols-2 p-5 gap-5 text-center'>
                <div className='border flex justify-around text-3xl rounded-xl'>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" name="title" />
                </div>
                <div className='border flex justify-around text-3xl rounded-xl'>

                    <label htmlFor="description">Description</label>
                    <input type="text" id="description" name="description" />
                </div>
                <div className='border flex justify-around text-3xl rounded-xl'>
                    <label htmlFor="price">Price</label>
                    <input type="number" step={0.01} id="price" name="price" />
                </div>
                <div className='border flex justify-around text-3xl rounded-xl'>
                    <label htmlFor="image">Image</label>
                    <input type="image" id="image" name="image" />
                </div>
                <div className='border flex justify-around text-3xl rounded-xl'>
                    <label htmlFor="genre">Genre</label>
                    <input type="text" id="genre" name="genre" />
                </div>
                <div className='border flex justify-around text-3xl rounded-xl flex-col'>
                    <div>
                    <label htmlFor="platform">Windows </label>
                    <input type="checkbox" id="Windows" name="platform" />
                    </div>
                    <div>
                    <label htmlFor="platform">Mac </label>
                    <input type="checkbox" id="Mac" name="platform" />
                    </div>
                    <div>
                    <label htmlFor="platform">Linux </label>
                    <input type="checkbox" id="Linux" name="platform" />
                    </div>
                </div>
                <button onClick={addGameDB}>Add game</button>

            </form>
        </div>
    )
}