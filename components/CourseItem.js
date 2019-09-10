import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

const CourseItem = ({ value, onDelete, id }) => {
    const { courseItem } = styles;
    return (
        <View style={courseItem}>
            <Text style={{ fontWeight: '800' }}>{value}</Text>
            <TouchableOpacity>
                <View>
                    <Button onPress={onDelete.bind(this, id)} title="delete" />
                </View>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    courseItem: {
        width: '70%',
        color: '#FA255E',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 30,
        marginVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});
export default CourseItem;
