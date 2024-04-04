import React, { useEffect, useState } from 'react';
import './main.css';
import {myprojects} from './myprojects'
import { motion } from "framer-motion";

const Main =()=> {
    useEffect(( )=>{
      const mylist=document.querySelectorAll('.left button')
      mylist.forEach(mylist=>{
        mylist.addEventListener('click',()=>{
            document.querySelector('.active')?.classList.remove('active');
            mylist.classList.add('active')
            
        })
      })

        return ()=>{

        }
    })
    const [arr,setarr]=useState(myprojects)
    return(

    <main className=" flex ">
      

        {/*left section*/}

    <div id ="prj"className="left flex">
    <button className='active'onClick={()=>{
       
        setarr(myprojects)
    }}> All Projects</button>
    <button onClick={()=>{
        const newarr=myprojects.filter((item)=>{
            return item.catogery === "css"

        })
        setarr(newarr)
    }}>Html&&Css</button>
    <button onClick={()=>{
        const newarr=myprojects.filter((item)=>{
            return item.catogery === "js"

        })
        setarr(newarr)
    }}>JavaScripts</button>
    <button onClick={()=>{
        const newarr=myprojects.filter((item)=>{
            return item.catogery ==="react"
        })
        setarr(newarr)
    }}>ReactJS</button>
    <button onClick={()=>{
        const newarr=myprojects.filter((item)=>{
            return item.catogery === "node"

        })
        setarr(newarr)
    }}>Node&Express</button>
    </div>
   
    {/*Right section*/}
    <div className="right flex">
       
        
     
       {arr.map((item) =>{

        return(
            
            <motion.article 
            layout 
             initial={{transform:"scale(0)"}}
                animate={{transform:"scale(1)"}}
            transition={{type:"spring",damping:8,stiffness:50}}
            
            key={item.imgPath} className="card flex ">
          
             
        <img width ={150}src={item.imgPath} alt="" />
        <div style={{width:"150px"}}className="parag">
            <h1>{item.projectsTitle}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi incidunt nisi eveniet facere id optio necessitatibus et facilis harum dolorum magni eos animi dolores, tenetur doloribus rem vero commodi non!</p>
        </div>
        <div style={{width:"150px"}} className="footer">
            <div className="icons">
            <button className="icon-link"></button>
                
            <button className="icon-github-square"></button>
            </div>
            <div className="more">
                 <button>
                    more
                    </button> 
                <button className="icon-arrow-right i"></button>
            </div>
        </div>
        
             
    </motion.article>


        )

    })}

    
    
    </div>
    
    </main>
      
)


}
export default Main