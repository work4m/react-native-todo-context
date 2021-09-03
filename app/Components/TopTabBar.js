import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

import noteStatus from './../Utils/StatusTypes';
import Tab from './Tab';

const TopTabBar = ({ selectedIndex, changeTab }) => {
    return (
        <View style={styles.container}>
            {console.log(Object.values(noteStatus))}
            {
                Object.values(noteStatus)?.map((status, index) => (
                    <Tab
                        key={status + index}
                        title={status}
                        currentIndex={index}
                        selectedIndex={selectedIndex}
                        changeTab={changeTab}
                    />
                ))
            }
        </View>
    )
}

export default memo(TopTabBar);

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: 'row'
    },
});
