import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import FloatedButton from '../Components/FloatedButton';
import TopTabBar from '../Components/TopTabBar';

const Home = () => {
    // selected tabs state
    const [tab, setTab] = useState(0);

    return (
        <View style={styles.container}>
            {/* tab bar component */}
            <TopTabBar
                selectedIndex={tab}
                changeTab={x => setTab(x)}
            />
            
            {/* floated button to add todo */}
            <FloatedButton />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
