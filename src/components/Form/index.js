import React, {useState } from 'react'
import {useDispatch} from 'react-redux';
import {newMessageAction} from '../../Actions'

function Index() {
   
   
        const [nam, setName] = useState("newMessage");
        const [message, setMessage] = useState("newMessage");
        const [subj, setSubject] = useState("newSubject");
        const dispatch = useDispatch();

        return (
            <div>
            <form onSubmit={(e) => dispatch(newMessageAction(e, nam, message, subj))}>
                <div >
                    <input className='br-5' type="name"  id="inputName"  onChange={(e)=>{setName(e.target.value)}} placeholder="Name" />
                </div>
                <div class="">
                    <input className='br-5' type="text" id="subject"  onChange={(e)=>{setSubject(e.target.value)}}  placeholder="Subject"/>
                </div>
                <div class="">
                    <textarea class="br-5 textarea"id="message" placeholder="Message"   onChange={(e)=>{setMessage(e.target.value)}} rows="6" siz></textarea>
                </div>
                <div class="" style={{textAlign: "center", marginTop: "20px"}} >
                    <button type="submit" class="fill-button bg-green">SEND</button>
                </div>

            </form>
           
        </div>
        )
   
}

export default Index;
