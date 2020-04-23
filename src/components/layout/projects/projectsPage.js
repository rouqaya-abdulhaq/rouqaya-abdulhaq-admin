import React from 'react';

const projectsPage = (props) =>{
    console.log(props.serverData)
    return(
        <main>
            {'props.serverData'}
        </main>
    );
}

export default projectsPage;