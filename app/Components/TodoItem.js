import React, { memo, useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import PropTypes from 'prop-types';

import ItemButtons from './ItemButtons';
import { TodoStore } from './../Context/TodoContext';
import noteStatus from './../Utils/StatusTypes';

const TodoItem = ({ title, itemId, tabStatus }) => {
    const { _changeStatus } = useContext(TodoStore);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>

            <View height={10} />

            <View style={styles.buttonsContainer} >
                {
                    tabStatus !== 1 && tabStatus !== 2 &&
                    <ItemButtons
                        title="Start"
                        onPress={() => _changeStatus(itemId, noteStatus.Overdue)}
                    />
                }

                <View width={10} />

                {
                    tabStatus !== 2 &&
                    <ItemButtons
                        title="Done"
                        onPress={() => _changeStatus(itemId, noteStatus.Completed)}
                    />
                }
            </View>
        </View>
    )
}

export default memo(TodoItem);

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        padding: 14,
    },
    title: {
        flex: 1,
    },
    buttonsContainer: {
        justifyContent: 'flex-end',
        flexDirection: 'row',
    },
});

TodoItem.propTypes = {
    title: PropTypes.string,
};

TodoItem.defaultProps = {
    title: "--",
}
