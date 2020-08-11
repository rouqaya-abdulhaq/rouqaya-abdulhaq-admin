import * as ActionTypes from './actionTypes';


export const AddArabicTranslation =  (translation) =>{
    return {
        type : ActionTypes.ADD_TRANSLATION_ARABIC,
        payload : {
            newTranslation : translation
        }
    }
}

export const editArabicTranslation = (translation,id) =>{
    return {
        type : ActionTypes.EDIT_TRANSLATION_ARABIC,
        payload : {
            id : id,
            translation : translation
        }
    }
}

export const loadArabicTranslations = (loadCount) =>{
    return dispatch => {
        dispatch(loadArabicTranslationStart());

        fetch(proxyUrl + `https://rouqaya-api.herokuapp.com/getArabicBlogs?loadCount=${loadCount}`,{
            method : 'GET',
            headers : {
                'Accept' : 'application/json',
            }
        }).then((res)=>{
            return res.json();
        }).then((translationsData)=>{
            if(translationsData.success){
                dispatch(loadArabicTranslationSuccess(translationsData.blogs));
            }else{
                dispatch(loadArabicTranslationFail(translationsData.message));
            }
        }).catch((err)=>{
            dispatch(loadArabicTranslationFail(err));
        })
    }
}

const proxyUrl = "https://aqueous-coast-32163.herokuapp.com/";

const loadArabicTranslationStart = () =>{
    return {
        type : ActionTypes.LOAD_TRANSLATIONS_ARABIC_START
    }
}

const loadArabicTranslationSuccess = (translations) =>{
    return {
        type : ActionTypes.LOAD_TRANSLATIONS_ARABIC_SUCCESS,
        payload : {
            translations : translations
        }
    }
}

const loadArabicTranslationFail = (err) =>{
    return {
        type : ActionTypes.LOAD_TRANSLATIONS_ARABIC_FAIL,
        payload : {
            error : err
        }
    }
}