import { NativeBaseProvider } from 'native-base'
import React from 'react'
import StackNavigation from './app/navigation/StackNavigation'

const App = () => {
    return (
        <NativeBaseProvider>
            <StackNavigation />
        </NativeBaseProvider>
    )
}

export default App
