import React from 'react';

import './card.css';

const card = (props) =>{
    const website = props.url ? <a href={props.url}>url</a> : null;
    const githubPage = props.githubUrl ? <a href={props.githubUrl}>github scource</a> : null;
    const img = props.imgPath ? <img src={props.imgPath} alt="thumbnail"/> : null;
    const editTranslation = props.isTranslated.includes(true) ? <button onClick={props.editTranslationHandler}>edit translation</button> : null;
    const addTranslation = !props.isTranslated.includes(true) ? <button onClick={props.addTranslationHandler}>add translation</button> : null;
    
    return(
        <section>
            <h6>{props.title}</h6>
            <p>{props.info}</p>
            {website}
            {githubPage}
            {img}

            <button onClick={props.editHandler}>edit</button>
            <button onClick={props.deleteHandler}>delete</button>
            {addTranslation}
            {editTranslation}
        </section>
    );
}

export default card;