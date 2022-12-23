import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Btn from "../components/Btn.js";

export default function Home() {
    return (
        <View style={styles.container}>
            <Text>Welcome back</Text>
            <Text>This is the home page</Text>
            <Btn title="Go to form page" goto="Form"></Btn>
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