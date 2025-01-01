import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export default function Caroussel({customClassname, Objects}: {customClassname?:string, Objects:any[]}) {

    var [indexWatching, setIndexWatching] = useState(0);

    return (
        <div className={`${customClassname} relative w-full h-[50vh] flex flex-col`}>
            <main className="flex justify-between h-full px-16 bg-background-main">
                <button className="text-3xl" onClick={() => indexWatching > 0 ? setIndexWatching(indexWatching-1) : null}>
                    <FaAngleLeft />
                </button>
                <div id="content" className="w-full h-full">
                    {Objects[indexWatching]}
                </div>
                <button className="text-3xl" onClick={() => indexWatching < Objects.length-1 ? setIndexWatching(indexWatching+1) : null}>
                    <FaAngleRight />
                </button>
            </main>

            <div className="mx-auto flex gap-4 p-2">
                {Objects.map((element, len) => 
                <button onClick={() => setIndexWatching(len)} key={len} className={`transition-all w-11 h-3 rounded-xl ${indexWatching == len ? "bg-color-secondary":"bg-background-main"}`}></button>)
                }
            </div>
        </div>
    )
}