import React, { createRef, memo } from 'react'
import { Field } from 'redux-form';
import { reduxForm } from 'redux-form';
import style from './MyPost.module.css'
import Post from './Post/Post';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControl/FormsControl';

const maxLength10 = maxLengthCreator(10);

const MyPost = memo(props => {
  const postsElement = props.posts.map((p, pst) => <Post key={pst} message={p.message} likeCount={p.likeCount} />)

  const newPostElement = createRef();



  const addPost = (values) => {
    props.addPost(values.newPostText);
  }

  return (
    <div className={style.posts_block}>
      New Post
      <div>
        <AddNewPostFormRedux onSubmit={addPost} />
      </div>
      <div className={style.posts}>
        {postsElement}
      </div>
    </div>
  )
}
)

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea} name='newPostText' placeholder='Post message'
          validate={[required, maxLength10]} />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  )
}

const AddNewPostFormRedux = reduxForm({ form: 'ProfileAddNewPostForm' })(AddNewPostForm)

export default MyPost