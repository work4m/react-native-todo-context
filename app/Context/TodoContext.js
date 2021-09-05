import React, { createContext, useState } from 'react';

import noteStatus from './../Utils/StatusTypes';

export const TodoStore = createContext();

// initial state
const initialState = [];

// create provider for perticuler store
export const TodoContextProvider = (props) => {
    const [todoNotes, settodoNotes] = useState(initialState);

    // add notes
    const _addNotes = (item) => {
        const _addObject = { _id: todoNotes.length, text: item, status: noteStatus.Pending };
        settodoNotes(prev => [...prev, _addObject]);
    }    

    // add notes
    const _changeStatus = (id, status) => {
        const newList = todoNotes?.map((note) => {
            if (note?._id === id) {
                return { ...note, status };
            }
            return note
        });

        settodoNotes(newList);
    }

    return (
        <TodoStore.Provider value={{ todoNotes, _addNotes, _changeStatus }}>
            {props.children}
        </TodoStore.Provider>
    );
}

