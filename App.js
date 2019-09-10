import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import CourseItem from './components/CourseItem';
import CourseInput from './components/CourseInput';

const App = () => {
    const [courseGoals, setCourseGoals] = useState([]);
    const [isAddMode, setIsAddMode] = useState(false);

    const renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: '100%',
                    backgroundColor: '#CED0CE'
                }}
            />
        );
    };

    const submitGoal = enteredGoal => {
        setCourseGoals(courseGoals => [
            ...courseGoals,
            { id: Math.random().toString(), value: enteredGoal }
        ]);
        setIsAddMode(false);
    };

    const removeGoal = id => {
        setCourseGoals(courseGoals => {
            return courseGoals.filter(goal => goal.id !== id);
        });
    };

    const cancelGoalAddition = () => {
        setIsAddMode(false);
    };

    const { screen, list } = styles;
    return (
        <View style={screen}>
            <Button title="Add New Course goal" onPress={() => setIsAddMode(true)} />
            <CourseInput
                isAddMode={isAddMode}
                submitGoal={submitGoal}
                isCancelMode={cancelGoalAddition}
            />

            <FlatList
                keyExtractor={(item, index) => item.id}
                data={courseGoals}
                ItemSeparatorComponent={renderSeparator}
                renderItem={itemData => (
                    <CourseItem
                        onDelete={removeGoal}
                        value={itemData.item.value}
                        id={itemData.item.id}
                    />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        backgroundColor: '#fff',
        padding: 40,
        paddingTop: 60
    },
    list: {
        flexDirection: 'row',
        justifyContent: 'center'
    }
});
export default App;
