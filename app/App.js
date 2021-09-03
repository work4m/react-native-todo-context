import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// context provider
import { TodoContextProvider } from './Context/TodoContext';
import Home from './Screens/Home';

const App = () => {
    return (
        <TodoContextProvider>
            <Home />
        </TodoContextProvider>
    )
}

export default App

const styles = StyleSheet.create({})
