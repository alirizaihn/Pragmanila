import { getTodayDate } from '../utils'
export const newMessageAction = (e, nam, message, subj) => {
    e.preventDefault();
    return {
        type: 'newMessage',
        name: nam,
        message: message,
        subject: subj,
        date: getTodayDate()
    };
};
export const localStorageAction = (messages = []) => {

    return {
        type: 'lsMessages',
        messages

    };
}; 