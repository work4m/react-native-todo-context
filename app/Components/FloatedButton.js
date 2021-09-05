import React, { useState, useContext } from 'react';
import {
    StyleSheet, Text, TouchableOpacity,
    TextInput, View,
} from 'react-native';

import { TodoStore } from './../Context/TodoContext';

const FloatedButton = () => {
    const { _addNotes } = useContext(TodoStore);

    const [textInput, settextInput] = useState("");

    const addTodo = () => {
        try {
            if (!textInput.trim().length) {
                alert("Please write something!");
            } else {
                _addNotes(textInput);
                settextInput("");
            }
        } catch (error) {
            alert(error);
        }
    }

    return (
        <View
            style={styles.container}
        >
            <TextInput
                value={textInput}
                onChangeText={(text) => settextInput(text)}
                style={styles.input}
                placeholder={"Enter todo text..."}
            />

            <View width={16} />

            <TouchableOpacity
                style={styles.plusContainer}
                onPress={() => addTodo()}
            >
                <Text style={styles.plus}>+</Text>
            </TouchableOpacity>
        </View>
    )
}

export default FloatedButton;

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        justifyContent: "center",
        position: "absolute",
        bottom: 25,
        flexDirection: "row",
        marginHorizontal: 20,
        backgroundColor: "white",
    },
    input: {
        flex: 1,
        borderWidth: 1,
    },
    plusContainer: {
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: "yellow",
        alignItems: 'center',
        justifyContent: "center",
    },
    plus: {
        fontSize: 30,
    },
});
