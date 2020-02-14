import React from 'react';
import Message from './Message/Message';


const DialogMessage = (props) => {


    let DialogElement = props.MessagesArr.DialogArr.map(d => <Message message={d.message} id={d.id}/>);


    return (
        <div>
            {DialogElement}
        </div>

    );
}


export default DialogMessage;




