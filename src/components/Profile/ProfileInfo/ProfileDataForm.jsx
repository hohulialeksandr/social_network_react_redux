import React from 'react'
import { reduxForm } from 'redux-form'
import { createField, Input, Textarea } from '../../common/FormsControl/FormsControl'
import style from '../../common/FormsControl/FormsControl.module.css'


const ProfileDataForm = ({ profile, handleSubmit, error }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div><button>Save</button></div>
            {
                error && <div className={style.errorBlock}>{error}</div>
            }
            <div>
                <b>Fullname</b>:
                {createField('Fullname', 'fullName', [], Input)}
            </div>
            <div>
                <b>Looking for a job</b>:
                {createField('', 'lookingForAJob', [], Input, { type: 'checkbox' })}
            </div>
            <div>
                <b>My professional skills</b>:
                {createField('My professional skills', 'lookingForAJobDescription', [], Textarea)}

            </div>
            <div>
                <b>About me</b>:
                {createField('About me', 'aboutMe', [], Textarea)}
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                    return <div key={key}><b>{key}: {createField(key, 'contacts.' + key, [], Input)}</b></div>
                })}
            </div>
        </form>
    )
}

const ProfileDataFormRedux = reduxForm({ form: 'editProfile' })(ProfileDataForm)

export default ProfileDataFormRedux