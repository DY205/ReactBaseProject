import { USER_DATA,FOR_LOADER,LOGIN } from "../constants";

export const login = (data = {}, action) => {
    switch (action.type) {
        case USER_DATA:
            return [action.data]
        default:
            return data
    }
}

export const forLoader = (loader = false, action) => {
    switch (action.type) {
        case FOR_LOADER:
            return action.data
        default:
            return loader

    }
}


export default login;