import React from 'react';
import style from './Dialogs.module.css';

import DialogsItem from './DialogItem/DialogsItem';
import Message from './Message/Message';
import { Navigate } from 'react-router-dom';
import AddMessageForm from './AddMessageForm';

const Dialogs = (props) => {
  const state = props.dialogs;

  const dialogElement = state.dialogs.map((d, item) => <DialogsItem key={item} name={d.name} id={d.id} />);
  const messagesElement = state.messages.map((m, mes) => <Message key={mes} message={m.message} />);
  const newMessage = state.newMessage;


  const addNewMessage = (values) => {
    props.sendMessage(values.newMessage);
  }
  
  if (!props.isAuth) return <Navigate replace to={'/login'} />

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        {dialogElement}
      </div>
      <div className={style.messages}>
        <div>{messagesElement}</div>
        <div>
          <AddMessageForm onSubmit={addNewMessage}/>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;