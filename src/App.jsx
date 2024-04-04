
import Header from './components/1_header/header'
import Hero from './components/2_Hero/hero'
import Contact from './components/4_contact/contact'
import Main from './components/3_main/main'
import Footer from './components/footer/footer'
import { useEffect } from 'react'


function App() {
    useEffect(()=> {
      window.addEventListener("scroll",()=>{
        const myconst=document.getElementById('flech');
       if(window.scrollY>200){
         
         myconst.style.opacity="1"
         myconst.style.transition='03.s'
        }
        else{
          myconst.style.opacity="0"

        }
      })

    },[]);
  return (
    <div className='container'>
    <Header/>
    <Hero/>
    <div className='divider'/>
    <Main/>
    <div className='divider'/>
    <Contact/>
    <div className='divider'/>
    <Footer/>
   {/*  <a href="#header" className='flex '>
      <button  className=""></button>
    </a> */}
    <a href='#header'> <button  id="flech" className='flech icon-arrow-thin-up' ></button> </a>
    </div>

    
  )
  
}

export default App
