import { connect } from 'react-redux';

import ActiveElm from './ActiveElm';



const mapStateToProps = (state)  =>{
  return{
  dialogAuthor : state.dialogsPage.dialogAuthor
  }
}

const ActiveElmContainer = connect (mapStateToProps)(ActiveElm);
export default ActiveElmContainer;
