import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const ItemButtons = ({ title, onPress }) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onPress}
        >
            <Text>{title}</Text>
        </TouchableOpacity>
    )
}

export default ItemButtons

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 4,
    },
})

ItemButtons.defaultProps = {
    onPress: () => {},
};
