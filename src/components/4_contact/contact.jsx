import React from "react";
import './contact.css';
import Lottie from "lottie-react";
import doneAnimation from '../../../public/animation/First Project/2.json'
import emailAnimation from '..//..//..//public/animation/email.json'
import { useForm, ValidationError } from '@formspree/react';
const Contact =()=> {
    const [state, handleSubmit] = useForm("xleqpkbd");
 

return(

    <div id="contact" className="contact">
     <div className="msg flex">
        <div className="contactarea flex">
            <span className="icon-envelope"></span>
            <h1>Contact Us</h1>
            
        </div>
        <p className="flex">Get in touch for more details and to stay informed about our latest publications.</p>
     </div>
    <div className="submitsection flex ">
        <div className="submitaion  flex">
        <form onSubmit={handleSubmit}>
            <div className="emaildiv flex">
                <label >Email Adresse :</label>
                <input   style={{width:170,fontSize:7,height:18}} required placeholder='EMAIL addresse' name="email" type="email" id="email"/>
                <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
            </div>
            <div className="msgdiv flex"> 
                <label >your  Message :</label>
                <textarea style={{width:180,fontSize:7,height:120}}required placeholder="create a message .." id="Message" name ="message"rows={6} cols={30}></textarea>      
                <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
            </div>
     <div className="button">

      <button type="submit" disabled={state.submitting} className="submit">{state.submitting ?"Submiting....":"Submit"}</button>
     </div>
                    {state.succeeded && 
                   
                    
                      <p className="validationMsg flex">
                         <Lottie  className="lottie" loop={1} style={{height:55}} animationData={doneAnimation} />
                        
                        <p>UR msg has been sent  successfully ♥ </p>
                            </p>
                   
                        }
             </form>

        </div>
        
        <Lottie className="emaillottie"  animationData={emailAnimation} />   
        
    </div>

    </div>
)


}
export default  Contact