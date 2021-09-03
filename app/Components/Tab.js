import React, { memo, useMemo } from 'react';
import {
    StyleSheet, Text, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

const Tab = ({ selectedIndex, currentIndex, title, changeTab }) => {

    const isSelected = useMemo(() => {
        return selectedIndex === currentIndex;
    }, [selectedIndex, currentIndex]);

    return (
        <TouchableOpacity
            style={[styles.container, {
                backgroundColor: isSelected ? "gray" : "white"
            }]}
            onPress={() => changeTab(currentIndex)}
        >
            <Text>{title}</Text>
        </TouchableOpacity>
    )
}

export default memo(Tab);

const styles = StyleSheet.create({
    container: {
        width: `${100 / 3}%`,
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
    },
});

Tab.propTypes = {
    selectedIndex: PropTypes.number,
    currentIndex: PropTypes.number,
    title: PropTypes.string,
    changeTab: PropTypes.func,
};

Tab.defaultProps = {
    selectedIndex: 0,
    currentIndex: 0,
    title: "",
    changeTab: () => { },
};
