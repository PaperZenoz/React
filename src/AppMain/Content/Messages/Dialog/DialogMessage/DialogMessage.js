import React from 'react';
import Message from './Message/Message';


const DialogMessage = (props) => {

    let DialogElement = props.MessagesArr.map(d => <Message message={d.message} key={d.id} id={d.id}/>);


    return (
        <div>
            {DialogElement}
        </div>

    );
}


export default DialogMessage;




