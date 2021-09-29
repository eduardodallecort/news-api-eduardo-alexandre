import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useTheme } from 'native-base'

import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import BrazilNews from '../screens/brazilnews/BrazilNews'
import { ROUTE_BRAZIL_NEWS } from './AppRoutes'

const Tab = createBottomTabNavigator()

const TabNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name={ROUTE_BRAZIL_NEWS} component={BrazilNews}
                options={
                    {
                        title: 'Brazil News'
    
                    }
                } />
        </Tab.Navigator>
    )
}

export default TabNavigation
