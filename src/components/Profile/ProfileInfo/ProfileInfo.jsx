import React, { useState } from 'react'
import Preloader from '../../common/Preloader/Preloader'
import style from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus'
import userPhoto from '../../../assets/image/images.png'
import ProfileDataForm from './ProfileDataForm'

const ProfileInfo = ({ isOwner, profile, status, updateStatus, savePhoto, saveProfile }) => {

    const [editMode, setEditMode] = useState(false)

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(() => {
            setEditMode(false)
        })

    }

    return (
        <div>
            {
                !profile
                    ? <Preloader />
                    : <div className={style.discriptionBlock}>
                        <img src={profile.photos.large || userPhoto} alt='#' />
                        {isOwner && <input type={'file'} onChange={onMainPhotoSelected} />}

                        {
                            editMode
                                ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
                                : <ProfileData goToEditMode={() => { setEditMode(true) }} profile={profile} isOwner={isOwner} />

                        }

                        <ProfileStatus status={status} updateStatus={updateStatus} />
                    </div>
            }
        </div>
    )
}

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
    return (
        <div>
            {
                isOwner && <div><button onClick={goToEditMode}>Edit</button></div>
            }
            <div>
                <b>Fullname</b>: {profile.fullName}
            </div>
            <div>
                <b>Looking for a job</b>: {profile.lookingForAJob ? 'yes' : 'no'}
            </div>
            {profile.lookingForAJob &&
                <div>
                    <b>My prfessional skills</b>: {profile.lookingForAJobDescription}
                </div>
            }
            <div>
                <b>About me</b>: {profile.aboutMe}
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
                })}
            </div>
        </div>
    )
}



const Contact = ({ contactTitle, contactValue }) => {
    return <div className={style.socialNetwork}><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo 