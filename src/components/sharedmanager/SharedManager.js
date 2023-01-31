import moment from "moment";

export default class SharedManager {

    static myInstance = null;


    otherPlan = []
    access_token = "abcd access token"
    token = "abc token"
    fcm_token = 'fcmtoken'
    mobile = '99787788787'
    user = {}
    userImage = "https://hmclmobdiag.blob.core.windows.net/uploads/tso/profile_sample.jpg"
    date = moment().format("YYYY-MM-DD")
    /**
     * @returns {SharedManager}
     */
    static getInstance() {
        if (SharedManager.myInstance == null) {
            //@ts-ignore
            SharedManager.myInstance = new SharedManager();
        }

        return this.myInstance;
    }

    getOtherPlan() {
        return this.otherPlan;
    }

    setOtherPlan(otherPlan) {
        this.otherPlan = otherPlan;
    }

    getAccessToken() {
        return this.access_token
    }

    setAccessToken(token) {
        this.access_token = token
    }

    getToken() {
        return this.token
    }

    setToken(token) {
        this.token = token
    }
    getUser() {
        return this.user
    }

    setUser(user) {
        this.user = user
    }
    getFCMToken() {
        return this.fcm_token
    }
    setFCMToken(fcm_token) {
        this.fcm_token = fcm_token
    }

    getUserImage() {
        return this.userImage
    }
    setUserImage(userImage) {
        this.userImage = userImage
    }

    getDate() {
        return this.date
    }
    setDate(date) {
        this.date = date
    }
    getMobileNumber() {
        return this.mobile
    }
    setMobileNumber(number) {
        this.mobile = number
    }

}