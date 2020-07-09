const message = (action) => {
    return {
        name: action.name,
        message: action.message,
        subject: action.subject,
        date: action.date
    }
}
const MessageReducer = (state = [], action) => {
    // const [messages, setMessages] = useState([]);
    let reminders = null;
    console.log('STATE:', state)
    switch (action.type) {
        case 'newMessage':
            console.log('InREDUCER Case newMEssage', action.message)
            reminders = [message(action), ...state];
            // console.log(reminders) 
            localStorage.setItem('messages', JSON.stringify(reminders))
            return reminders;
        case 'lsMessages':
            console.log('InREDUCER Case LSMESSAGES', action.messages)
            return action.messages
        default:
            return state;

    }

}
export default MessageReducer;