import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { StatusBar, useTheme } from 'native-base'
import React from 'react'
import BrazilNews from '../screens/brazilnews/BrazilNews'
import Platforms from '../screens/platforms/Platforms'
import DetailsNew from '../screens/brazilnews/DetailsNew'
import { ROUTE_HOME, ROUTE_BRAZIL_NEWS, ROUTE_PLATFORMS, ROUTE_NEW_DETAILS } from './AppRoutes'
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
                <Stack.Screen name={ROUTE_PLATFORMS} component={Platforms} 
                    options={{ title: 'Platforms'}} />
                <Stack.Screen name={ROUTE_NEW_DETAILS} component={DetailsNew} 
                    options={{ title: 'New Details'}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigation
