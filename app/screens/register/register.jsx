import { createUserWithEmailAndPassword } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
// import { auth } from '../../../firebase'
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../firebase';


const Register = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [errors, setErrors] = useState({});

    // useEffect(() => {
    //     auth
    //   .createUserWithEmailAndPassword(email, password)
    //   .then(userCredentials => {
    //     const user = userCredentials.user;
    //     console.log('Registered with:', user.email);
    //   })
    //   .catch(error => alert(error.message))
    // }, [])

    const handleSignUp = async () => {
        createUserWithEmailAndPassword(auth,email, password).then((credentials)=> {
              console.log(credentials);
              console.log(credentials.user);
            }).catch((err) => {
              console.error(err);
            })
        const user = {
            name: name,
            email: email,
            password: password
        }
        await AsyncStorage.setItem('user', JSON.stringify(user))

        navigation.navigate("login");
    };


    const handleError = (error, input) => {
        setErrors(prevState => ({ ...prevState, [input]: error }));
    };

    const validate = () => {
        Keyboard.dismiss();
        let isValid = true;

        if (!email) {
            handleError('Please input email', 'email');
            isValid = false;
        } else if (!email.match(/\S+@\S+\.\S+/)) {
            handleError('Please input a valid email', 'email');
            isValid = false;
        }

        if (!name) {
            handleError('Please input name', 'name');
            isValid = false;
        }

        if (!password) {
            handleError('Please input password', 'password');
            isValid = false;
        } else if (password.length < 5) {
            handleError('Min password length of 5', 'password');
            isValid = false;
        }
    };
    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
        >
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Name"
                    value={name}
                    onFocus={() => handleError(null, 'name')}
                    onChangeText={text => setName(text, 'name')}
                    style={styles.input}
                    error={errors.name}
                />
                <TextInput
                    placeholder="Email"
                    value={email}
                    onFocus={() => handleError(null, 'email')}
                    onChangeText={text => setEmail(text, 'email')}
                    style={styles.input}
                    error={errors.email}
                />
                <TextInput
                    placeholder="Password"
                    value={password}
                    onFocus={() => handleError(null, 'password')}
                    onChangeText={text => setPassword(text, 'password')}
                    style={styles.input}
                    secureTextEntry
                    error={errors.password}
                />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={handleSignUp}
                    style={[styles.button, styles.buttonOutline]}
                >
                    <Text onPress={validate} style={styles.buttonOutlineText}>Register</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default Register

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
