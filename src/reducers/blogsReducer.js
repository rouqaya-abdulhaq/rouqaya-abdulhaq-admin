import * as actionTypes from '../actions/actionTypes';

const initialState = {
    blogs : [],
    translations : [],
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
            const newarr = editBlog(state,editedBlog,editBlogId);
            return {
                ...state,
                blogs : newarr};

        case actionTypes.DELETE_BLOG :
            const {blogId} = action.payload; 
            const arr = deleteBlog(state,blogId);
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

        case actionTypes.ADD_TRANSLATION_ARABIC : 
            const {newTranslation} = action.payload;
            return{
                ...state,
                translations : [...state.translations, newTranslation]
            }
            
        case actionTypes.EDIT_TRANSLATION_ARABIC : 
            const {translation, id} = action.payload;
            const newArr = editTranslation(state,translation,id);
            return {
                ...state,
                translations : newArr
            }

        case actionTypes.LOAD_TRANSLATIONS_ARABIC_START :
            return {
                ...state,
                loading : true
            }

        case actionTypes.LOAD_TRANSLATIONS_ARABIC_SUCCESS :
            const {translations} = action.payload;
            return {
                ...state,
                loading : false,
                err : null,
                translations : translations
            }

        case actionTypes.LOAD_TRANSLATIONS_ARABIC_FAIL :
            const {error} = action.payload;
            return {
                ...state,
                loading : false,
                err : error
            }

        default : 
            return state;
    }
}

const editBlog = (state , editedBlog, editBlogId) =>{
    return state.blogs.map((blog)=>{
        if(parseInt(blog.id,10) === parseInt(editBlogId,10)){
            blog = JSON.parse(JSON.stringify(editedBlog));
        }
        return blog;
    });
}

const editTranslation = (state , editedTranslation, id) =>{
    return state.translations.map((translation)=>{
        if(parseInt(translation.id,10) === parseInt(editedTranslation,10)){
            translation = JSON.parse(JSON.stringify(editedTranslation));
        }
        return translation;
    });
}

const deleteBlog = (state, blogId) =>{
    return state.blogs.filter((blog)=>{
        return parseInt(blog.id,10) !== parseInt(blogId,10);
    });
}

export default reducer;