import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Btn from "../components/Btn.js";

export default function Confirmation() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text>Successfully registered</Text>
            <Btn title="Go back" goto = "Home" />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})