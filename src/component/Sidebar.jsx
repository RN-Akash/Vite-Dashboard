import React from 'react'
import { NavLink } from 'react-router-dom';

const lists = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
];

const SideBar = () => {
    return (
        <div className="sidebar">
            {lists.map(list => {
                return (
                    <NavLink to={list.path}
                        className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                    >{list.name}</NavLink>
                )
            })}
        </div>
    )
}

export default SideBar