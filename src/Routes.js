import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './components/Home';
import StackScreen from './components/StackScreen';

const AppStack = createStackNavigator();
const AppDrawer = createDrawerNavigator();

export default function Routes(){

    function drawer(){
        return (
            <AppDrawer.Navigator>
                <AppDrawer.Screen name='Menu' component={Home} />
            </AppDrawer.Navigator>
        );
    }

    return (
        <NavigationContainer>
            <AppStack.Navigator>

                <AppStack.Screen name="Menu" component={drawer} options={{ headerShown: false }} />
                <AppStack.Screen name="Home" component={Home} />
                <AppStack.Screen name="StackScreen" component={StackScreen} />

            </AppStack.Navigator>
        </NavigationContainer>
    );
}