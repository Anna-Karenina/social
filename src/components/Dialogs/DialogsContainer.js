import { compose } from 'redux';
import React from 'react';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import Dialogs from './Dialogs.jsx';

const DialogsContainer = (props) =>{  
  return <Dialogs  />
}

export default compose(withAuthRedirect)(DialogsContainer)
