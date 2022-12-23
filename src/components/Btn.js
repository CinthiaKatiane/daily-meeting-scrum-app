import React from 'react';
import { StyleSheet, Pressable, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Btn(props) {
    const page = props.goto;
    const navigation = useNavigation();
    return (
        <Pressable 
        style={styles.button}
        onPress={ () => navigation.navigate(page) }
        > 
            <Text style={styles.btnText}>{props.title}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:'#9E50B9',
        padding: 15,
        borderRadius: 50,
        fontSize:12,
        margin: 10,
    },
    btnText:{
        color:'#FFF',
        fontWeight: 'bold',
        fontSize: 14,
    }
})