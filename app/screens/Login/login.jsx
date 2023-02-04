// import React,{ useEffect, useState } from "react";
// import { KeyboardAvoidingView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native";
// import { useNavigation } from '@react-navigation/core'
// import { getAuth,onAuthStateChanged } from "firebase/auth";


// export default function LoginScreen() {
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')

//     const navigation = useNavigation()

//     useEffect(() => {
//         const auth = getAuth();
//         const unsubscribe = auth.onAuthStateChanged(user => {
//             if (user) {
//                 navigation.replace("notes")
//             }
//         })

//         return unsubscribe
//     }, [])

//     const handleLogin = () => {
//         const auth = getAuth();
//         auth
//             .signInWithEmailAndPassword(auth,email, password)
//             .then(userCredentials => {
//                 const user = userCredentials.user;
//                 console.log('Logged in with:', user.email);
//             })
//             .catch(error => alert(error.message))
//     }

//     return (
//         <KeyboardAvoidingView
//             style={styles.container}
//             behavior="padding"
//         >
//             <View style={styles.inputContainer}>
//                 <TextInput
//                     placeholder="Email"
//                     value={email}
//                     onChangeText={text => setEmail(text)}
//                     style={styles.input}
//                 />
//                 <TextInput
//                     placeholder="Password"
//                     value={password}
//                     onChangeText={text => setPassword(text)}
//                     style={styles.input}
//                     secureTextEntry
//                 />
//             </View>

//             <View style={styles.buttonContainer}>
//                 <TouchableOpacity
//                     onPress={handleLogin}
//                     style={styles.button}
//                 >
//                     <Text style={styles.buttonText}>Login</Text>
//                 </TouchableOpacity>
//             </View>
//         </KeyboardAvoidingView>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     inputContainer: {
//         width: '80%'
//     },
//     input: {
//         backgroundColor: 'white',
//         paddingHorizontal: 15,
//         paddingVertical: 10,
//         borderRadius: 10,
//         marginTop: 5,
//     },
//     buttonContainer: {
//         width: '60%',
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginTop: 40,
//     },
//     button: {
//         backgroundColor: '#0782F9',
//         width: '100%',
//         padding: 15,
//         borderRadius: 10,
//         alignItems: 'center',
//     },
//     buttonOutline: {
//         backgroundColor: 'white',
//         marginTop: 5,
//         borderColor: '#0782F9',
//         borderWidth: 2,
//     },
//     buttonText: {
//         color: 'white',
//         fontWeight: '700',
//         fontSize: 16,
//     },
//     buttonOutlineText: {
//         color: '#0782F9',
//         fontWeight: '700',
//         fontSize: 16,
//     },
// })
import { auth } from '../../../firebase';
// import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import {signInWithEmailAndPassword } from "firebase/auth";
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    //   const navigation = useNavigation()

    //   useEffect(() => {
    //     const unsubscribe = auth.onAuthStateChanged(user => {
    //       if (!user) {
    //       navigation.navigate("notescreen")
    //       }
    //     })

    //     return unsubscribe
    //   }, [])

    const handleLogin = () => {

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                navigation.navigate("notescreen")
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });

        //         signInWithEmailAndPassword(auth,email, password)
        //         .then(userCredentials => {
        //             const user = userCredentials.user;
        //             console.log('Logged in with:', user.email);
        //         })
        //         .catch(error => alert(error.message))
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
        >
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={styles.input}
                    secureTextEntry
                />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={handleLogin}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                {/* <TouchableOpacity
          onPress={handleSignUp}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity> */}
            </View>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        width: '80%'
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    button: {
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#0782F9',
        borderWidth: 2,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonOutlineText: {
        color: '#0782F9',
        fontWeight: '700',
        fontSize: 16,
    },
})
