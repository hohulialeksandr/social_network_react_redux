import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './NavBar.module.css'

const NavBar = () => {
  return (
    <nav className={style.nav}>
        <div className={style.item}>
          <NavLink to='/profile' className={navData => navData.isActive ? style.active : style.item}>Profile</NavLink>
        </div>
        <div className={`${style.item} ${style.active}`}>
          <NavLink to='/dialogs' className={navData => navData.isActive ? style.active : style.item}>Messages</NavLink>
        </div>
        <div className={`${style.item} ${style.active}`}>
          <NavLink to='/users' className={navData => navData.isActive ? style.active : style.item}>Users</NavLink>
        </div>
        <div className={style.item}>
          <NavLink to='/news'>News</NavLink>
        </div>
        <div className={style.item}>
          <NavLink to='/music'>Music</NavLink>
        </div>
        <div className={style.item}>
          <NavLink to='/settings'>Settings</NavLink>
        </div>
      </nav>
  )
}

export default NavBar