import React from "react";
import './hero.css';
import Lottie from "lottie-react";
import heroAnimation from '..//..//..//public/animation/forhero.json'
import { useRef } from "react";
import { motion } from "framer-motion";
const Hero =()=> {
    const lottieRef=useRef();
return(

    <div id="article" className="hero flex">
        <div className="parag ">
            <div className="imgsection  ">

                <motion.img 
                initial={{transform:"scale(0)"}}
                animate={{transform:"scale(1)"}}
                transition={{damping:4,type:"spring",stiffness:120}}
                src="/me.jpg" alt="" />
                 <span className="icon-verified"></span>
        
            </div>
            <div className="pargraphe">
                <motion.h1
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration:5}}
                >
                   
                     Web developer, founder, and tech enthusiast.
                     </motion.h1>
                <motion.p
                 whileHover={{ scale: 1.2 }}
                 whileTap={{ scale: 8.1 }}
                 drag="x"
                 dragConstraints={{ left: -100, right: 100 }}
               
                >
                    I’m Souhail, a web developer and tech entrepreneur based in Montreal. I’m the founder and CEO of WebWise Solutions, where we create innovative web technologies that empower individuals and businesses to thrive in the digital world.
                    
                    </motion.p>
                
                <div className="icons">
                <button className="icon-facebook icon-instagram icon-github icon-linkedin"></button>
                    
                <button className="icon-facebook"></button>
                <button className="icon-github-square"></button>
                
  
                            <button  className="icon-linkedin-square"></button>
                    

                </div>
            </div>

        </div>
        
        <div className="img animation">
        <Lottie  
        lottieRef={lottieRef}
        className="lottiehero" 
        onLoadedImages={() => {
            // @ts-ignore
            lottieRef.current.setSpeed(8000);
        }}
        
        animationData={heroAnimation} />


        </div>

    </div>
)


}
export default Hero