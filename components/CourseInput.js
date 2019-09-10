import React, { useState } from 'react';
import { Button, TextInput, View, StyleSheet, Modal } from 'react-native';

const CourseInput = ({ submitGoal, isAddMode, isCancelMode }) => {
    const [enteredGoal, setEnteredGoal] = useState('');
    const { inputContainer, textInput, modalButtonContainer } = styles;
    const handleGoal = goal => {
        setEnteredGoal(goal);
    };
    const submitGoalHandler = () => {
        submitGoal(enteredGoal);
        setEnteredGoal('');
    };
    return (
        <Modal visible={isAddMode} animationType="slide">
            <View style={inputContainer}>
                <TextInput
                    placeholder="What I want to achieve"
                    style={textInput}
                    onChangeText={handleGoal}
                    value={enteredGoal}
                />
                <View style={modalButtonContainer}>
                    <Button title="CANCEL" color="red" onPress={isCancelMode} />
                    <Button title="ADD" onPress={submitGoalHandler} />
                </View>
            </View>
        </Modal>
    );
};
const styles = StyleSheet.create({
    textInput: {
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 20,
        padding: 10,
        paddingLeft: 15,
        width: '70%'
    },
    inputContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        marginBottom: 20
    },
    modalButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
});
export default CourseInput;
