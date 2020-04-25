import React from 'react';
import Card from '../../UI/card/card';

import './blogsPage.css';

const blogs = (props) =>{

    const editHandler = () =>{
        console.log('edit project');
    }

    const deleteHandler = () =>{
        console.log('delete project');
    }

    const blogs = props.serverData ? props.serverData.map((blogData)=>{
        return <Card title={blogData.title} info={blogData.info}
        editHandler={editHandler}
        deleteHandler={deleteHandler}
        page={`/blog?blog=${blogData.title}`}  key={blogData.title}/>
    }) : "no blogs to display";

    return(
        <main className="blogsPage">
           {blogs}
        </main>
    );
}

export default blogs;