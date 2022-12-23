import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { StyleSheet, View, Text, TextInput} from 'react-native';

import Btn from "../components/Btn.js";

export default function Form() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text>Daily Scrum</Text>
            <View> 
                <Text>What did you do yesterday?</Text>
                    <TextInput
                        multiline
                        label={'yesterday'}
                        style={styles.button}
                    />
                <Text>What will you do today?</Text>
                    <TextInput
                        multiline
                        label={'today'}
                        style={styles.button}
                    />
                <Text>Are there any impediments in your way?</Text>
                    <TextInput
                        multiline
                        label={'impediments'}
                        style={styles.button}
                    />
                <Text>How are you today?</Text>
                
                <Text>Any observations?</Text>
                    <TextInput
                        multiline
                        label={'observation'}
                        style={styles.button}
                    />
                <Btn title="Save" goto="Confirmation" />
                <Btn title="Cancel" goto="Home" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 8,
        paddingHorizontal: 8,
        borderRadius: 50,
        backgroundColor: "#d4d4d4"
    },
}); 
