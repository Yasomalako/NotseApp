import { View, Text, Keyboard, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { firebase } from '../../../firebase'

export default function NoteScreen() {
   
        return (
            <View>
                
            </View>
        )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: '#c9f5d9'
    },
    inputTitle:{
        fontSize:18,
        fontWeight:'bold',
        marginTop:20,
        marginBottom:10,
        height:50,
        width:'97%',
        borderBottomWidth:1/2,
        borderLeftWidth:1/2,
        padding:10
    },
    inputNote:{
        fontSize:18,
        marginTop:20,
        marginBottom:10,
        height:200,
        width:'97%',
        borderBottomWidth:1/2,
        borderLeftWidth:1/2,
        padding:10
    },
    button:{
        backgroundColor:'green',
        borderRadius:10,
        marginTop:20,
        height:150,
        alignItems:'center',
        justifyContent:"center",
        elevation:7,
        shadowColor:'blue'
    },
    buttonText:{
        color:'white',
        fontSize:22,
        fontWeight:"bold"
    }
})