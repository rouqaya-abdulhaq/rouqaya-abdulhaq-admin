import * as actionTypes from '../actions/actionTypes';

const initialState = {
    blogs : [{id : 1,title : "blog1" , content : "words"},
    {id:2,title : "blog2" , content : "words"},
    {id: 3,title : "blog3" , content : "words"},
    {id:4,title : "blog4" , content : "words"},
    {id:5,title : "blog5" , content : "words"}],
    loading : false,
    err : null
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case actionTypes.ADD_BLOG :
            const {newBlog} = action.payload;
            return {
                ...state,
                blogs : [...state.blogs, newBlog]
            }
        
        case actionTypes.EDIT_BLOG :
            const {editBlogId,editedBlog} = action.payload;
            const newarr = state.blogs.map((blog)=>{
                if(parseInt(blog.id,10) === parseInt(editBlogId,10)){
                    blog = JSON.parse(JSON.stringify(editedBlog));
                }
                return blog;
            });
            return {
                ...state,
                blogs : newarr};

        case actionTypes.DELETE_BLOG :
            const {blogId} = action.payload; 
            const arr =  state.blogs.filter((blog)=>{
                return parseInt(blog.id,10) !== parseInt(blogId,10);
            });
            return {
                ...state,
                blogs : arr};

        case actionTypes.LOAD_BLOGS_START :
            return {
                ...state,
                loading : true
            }

        case actionTypes.LOAD_BLOGS_SUCCESS :
            const {blogs} = action.payload;
            return {
                ...state,
                loading : false,
                err : null,
                blogs : blogs
            }
        
        case actionTypes.LOAD_BLOGS_FAIL :
            const {err} = action.payload;
            return {
                ...state,
                loading : false,
                err : err
            }

        default : 
            return state;
    }
}

export default reducer;