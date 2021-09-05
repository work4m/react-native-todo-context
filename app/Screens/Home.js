import React, { useState, useMemo, useContext } from 'react';
import { StyleSheet, View } from 'react-native';

import FloatedButton from '../Components/FloatedButton';
import TodoList from '../Components/TodoList';
import TopTabBar from '../Components/TopTabBar';
import { TodoStore } from './../Context/TodoContext';
import noteStatus from './../Utils/StatusTypes';

const Home = () => {
    const { todoNotes } = useContext(TodoStore);

    // selected tabs state
    const [tab, setTab] = useState(0);

    const _data = useMemo(() => {
        let manuplatedArray = [];

        switch (tab) {
            case 0:
                manuplatedArray = todoNotes?.filter(item => item?.status === noteStatus.Pending);
                break;
            case 1:
                manuplatedArray = todoNotes?.filter(item => item?.status === noteStatus.Overdue);
                break;
            case 2:
                manuplatedArray = todoNotes?.filter(item => item?.status === noteStatus.Completed);
                break;
        }

        return manuplatedArray.reverse();
    }, [tab, todoNotes]);

    return (
        <View style={styles.container}>
            {/* tab bar component */}
            <TopTabBar
                selectedIndex={tab}
                changeTab={x => setTab(x)}
            />

            {/* todo list display */}
            <TodoList
                data={_data}
                tabStatus={tab}
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
