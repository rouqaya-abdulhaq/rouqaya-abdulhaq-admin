import React from 'react';
import {withRouter} from 'react-router-dom'
import Card from '../../UI/card/card';

import './blogsPage.css';

const blogs = (props) =>{

    const editHandler = (blogTitle) =>{
        props.history.push(`/editBlog?blogTitle=${blogTitle}`);
    }

    const deleteHandler = (index) =>{
        fetch('http://localhost:8000/removeBlog',{
            method : 'DELETE',
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({
                index : index
            })
            }).then((res)=>{
                return res.json();
            }).then((res)=>{
                props.updateState(res);
            }).catch((err)=>{
                console.log(err);
            });
    }

    const blogs = props.serverData ? props.serverData.map((blogData,index)=>{
        return <Card title={blogData.title} info={blogData.info}
        editHandler={()=>editHandler(blogData.title)}
        deleteHandler={deleteHandler}
        index = {index}
        page={`/blog?blog=${blogData.title}`}  key={blogData.title}/>
    }) : "no blogs to display";

    return(
        <main className="blogsPage">
           {blogs}
        </main>
    );
}

export default withRouter(blogs);