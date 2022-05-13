import React from 'react';
import { sendMessageCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogs
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (newMessage) => {
      dispatch(sendMessageCreator(newMessage))
    }
  }
}

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, mapDispatchToProps)
)(Dialogs);