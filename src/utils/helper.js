import NetInfo from "@react-native-community/netinfo";
import { View, Text, Alert, BackHandler } from 'react-native';

export const isInternetConnected = async() =>{
    // var state=false;
    const response = await NetInfo.fetch();
    return response.isConnected;
//   NetInfo.fetch().then(state => {
//         console.log("Connection type", state.type);
//         console.log("Is connected?", state.isConnected);
//         state= state.isConnected;
//         if(state.isConnected){
//             return true
//         }else{
//             return false
//         }
//       });
}

export const alert = (title, message, cancelable) => {
    Alert.alert(
        title,
        message, [{
            text: 'Cancel',
            onPress: () => { },
            style: 'cancel'
        }, {
            text: 'OK',
            onPress: () => {console.log('Ok Pressed') }
        },], {
        cancelable: cancelable
    }
    )

   
}