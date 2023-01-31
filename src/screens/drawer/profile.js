import React from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    ImageBackground,
    StyleSheet
} from 'react-native';

import Icons from "../../theme/Icons";
import DColor from '../../theme/colors';
import IMAGES from '../../theme/images';
import Font from '../../theme';


const ProfileComponent = (props) => {
    const { navigation, userData } = props;


    const closeDrawerClick = () => {
        // props.navigation.closeDrawer()
        props.navigation.toggleDrawer();
    }
    const getTwoLetters = (name) => {
        let nameParts = name.split(' ')
        let first = nameParts[0].charAt(0)
        let second = "";
        if (nameParts[1]) {
            second = nameParts[1].charAt(0)
        }
        return first + second
    }




    return (<View style={styles.container}>
        <TouchableOpacity style={styles.closeIcon}
            onPress={() => closeDrawerClick()}>
            <Icons.MaterialIcons
                name="arrow-back-ios"
                size={20}
                color={DColor.white}
            />
        </TouchableOpacity>
        <ImageBackground source={IMAGES.BG_CIRCLE} style={{ height: 40, width: 40, margin: 10, }}>
            <Text
                style={{ color: DColor.white, textAlign: 'center',margin:10, justifyContent:'center', fontFamily: Font.fontFamily.regularCal, fontSize: 16, }}>
                {getTwoLetters(userData.userName)}
            </Text>
        </ImageBackground>
        <View style={{ justifyContent: 'center', margin: 8, flex: 1 }}>
            <Text
                style={{ fontFamily: Font.fontFamily.robotoBold, fontSize: 14, color: DColor.white, lineHeight: 18, }}>{userData.userName}
            </Text>
            <Text
                style={{ fontFamily: Font.fontFamily.italicCal, fontSize: 13, color: DColor.white, marginTop: 7 }}>
                110067545
            </Text>
        </View>
    </View>
    )
}
export default ProfileComponent;
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingTop: 30,
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 15,
        backgroundColor: DColor.primary
    },
    closeIcon: {
        position: 'absolute',
        right: 20,
        top: 20
    }
})