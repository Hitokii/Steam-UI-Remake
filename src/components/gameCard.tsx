import React from "react";
import { Game } from "../data/game";
import { FaApple, FaLinux, FaRegHeart, FaWindows } from "react-icons/fa";

export default function gameCard({game}: {game: Game}) {

            return (
                <div className="relative flex w-full h-full">
                    <div className="w-full ">
                        <img src={game.image} alt={`${game.title} image`} className="p-2 object-contain w-full h-full" />
                    </div>
                    <div className="w-full flex flex-col">
                        <h1 className="text-2xl font-bold">{game.title} </h1>
                        <p>{game.description}</p>
                        <div className="flex-1"></div>
                        <div id="gameCardFooter" className="p-5 gap-2 flex flex-col">
                            <div className="flex justify-between">
                                <div className="flex gap-2">
                                    {game.genre.map((genre) => <p key={genre} className="p-2 bg-background-highlight rounded">{genre}</p>)}
                                </div>
                                <div className="flex">
                                    {game.platform.map((platform) => <p key={platform} className="p-2">{
                                        platform === "Windows" ? <FaWindows/> : platform === "Mac" ? <FaApple/> : <FaLinux/>
                                        }</p>)}
                                </div>
                            </div>
                            <div className="flex">
                                <button className="bg-background-highlight p-4 flex items-center gap-2 rounded">Liste de souhait <FaRegHeart /></button>
                                <div className="flex-auto"></div>
                                <h1 className="font-bold text-3xl mr-3">{game.price}€</h1>
                                <button className="bg-color-secondary rounded motiva font-bold p-4">Acheter maintenant</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    