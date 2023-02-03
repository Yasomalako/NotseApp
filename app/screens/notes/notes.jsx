import { View, Text, Keyboard, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import React from "react";

export default function NoteScreen() {

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Sing out</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#c9f5d9'
    },
    inputTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
        height: 50,
        width: '97%',
        borderBottomWidth: 1 / 2,
        borderLeftWidth: 1 / 2,
        padding: 10
    },
    inputNote: {
        fontSize: 18,
        marginTop: 20,
        marginBottom: 10,
        height: 200,
        width: '97%',
        borderBottomWidth: 1 / 2,
        borderLeftWidth: 1 / 2,
        padding: 10
    },
    button: {
        backgroundColor: '#0782F9',
        width: '60%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 40
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,

    }
})