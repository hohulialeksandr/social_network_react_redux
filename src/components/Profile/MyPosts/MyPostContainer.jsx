import React from 'react'
import style from './MyPost.module.css';
import MyPost from './MyPost';
import { addPostActionCreator } from '../../../redux/profileReducer'
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    posts: state.profile.posts,
    newPost: state.profile.newPost
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPostText) => {
      dispatch(addPostActionCreator(newPostText))
    }
  }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);

export default MyPostContainer;