import React, { useState } from 'react';
import './navList.css';

const NavList = (props) =>{
    const [hidden , setHidden] = useState(true);

    const navItems = props.links.map((link)=>{
        return(
            <li>{link}</li>
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