import {CHANGE_TEXT, PUBLISH, TEST} from "./actionTypes";

export function publishContent() {
    return {
        type: PUBLISH
    }
}

export function changeText(text) {
    return {
        type: CHANGE_TEXT,
        payload: text
    }
}

export function testAction() {
    return {
        type: TEST
    }
}