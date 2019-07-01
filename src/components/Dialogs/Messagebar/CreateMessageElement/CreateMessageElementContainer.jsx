import { connect } from 'react-redux';

import CreateMessageElement from './CreateMessageElement';


const mapStateToProps = (state) =>{
  return{
  dialogsPage : state.dialogsPage
  }
}



const CreateMessageElementContainer = connect (mapStateToProps)(CreateMessageElement);

  export default CreateMessageElementContainer;
