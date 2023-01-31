import * as React from 'react';
import { View, Text, Alert, BackHandler } from 'react-native';
import { NavigationContainer, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useDispatch } from 'react-redux';

//Screens
import CustomDrawer from '../screens/drawer/index.js';
import Splash from '../screens/splash/index.js';
import Home from '../screens/home/index.js';
import Profile from '../screens/profile/index.js';
import Notification from '../screens/notification/index.js';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const navigationRef = React.createRef();


const DrawerNavigator = () => {

    const dispatch = useDispatch();
    const HomeScreenOptions = {
        title: 'Home',
        headerTitleAlign: 'center',
        headerStyle: {
            backgroundColor: '#2BC7C9',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
        headerShown: false
    };
    React.useEffect(() => {
        function handleBackButton() {
            // @ts-ignore

            const routeInfo = navigationRef.current.getCurrentRoute()
            console.log('routein', routeInfo)
            if (routeInfo.name === "Home") {
                exitApp()
            }
            else {
                // @ts-ignore
                if (navigationRef.current.canGoBack()) {
                    // @ts-ignore
                    navigationRef.current.goBack()
                }
            }
            return true;
        }

        const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackButton);

        return () => backHandler.remove();
    }, []);
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

    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
            <Drawer.Screen name="Home" component={Home} options={{ headerShown: false }} />
            {/* <Drawer.Screen name="Profile" component={Profile} options={{ headerShown: false }} /> */}
        </Drawer.Navigator>


    );
}

const Navigator = () => {
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator initialRouteName="Drawer">
                {/* <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} /> */}
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Stack.Screen name="Drawer" component={DrawerNavigator} options={{ headerShown: false }} />
                <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
                <Stack.Screen name="Notification" component={Notification} options={{ headerShown: false }} />
                
        
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator;