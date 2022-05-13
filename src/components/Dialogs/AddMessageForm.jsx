import React from 'react'
import { Field } from 'redux-form'
import { reduxForm } from 'redux-form'
import { maxLengthCreator, required } from '../../utils/validators/validators';
import {Textarea} from '../common/FormsControl/FormsControl'

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
      <form onSubmit={props.handleSubmit}>
        <Field component={Textarea}
        validate={[required, maxLength50]} name='newMessage' placeholder='Enter new massage'/> 
        <div><button>Send</button></div>
      </form>
    )
  }
  
export default reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)