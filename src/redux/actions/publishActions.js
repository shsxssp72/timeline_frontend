import {
    CHANGE_TEXT,
    PUBLISH_SUCCESS,
    PUBLISH_FAIL,
    CLOSE_PUBLISH_FAIL,
    CLOSE_PUBLISH_SUCCESS,
    PICTURE
} from "./actionTypes";
import request from 'superagent';
import { BASE_URL } from "../../constants";

const CLOUDINARY_UPLOAD_PRESET = 'nzw8sov3';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/hlps10425/image/upload';


export function publishContent(token, userid, content, imgUrl) {
    return async (dispatch) => {
        let publishTime = new Date();
        let data = {
            content: JSON.stringify({
                data: content,
                imgUrl: imgUrl
            }),
            contentId: '',
            displayName: '',
            publishTime: publishTime,
            userId: userid
        };

        await fetch(BASE_URL+'/api/content/create', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Authorization': `Bearer ${token}`
            },
        }).then(response =>
            response.json()
        ).then(data => {
            console.log(data);
            if(data.result === 'success'){
                dispatch({type: PUBLISH_SUCCESS});
                dispatch(changeText(''));
                dispatch({type: PICTURE, payload: ''});
            }else{
                dispatch({type: PUBLISH_FAIL});
            }
        }).catch(error => {
            console.log(error);
            dispatch({type: PUBLISH_FAIL});
        });
    }
}

export function uploadPicture(file) {
    return (dispatch) => {
        let upload = request.post(CLOUDINARY_UPLOAD_URL)
            .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
            .field('file', file);

        upload.end((err, response) => {
            if (err) {
                console.error(err);
            }

            if (response.body.secure_url !== '') {
                dispatch({type: PICTURE, payload: response.body.secure_url});
            }
        });
    }
}

export function changeText(text) {
    return {
        type: CHANGE_TEXT,
        payload: text
    }
}

export function publishFail() {
    return {
        type: PUBLISH_FAIL
    }
}

export function closePublishFail() {
    return {
        type: CLOSE_PUBLISH_FAIL
    }
}

export function closePublishSuccess() {
    return {
        type: CLOSE_PUBLISH_SUCCESS
    }
}