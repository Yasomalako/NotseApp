
// import React, { useState } from 'react';
// import {
//     View,
//     StyleSheet,
//     Text,
//     TextInput,
//     StatusBar,
//     Dimensions,
// } from 'react-native';


// const Intro = () => {
//     const [user, setUser] = useState('');
//     const handleOnChangeText = text => setUser(text);

//     const handleSubmit = async () => {
//         const user = { name: user };
     

//     };

//     return (
//         <KeyboardAvoidingView
//             style={styles.container}
//             behavior="padding"
//         >
//             <View style={styles.inputContainer}>
//                 <TextInput
//                     placeholder="Email"
//                     value={email}
//                     // onChangeText={text => setEmail(text)}
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
//                 <TouchableOpacity
//                     onPress={handleSignUp}
//                     style={[styles.button, styles.buttonOutline]}
//                 >
//                     <Text style={styles.buttonOutlineText}>Register</Text>
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

