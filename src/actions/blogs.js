import * as actionTypes from './actionTypes';

export const addBlogToState = (blog) =>{
   return {
    type : actionTypes.ADD_BLOG,
    payload : {
        newBlog : blog
    }
   } 
}

export const editBlogInState = (blog,id) =>{
    return {
        type : actionTypes.EDIT_BLOG,
        payload : {
            editBlogId : id,
            editedBlog : blog
        }
    } 
}

export const deleteBlogFromState = (id) =>{
    return {
        type : actionTypes.DELETE_BLOG,
        payload : {
            blogId : id
        }
    } 
}

export const loadBlogs = (loadCount) =>{
    return dispatch => {
        dispatch(loadBlogsStart());

        fetch(`http://localhost:8000/loadBlogs?loadCount=${loadCount}`,{
            method : 'GET',
            headers : {
                'Accept' : 'application/json',
            }
        }).then((res)=>{
            return res.json();
        }).then((blogsData)=>{
            if(blogsData.success){
                dispatch(loadBlogsSuccess(blogsData.blogs));
            }else{
                dispatch(loadBlogsFail(blogsData.message));
            }
        }).catch((err)=>{
            dispatch(loadBlogsFail(err));
        })
    }
}

const loadBlogsStart = () =>{
    return {
        type : actionTypes.LOAD_BLOGS_START
    }
}

const loadBlogsSuccess = (blogs) =>{
    return {
        type : actionTypes.LOAD_BLOGS_SUCCESS,
        payload : {
            blogs : blogs
        }
    }
}

const loadBlogsFail = (err) =>{
    return {
        type : actionTypes.LOAD_BLOGS_FAIL,
        payload : {
            err : err
        }
    }
}