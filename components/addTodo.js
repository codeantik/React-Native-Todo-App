import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native'

export default function addTodo({ submitHandler }) {
    const [todo, setTodo] = useState('');

    const changeHandler = (text) => {
        setTodo(text);
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                value={todo}
                placeholder="Enter todo..."
                onChangeText={changeHandler}
            />
            <Button
                title="Add Todo"
                color="coral"
                onPress={() => submitHandler(todo)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    }
})
