import React, { useEffect, useState } from 'react';
import {
    View, StyleSheet, SafeAreaView, FlatList, TouchableOpacity,
    Text, StatusBar, Alert,BackHandler
} from 'react-native';
import DrawerItem from "./drawerItem";
import Icon from "react-native-vector-icons/Ionicons";
import DColor from "../../theme/colors";
import ProfileComponent from "./profile";
import AsyncStorage from '@react-native-async-storage/async-storage'
import Loader from "../../components/loader/loader";
// import SharedManager from '../utils/SharedManager';
import { showMessage } from 'react-native-flash-message';
import { getVersion } from "react-native-device-info";
import Font from '../../theme';
import NetInfo from "@react-native-community/netinfo";
// import { NO_INTERNET } from '../utils/constants';

const CustomDrawer = (props) => {
    const [isLoading, setLoading] = useState(false);
    const [appVersion, setAppVersion] = useState('0.0');
    // const user = SharedManager.getInstance().getUser();
    // const token = SharedManager.getInstance().getToken();
    const userData = {
        userName: 'Deepak Yadav',
        userId: '12345',
    }
    const menuRow = [
        {
            icon: "ios-home",
            name: "Home",
            screenName: "Home",
            key: 1
        },
        {
            icon: "ios-person",
            name: "Profile",
            screenName: "Profile",
            key: 2
        },
    ];

    useEffect(() => {
        getAppVersion();
    }, [])



    const logOutClick = () => {
        exitApp()
    }

    const exitApp = () => {
        Alert.alert(
            'Exit App',
            'Are you sure you want to exit?', [{
                text: 'Cancel',
                onPress: () => { },
                style: 'cancel'
            }, {
                text: 'OK',
                onPress: () => BackHandler.exitApp()
            },], {
            cancelable: false
        }
        )
    }

    const getAppVersion = async () => {
        let version = await getVersion();
        setAppVersion(version)
    }

    return (
        <View style={styles.container}>
            <View style={styles.statusBar}>
                <StatusBar translucent backgroundColor={DColor.appColor} />
            </View>
            <View style={{ flex: 1 }}>
                <ProfileComponent navigation={props.navigation} userData={userData} />

                <SafeAreaView>
                    <FlatList
                        data={menuRow}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => (
                            <View style={{ borderBottomColor: DColor.borderBottomColor, marginLeft: 15, marginRight: 15 }}>
                                <DrawerItem
                                    navigation={props.navigation}
                                    screenName={item.screenName}
                                    icon={item.icon}
                                    name={item.name}
                                    key={item.key}
                                />
                            </View>
                        )}
                    />
                    <TouchableOpacity
                        activeOpacity={0.9}
                        style={styles.menuItem}
                        onPress={() => {

                            Alert.alert(
                                "Are you sure?",
                                "You want to logout.",
                                [
                                    {
                                        text: "NO",
                                        onPress: () => console.log("Cancel Pressed"),
                                        style: "cancel",
                                    },
                                    {
                                        text: "YES",
                                        onPress: () => BackHandler.exitApp()
                                        ,
                                    },
                                ],
                                { cancelable: false }
                            );
                        }}
                    >
                        <Icon
                            name="ios-log-out"
                            size={20}
                            color={DColor.appColor}
                            style={{ marginTop: 15, marginLeft: 30, marginRight: 15 }}
                        />
                        <Text style={styles.menuItemText_End}>Logout</Text>
                    </TouchableOpacity>
                </SafeAreaView>

            </View>
            <View style={{ height: 30, marginLeft: 10, }}>
                <Text style={{ fontWeight: "bold" }}>App Version : {appVersion}</Text>
            </View>
            {isLoading && <Loader />}
        </View>
    );

}
export default CustomDrawer;
const STATUSBAR_HEIGHT = Platform.select({ 'android': StatusBar.currentHeight, 'ios': 20 })

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: DColor.white,
    },
    menuItem: {
        flexDirection: "row",
        backgroundColor: DColor.menu_background,
        height: 50,
    },
    menuItemText: {
        fontSize: Font.customFont.ft14,
        fontWeight: "300",
        marginTop: 14,
        color: DColor.menu_text_color,
        fontFamily: Font.fontFamily.regularCal,
    },
    menuItemText_End: {
        fontSize: Font.customFont.ft14,
        fontWeight: "300",
        marginTop: 16,
        color: DColor.black,
        fontFamily: Font.fontFamily.regularCal,
    },
    statusBar:
    {
        height: STATUSBAR_HEIGHT,
        backgroundColor: DColor.appColor
    }
});