import React from 'react'
import { localStorageAction } from '../../Actions'
import { useSelector, useDispatch } from 'react-redux'
import ListItem from './listItem'

function Index() {

    const dispatch = useDispatch()
    const messagesRedux = useSelector(state => state.messages);
    const messages = localStorage.getItem('messages') ? JSON.parse(localStorage.getItem('messages')) : messagesRedux
    let retrievedObject = JSON.parse(localStorage.getItem('messages'));

    if (localStorage.getItem('messages') && messagesRedux.length < 1) {
        dispatch(localStorageAction(retrievedObject))
    }

    return (
        <div className=' guestbook-list'>
            {messages.map(mess => (
                <ListItem message={mess.message} name={mess.name} subject= {mess.subject} date={mess.date}></ListItem>
            ))}
        </div>
    )
}


export default Index;
