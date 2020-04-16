import React, { useState } from 'react';
import './navList.css';
import {Link} from 'react-router-dom'; 

const NavList = (props) =>{
    const [hidden , setHidden] = useState(true);

    const navItems = props.links.map((link)=>{
        return(
            <Link to={link.path}>
                <li onClick={()=>setHidden(true)}>{link.value}</li>
            </Link>
        );
    });

    const dropList = hidden ? null : <ul>
                                        {navItems}
                                    </ul>

    return(
        <div className="navList">
            <button onClick={()=>setHidden(!hidden)}>{props.value}</button>
            {dropList}
        </div>
    );
}

export default NavList;