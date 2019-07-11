import { compose } from 'redux';
import React from 'react';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import Dialogs from './Dialogs.jsx';

const DialogsContainer = (props) =>{  debugger
  return <Dialogs  />
}
compose(withAuthRedirect)(DialogsContainer)


export default DialogsContainer
