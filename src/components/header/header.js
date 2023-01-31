import React, { useEffect, useState } from 'react';

import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View, SafeAreaView, Platform } from "react-native";

import Global from '../../global';
import Font from '../../theme';
import AppColor from '../../theme/colors';
import Icons from "../../theme/Icons";
const { ActualHeight, ActualWidth } = Global;
import { useNavigation } from '@react-navigation/native';
import _ from "lodash";

const Header = (props) => {
    const { isBack, title, onPressBell, isBell, isCart, style, isFilter, isSort } = props;
    const navigation = useNavigation();

    const goBack = () => {
        if (navigation) {
            let record = navigation.getState().routes
            record = record[record.length - 1];
            record = record.name
            navigation.goBack();
        }
    };




    const openDrawer = () => {
        navigation.toggleDrawer();
    }

    return (
        <View style={styles.headerMainView}>
            {/* <StatusBar style={styles.statusBar} /> */}
            <SafeAreaView style={styles.headerContainer}>

                {isBack && (
                    <TouchableOpacity onPress={goBack}
                        style={styles.sideBar_menu}>
                        <Icons.Ionicons
                            name="arrow-back"
                            size={30}
                            color={AppColor.white}
                        />
                    </TouchableOpacity>
                )}
                {!isBack && (
                    <TouchableOpacity
                        onPress={() => openDrawer()}
                        style={styles.sideBar_menu}
                    >
                        <Icons.MaterialCommunityIcons
                            name="menu"
                            size={30}
                            color={AppColor.white}
                        />
                    </TouchableOpacity>
                )}
                <Text style={styles.headerTitle}>{title}</Text>
                <View style={styles.headerRightView}>
                    {isBell && (<TouchableOpacity
                        onPress={
                            () => navigation.navigate("Notification")
                        }
                        style={styles.header_right_menu}
                    >
                        <Icons.MaterialCommunityIcons
                            name="bell"
                            size={20}
                            color={AppColor.white}
                        />

                    </TouchableOpacity>
                    )}

                </View>
            </SafeAreaView>
        </View>
    );
};
export default Header;

const styles = StyleSheet.create({
    headerContainer: {
        paddingTop: 5,
        flexDirection: 'row',
        backgroundColor: AppColor.appColor,
        width: '100%',
        justifyContent:'center',
        alignContent:'center'
    },
    back: {
        height: ActualWidth(24),
        width: ActualWidth(24),
        resizeMode: 'contain',
    },
    title: {
        fontSize: Font.fontSize.ft15,
        fontFamily: Font.fontFamily.bold,
        color: AppColor.white,
        fontWeight: 'bold'
    },
    headerMainView: {
        width: '100%',
        height: 80,
        backgroundColor: AppColor.appColor,
        flexDirection: "row",
    },
    statusBar: {
        backgroundColor: AppColor.appColor
    },
    headerTitle: {
        width: '80%',
        color: AppColor.white,
        marginLeft: 10,
        top: 37,
        fontFamily: Font.fontFamily.regularCal,
        fontWeight: 'bold',
        fontSize: Font.customFont.ft18
    },
    headerRightView: {
        width: '10%',
        right: 1,
        top: 30,
        paddingTop: 5
    },
    header_right_menu: {
        marginRight: 15,
        marginBottom: 3,
        top: 5
    },
    sideBar_menu: {
        marginLeft: 15,
        top: 10,
        width: '10%',
        justifyContent: 'center',
        alignItems: 'center',
    }
});
