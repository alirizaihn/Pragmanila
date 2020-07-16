import React, {useState } from 'react'
import {useDispatch} from 'react-redux';
import {newMessageAction} from '../../Actions'
import { useToasts } from "react-toast-notifications";


function Index() {
   
   
        const [nam, setName] = useState("");
        const [message, setMessage] = useState("");
        const [subj, setSubject] = useState("");
        const { addToast } = useToasts()

        const dispatch = useDispatch();

        function clearHooks(){
            setName('')
            setSubject('')
            setMessage('')
        }
        function sendMessage(e){
            
            if(nam && message && subj){
                console.log("name:", nam)
                addToast("Your message has been successfully sent", {
                    appearance: "success",
                    autoDismiss: true,
                });
                dispatch(newMessageAction(e, nam, message, subj))
                clearHooks();
             
            }
            else{
                e.preventDefault();
                addToast("Please Fill All Inputs !!", {
                    appearance: "error",
                    autoDismiss: true,
                });
                console.log("Icerik bomobos:", nam)
                 
            }
        }
        

        return (
            <div>
            <form onSubmit={(e) => sendMessage(e)}>
                <div >
                    <input className='br-5' type="name"  id="inputName"  onChange={(e)=>{setName(e.target.value)}} value={nam} placeholder="Name" />
                </div>
                <div class="">
                    <input className='br-5' type="text" id="subject"  onChange={(e)=>{setSubject(e.target.value)}} value={subj}  placeholder="Subject"/>
                </div>
                <div class="">
                    <textarea class="br-5 textarea"id="message" placeholder="Message"   onChange={(e)=>{setMessage(e.target.value)}} value={message} rows="6" siz></textarea>
                </div>
                <div class="" style={{textAlign: "center", marginTop: "20px"}} >
                    <button type="submit" class="fill-button bg-green">SEND</button>
                </div>

            </form>
           
        </div>
        )
   
}

export default Index;
