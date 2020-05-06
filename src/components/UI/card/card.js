import React from 'react';
import {Link} from 'react-router-dom';

import './card.css';

const card = (props) =>{

    const page = props.page ? <Link to={props.page}>view blog</Link> : null;
    const website = props.url ? <a href={props.url}>url</a> : null;
    const githubPage = props.githubUrl ? <a href={props.githubUrl}>github scource</a> : null;
    //temp until i upload the image to the server
    // const img = props.imgPath ? <img src={props.imgPath} alt="project img"/> : null;
    
    return(
        <section>
            <h6>{props.title}</h6>
            <p>{props.info}</p>
            {website}
            {githubPage}
            {page}
            {/* {img} */}

            <button onClick={props.editHandler}>edit</button>
            <button onClick={()=>props.deleteHandler(props.index)}>delete</button>
        </section>
    );
}

export default card;