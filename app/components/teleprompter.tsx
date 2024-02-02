"use client"

import { useEffect, useState } from "react";

export default function Teleprompter() {
    const text = "Lorem ipsum dolor sit amet, ei mundi putent temporibus mea, duo in mazim viris veniam, et pri nullam doctus mentitum. Cu vix postea aliquando. Posse viderer equidem ea eam, ad mucius inciderint qui. Pro ea dictas eligendi, at mea facer summo molestiae, bonorum sensibus ne vel. Ex quo petentium theophrastus, cu omnis novum tacimates eam, est an magna clita. Qui illum facete in, oratio timeam sit te.Recteque quaerendum eos ut, nam mundi fuisset scripserit in.Augue semper in vix, sea id mundi aliquid propriae, sea ei probo porro cetero.Cum movet blandit ea, at dolores qualisque repudiandae usu. Populo oporteat ut sed.Mei putent definitiones no, ut possim adipisci nam, bonorum forensibus mel id.Nam consul nusquam ea, vis eu veniam dolorum scribentur.Pri enim commune cu, temporibus concludaturque et per.Duo dolorum habemus cu. His tollit mucius no.Mel te mutat dolorum mediocrem, mea eu utinam dolorem imperdiet.No est porro adipisci similique, iuvaret eripuit disputationi an usu, inani omnium ne nam.Docendi fierent deleniti has cu, duo at partem pericula omittantur.Adhuc offendit vel at, id his simul invidunt. Pro in verterem honestatis, tantas populo possit eos et.Animal inciderint ei his, nam solet inermis ad.Vis at dicunt tritani singulis.Per eu quaeque saperet scripserit, eripuit docendi scripserit ne mel, ea pri vero quas equidem.Eam an similique conclusionemque, qui cu aeque verear voluptaria, eu sit accumsan albucius.An everti volumus verterem sit, cum dico scribentur te.Postea fastidii per ei, vim ad postea ponderum cotidieque. Pro vide ipsum mazim ut, vis cu fabellas expetendis reformidans.Blandit nominavi pericula pro an, vel at nisl vivendo.Postea audire corrumpit sit id, ad ipsum labore referrentur pri.Mea cu posse commodo laboramus, has et euismod splendide, mel populo facete maluisset in.Ut essent disputationi his, falli deserunt sententiae eu nam.At vel nominavi offendit gloriatur, quo viderer volumus dignissim eu, sed ei lucilius tincidunt."
    const [play, setPlay] = useState(false);
    const [currentScroll, setCurrentScroll] = useState(0);
    const speed = 10;

    useEffect(() => {
        const handleKeyDown = (e) => {
            const keyCode = e.keyCode;
            if (keyCode === 192) {
                e.preventDefault();
                setPlay((prevPlay) => !prevPlay);
            }
        };

        const handleScroll = () => {
            if (play) {
                setCurrentScroll((prevScroll) => {
                    if (window.scrollY + window.innerHeight === document.documentElement.scrollHeight) {
                        window.scrollTo(0, 0);
                        return 0;
                    } else {
                        window.scrollTo(0, prevScroll + 1);
                        return prevScroll + 1;
                    }
                });
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        const scroller = setInterval(handleScroll, speed);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            clearInterval(scroller);
        };
    }, [play]);

    const playTeleprompter = () => {
        setPlay((prevPlay) => !prevPlay)
        
    }

    const restartTeleprompter = () => {
       setCurrentScroll(0)
    }

    return (
        <div id="teleprompter-container"  className="teleprompter-container">
            <button onClick={playTeleprompter} className="bg-red-400 px-4 py-2 rounded-md fixed top-2">Play</button>
            <button onClick={restartTeleprompter} className="bg-gray-400 px-4 py-2 rounded-md fixed top-2 left-[500px]">Restart</button>
            <p id="teleprompter-text" className="">{text}</p>
        </div>
    );
}