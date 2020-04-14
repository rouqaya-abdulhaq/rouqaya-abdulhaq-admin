import React from 'react';
import './navList.css';

const navList = (props) =>{
    const navItems = props.links.map((link)=>{
        return(
            <li>{link}</li>
        );
    })

    return(
        <div className="navList">
            <button>{props.value}</button>
            <ul>
                {navItems}
            </ul>
        </div>
    );
}

export default navList;