import React from 'react'

function listItem({ message, name, date }) {
    return (
        <div className='br-5 mt-1em bg-white mr-05em'>
            <div className="br-5 d-flex row bg-white ">
                <div className="br-5 bold col d-flex justify-space p-1_5em w-30 bg-white">
                    <label >{name}</label>
                </div>
                <div className="br-5 col d-flex justify-space justify-around ml-auto">
                    <label style = {{color:'#818181'}}>{date}</label>
                </div>
            </div>
            <div className="br-5 d-flex row ml-05em ">
                <label style = {{color:'#818181'}} >{message}</label>
            </div>
        </div>
    )
}
export default listItem;
