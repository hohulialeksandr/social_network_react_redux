import React, { useEffect, useState } from 'react'

const ProfileStatus = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateMode = () => {
        setEditMode(true)
    }

    const deactivateMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {
                !editMode
                    ? <div>
                        <b>Status</b>: <span onClick={activateMode}>{props.status || 'Status'}</span>
                    </div>
                    : <div>
                        <input autoFocus={true}
                            onBlur={deactivateMode}
                            onChange={onStatusChange}
                            value={status} />
                    </div>
            }
        </div>
    )
}

// class ProfileStatus extends React.Component {

//     state = {
//         editMode: false,
//         status: this.props.status
//     }

//     activateEditMode = () => {
//         this.setState({
//             editMode: true
//         })
//     }

//     deactivateEditMode = () => {
//         this.setState({
//             editMode: false
//         });
//         this.props.updateStatus(this.state.status);
//     }

//     onStatusChange = (e) => {
//         this.setState({
//             status: e.currentTarget.value
//         })
//     }

//     componentDidUpdate(prevProps, prevState) {
//         if(prevProps.status !== this.props.status) {
//             this.setState({
//                 status: this.props.status
//             })
//         }
//     }

//     render() {
//         return (
//             <div>
//                 {
//                     !this.state.editMode
//                         ? <div>
//                             <span onClick={this.activateEditMode}>{this.props.status || 'Status'}</span>
//                         </div>
//                         : <div>
//                             <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status} />
//                         </div>
//                 }
//             </div>
//         )
//     }
// }

export default ProfileStatus