import { Field, reduxForm } from 'redux-form';
import React from 'react';
import { validate } from './LoginValidation'
import { login } from './../../../redux/auth-reducer'

import cl from './Login.module.css';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

function LoginReduxForm(props){
  const { handleSubmit, 
  } =props
  return(
    <form className= {cl.loginform} onSubmit = {handleSubmit}>
      <Field name = "email" placeholder="email" component = "input" />
      <Field name = "password" placeholder="password" component = "input" />
      <div>
        <Field name = "rememberMe" type="checkbox" component = "input" />
          запомнить меня
      </div>
      <button type="submit">Войти</button>
    </form>
  )}

const LoginForm = reduxForm({form: 'login', validate })(LoginReduxForm);


const Login = ({login, isAuth}) => {

  const onSubmit = (formData) =>{
    login(formData.email, formData.password, formData.rememberMe )
    }
    
  if(isAuth) {
    return <Redirect to = "/User"/>
  }
  return (
    <div className={cl.container}>
      <h2>Войти</h2>  
      <LoginForm onSubmit = {onSubmit}/>
    </div>
)}
const mapState2Props = state =>({
  isAuth: state.auth.isAuth
})
 
export default connect(mapState2Props,{login})(Login)
