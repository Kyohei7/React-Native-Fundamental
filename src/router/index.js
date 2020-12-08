import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { ReactNativeSvg, Splash, Welcome } from '../pages';

const Stack = createStackNavigator();

const Router = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="ReactNativeSvg" component={ReactNativeSvg} />
        </Stack.Navigator>
    )
}

export default Router