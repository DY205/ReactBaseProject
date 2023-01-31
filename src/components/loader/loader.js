//====================Loader ===============================//
import { View, StyleSheet } from 'react-native';
import React from 'react';
import { SkypeIndicator } from "react-native-indicators";
import DColor from "../../theme/colors";

const Loader = (props) => {

    return (
    <View style={styles.container}>
        <SkypeIndicator
            animating={true} color={DColor.white} />
    </View>
    )

};
export default Loader
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // width: wp(100),
        // height: '100%',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
});
