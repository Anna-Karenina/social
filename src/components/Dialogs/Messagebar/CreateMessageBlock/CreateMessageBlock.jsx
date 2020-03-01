import { Field, reduxForm } from 'redux-form';
import React from 'react';

import cl from './CreateMessageBlock.module.css';

let CreateMessageBlockForm = (props) =>{
  return(
    <form className = {cl.textareawr} onSubmit = {props.handleSubmit}>
      <Field  
        name = "newMessageBody"
        component = "textarea"
        placeholder = "Ввидите сообщение ..."
        cols = "65" rows = "6"
        className = {cl.sendMessage}/>
      <button className = {cl.sendMessageBtn}>
        отправить
      </button>
    </form>
  )}



const CreateMessageBlock = ({sendMessage}) => {
  let AddMessage = ({newMessageBody}) =>{
    sendMessage(newMessageBody);
  }
  return(
    <div className = {cl.newMessageblock}>
      <hr />
        <CreateMessageBlockForm onSubmit = {AddMessage}/>
    </div>
  );
}
CreateMessageBlockForm = reduxForm({form: 'CreateMessageBlock' })(CreateMessageBlockForm)

export default CreateMessageBlock;
