import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile } from '../../redux/profileReducer';
import getParamFromUrl from '../../utils/getParamFromUrl';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

    refreshProfile() {
        const userId = getParamFromUrl('id');
        this.props.getUserProfile(userId || this.props.authorizedUserId);
        this.props.getStatus(userId || this.props.authorizedUserId)
    }

    componentDidMount() {
        console.log('did mount');
        this.refreshProfile();
    }

    componentWillUpdate(prevProps) {
        console.log('will update');
        if (prevProps.profile.userId !== this.props.profile?.userId || prevProps.authorizedUserId !== this.props.authorizedUserId) {
            console.log('inside')
            this.refreshProfile();
        }
    }

    render() {
        return (
            <div>
                <Profile {...this.props}
                    isOwner={!getParamFromUrl('id')}
                    profile={this.props.profile}
                    status={this.props.status}
                    updateStatus={this.props.updateStatus}
                    savePhoto={this.props.savePhoto} />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.profile.profile,
    status: state.profile.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})

export default compose(
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile })
)(ProfileContainer)