import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { SCREENS } from './ScreensRouter';
import { navigationRef } from '@rn_core/navigations/src';

const Stack = createStackNavigator();

export const RootNavigation = () => {
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator
                initialRouteName={SCREENS.LOGINSCREEN.name}
                screenOptions={{headerShown: false}}>
                <Stack.Screen
                    name={SCREENS.LOGINSCREEN.name}
                    component={SCREENS.LOGINSCREEN.component}
                />
                <Stack.Screen
                    name={SCREENS.HOMESCREEN.name}
                    component={SCREENS.HOMESCREEN.component}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}