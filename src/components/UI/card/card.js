import React from 'react';
import {Link} from 'react-router-dom';

import './card.css';

const card = (props) =>{

    const page = props.page ? <Link to={props.page}></Link> : null;
    return(
        <section>
            <h6>{props.title}</h6>
            <p>{props.info}</p>
            <a href={props.url}>url</a>
            <a href={props.githubUrl}>github scource</a>
            {page}
        </section>
    );
}

export default card;