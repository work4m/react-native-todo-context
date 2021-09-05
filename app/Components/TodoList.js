import React, { memo } from 'react';
import {
    FlatList, StyleSheet, Text,
} from 'react-native';

import TodoItem from './TodoItem';

const TodoList = ({ data, tabStatus }) => {
    return (
        <FlatList
            contentContainerStyle={styles.container}
            data={data}
            renderItem={({ item }) => <TodoItem title={item.text} itemId={item._id} tabStatus={tabStatus} />}
            keyExtractor={(item, index) => item.text + index}
        />
    )
}

export default memo(TodoList);

const styles = StyleSheet.create({
    container: {
        paddingBottom: 100,
    },
});
