import React ,{useState, useEffect} from 'react';
import BlogForm from '../../containers/blogForm/blogForm';

const EditBlog = (props) =>{

    const [blogToEdit , setBlog] = useState(null);



    useEffect(()=>{ 
        fetch(`http://localhost:8000/loadBlog?blogTitle=blog1`,{
            method : 'GET',
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then((res)=>{
            return res.json();
        }).then((blog)=>{
            setBlog(blog);
        }).catch((err)=>{
            console.log(err);
        });
    },[]);

    return(
        <BlogForm blog={blogToEdit}/>
    );
}

export default EditBlog;