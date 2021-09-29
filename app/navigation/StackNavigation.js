import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { StatusBar, useTheme } from 'native-base'
import React from 'react'
import BrazilNews from '../screens/brazilnews/BrazilNews'
import { ROUTE_HOME, ROUTE_BRAZIL_NEWS } from './AppRoutes'
import TabNavigation from './TabNavigation'

const Stack = createStackNavigator()

const StackNavigation = () => {
    const { colors } = useTheme()

    return (
        <NavigationContainer>
            <StatusBar/>
            <Stack.Navigator>
                <Stack.Screen name={ROUTE_HOME} component={TabNavigation} 
                    options={{ headerShown: false }} />
                <Stack.Screen name={ROUTE_BRAZIL_NEWS} component={BrazilNews} 
                    options={{ title: 'Brazil News'}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigation
