import { Field, reduxForm } from 'redux-form';
import React from 'react';

let WallForm = (props) => {
  return(
      <form onSubmit={props.handleSubmit}>
        <Field
          name = 'aWallForm'
          component = {Textarea}
          cols="1" rows="5"
          placeholder="Опубликовать новость..." />
        <button>Опубликовать</button>
      </form>
)};
WallForm = reduxForm({form: 'wallform'})(WallForm)

function Textarea({input, meta, ...props}){
  return(
    <div>
      <textarea {...input} {...props}/> 
    </div>
  )
}
export default WallForm;
