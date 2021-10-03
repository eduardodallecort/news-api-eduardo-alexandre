import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useTheme } from 'native-base'

import React from 'react'
import BrazilNews from '../screens/brazilnews/BrazilNews'
import Platforms from '../screens/platforms/Platforms'
import { ROUTE_BRAZIL_NEWS, ROUTE_PLATFORMS } from './AppRoutes'

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
            <Tab.Screen name={ROUTE_PLATFORMS} component={Platforms}
                options={
                    {
                        title: 'Platforms'

                    }
                } />
        </Tab.Navigator>
    )
}

export default TabNavigation
