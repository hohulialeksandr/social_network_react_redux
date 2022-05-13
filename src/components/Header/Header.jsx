import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Header.module.css'

const Header = (props) => {
    console.log(props)
    return (
        <header className={style.header}>
            <img src='https://cdn.w600.comps.canstockphoto.com/logo-clip-art-vector_csp16060167.jpg' alt=''/>

            <div className={style.loginBlock}>
                {props.isAuth 
                ? <div>{props.login}  <button onClick={props.logout} className={style.logout}>Log Out</button></div>
                : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;