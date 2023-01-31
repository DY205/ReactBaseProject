import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import DColor from '../../theme/colors';
import Font from '../../theme';


const DrawerItem = ({ navigation, icon, name, screenName }) => (
    <TouchableOpacity
        activeOpacity={0.9}
        style={styles.menuItem}
        onPress={() => {
            navigation.closeDrawer();
            navigation.navigate(`${screenName}`);
        }}>
        <Icon name={icon} size={20} color={DColor.appColor} style={{ margin: 15 }} />
        <Text style={styles.menuItemText}>{name}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    menuItem: {
        flexDirection: 'row',
        backgroundColor: DColor.menu_background,
        height: 50,
    },
    menuItemText: {
        fontSize: 14,
        fontWeight: '300',
        marginTop: 16,
        color: DColor.black,
        fontFamily: Font.fontFamily.regularCal,
    },
});

export default DrawerItem;
