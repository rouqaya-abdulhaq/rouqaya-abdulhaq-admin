import React from 'react';

import './card.css';

const card = (props) =>{
    const website = props.url ? <a href={props.url}>url</a> : null;
    const githubPage = props.githubUrl ? <a href={props.githubUrl}>github scource</a> : null;
    const img = props.imgPath ? <img src={props.imgPath} alt="thumbnail"/> : null;
    
    return(
        <section>
            <h6>{props.title}</h6>
            <p>{props.info}</p>
            {website}
            {githubPage}
            {img}

            <button onClick={props.editHandler}>edit</button>
            <button onClick={props.deleteHandler}>delete</button>
        </section>
    );
}

export default card;