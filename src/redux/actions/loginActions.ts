import { VERIFY_OTP, FOR_LOADER,LOGIN } from "../constants";

export const loginOtpAction = (data) => {
    return {
        type: LOGIN,
        payload: data
    }
}

export const setLoader = (data) => {
    return {
        type: FOR_LOADER,
        data
    }
}
