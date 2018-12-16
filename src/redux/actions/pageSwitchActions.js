import {SWITCH_HISTORY, SWITCH_HOME, SWITCH_INDEX, SWITCH_LOGIN, SWITCH_PUBLISH} from "./actionTypes";

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

export function switchHistory() {
    return {
        type: SWITCH_HISTORY
    }
}

export function switchLogin() {
    return {
        type: SWITCH_LOGIN
    }
}