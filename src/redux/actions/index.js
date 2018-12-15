//页面切换
export const SWITCH_HOME = 'SWITCH_HOME';
export const SWITCH_INDEX = 'SWITCH_INDEX';
export const SWITCH_PUBLISH = 'SWITCH_PUBLISH';
export const SWITCH_HISTORY = 'SWITCH_HISTORY';
export const SWITCH_LOGIN = 'SWITCH_LOGIN';
//更新
export const UPDATE = 'UPDATE';
//更多
export const MORE = 'MORE';
//发布
export const PUBLISH = 'PUBLISH';
//上载图片
export const PICTURE = 'PICTURE';
//输入变更
export const CHANGE_TEXT = 'CHANGE_TEXT';
//修改
export const MODIFY = 'MODIFY';
//删除
export const DELETE = 'DELETE';
//测试
export const TEST = 'TEST';


export function switchHome() {
    return{
        type: SWITCH_HOME
    }
}

export function switchIndex(){
    return{
        type: SWITCH_INDEX
    }
}

export function switchPublish() {
    return{
        type: SWITCH_PUBLISH
    }
}

export function switchHistory() {
    return{
        type: SWITCH_HISTORY
    }
}

export function switchLogin() {
    return{
        type: SWITCH_LOGIN
    }
}

export function publishContent() {
    return{
        type:PUBLISH
    }
}

export function changeText(text) {
    return{
        type:CHANGE_TEXT,
        payload: text
    }
}

export function testAction() {
    return{
        type: TEST
    }
}