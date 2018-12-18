import {SWITCH_HOME, SWITCH_INDEX, SWITCH_PUBLISH, SWITCH_LOGIN, SWITCH_REGISTER} from "./actionTypes";

export function switchHome() {
    return {
        type: SWITCH_HOME
    }
}

export function switchIndex() {
    return {
        type: SWITCH_INDEX
    }
}

export function switchPublish() {
    return {
        type: SWITCH_PUBLISH
    }
}

export function switchLogin() {
    return {
        type: SWITCH_LOGIN
    }
}

export function switchRegister() {
    return {
        type: SWITCH_REGISTER
    }
}