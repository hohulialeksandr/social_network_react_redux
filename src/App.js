import React from 'react';
import { connect } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { compose } from 'redux';
import './App.css';
import Preloader from './components/common/Preloader/Preloader';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import NavBar from './components/NavBar/NavBar';
import UsersContainer from './components/Users/UsersContainer';
import withSuspens from './hoc/withSuspens';
import { initializeApp } from './redux/appReducer'

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if(!this.props.initialized) {
      return <Preloader />
    }
    return (
      <div className='app-wrapper' >
        <HeaderContainer />
        <NavBar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route
              path='/profile/*'
              element={withSuspens(ProfileContainer)} />
            <Route
              path='/dialogs'
              element={withSuspens(DialogsContainer)} />
            <Route
              path='/users'
              element={<UsersContainer />} exact />
            <Route
              path='/login'
              element={<Login />} />
            {/* <Route path='/news' element={<News />} exact />
            <Route path='/music' element={<Music />} exact />
            <Route path='/settings' element={<Settings />} exact /> */}
          </Routes>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  connect(mapStateToProps, { initializeApp })
)(App);