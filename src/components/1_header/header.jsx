import React, { useEffect, useState } from "react";
import './header.css';
const Header = () => {



    const [mood, setmood] = useState(localStorage.getItem("currentmood")?? "dark")
    useEffect(() => {
        const change=document.getElementsByClassName("mode");
    
            if (mood==="light") {
                
                document.body.classList.remove("dark")
                document.body.classList.add("light")
            }
            else{
                document.body.classList.remove("light")
                document.body.classList.add("dark")
                
            }

    }, [mood]);
    
    const [showmodal, setshowmodal] = useState(false)
    return (
        <header className="flex">
            <button className="menu icon-menu flex" onClick={() => {
                setshowmodal(true)
            }} />
            <div />

            <nav id="header">

                <ul className="flex rot" >


                    <li><a href="">About</a></li>
                    <li><a href="">Articles</a></li>
                    <li><a href="">Projects</a></li>
                    <li><a href="">Speaking</a></li>
                    <li><a href="">Contact</a></li>

                </ul>
            </nav>

            <button  onClick={() => {
              localStorage.setItem("currentmood",mood==="dark" ? "light":"dark")
            setmood(localStorage.getItem("currentmood"))
            }
            } className="mode flex">
                {mood==="dark"?(<span className="icon-moon-o"></span>):(<span className="icon-brightness-contrast"></span>)}

            </button>

            {showmodal && (
                <div className="fixed ">


                    <ul className="modal">
                        <li>
                            <button onClick={() => {

                                setshowmodal(false)
                            }}>
                                <span className="icon-close"></span>
                            </button>
                        </li>
                        <li><a href="">About</a></li>
                        <li><a href="">Articles</a></li>
                        <li><a href="">Projects</a></li>
                        <li><a href="">Speaking</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>


                </div>

            )}
        </header>
    )


}
export default Header