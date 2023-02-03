import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView,Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
// import { auth } from '../../../firebase'
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../firebase';


const Register = () => {
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    // const [name, setName] = useState('')
    const [userData, setUserData] = useState(
        {name:"",
        email:"",
        password:""}
    )
    const [errors, setErrors] = useState({});

    const navigation = useNavigation()

    useEffect(() => {
        auth.   createUserWithEmailAndPassword(auth, userData.email,userData.password)
        .then((res) => {
            console.log('Registered with',res.email)
            navigation.navigate("login");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });

    }, [])

    const handleSignUp = (text, value) => {
        setUserData(prevState => ({ ...prevState, [value]: text }));
    };
    const handleOnchange = (text, input) => {
        setUserData(prevState => ({ ...prevState, [input]: text }));
    };

    const handleError = (error, input) => {
        setErrors(prevState => ({ ...prevState, [input]: error }));
    };

    const validate = () => {
        Keyboard.dismiss();
        let isValid = true;

        if (!userData.email) {
            handleError('Please input email', 'email');
            isValid = false;
        } else if (!userData.email.match(/\S+@\S+\.\S+/)) {
            handleError('Please input a valid email', 'email');
            isValid = false;
        }

        if (!userData.name) {
            handleError('Please input name', 'name');
            isValid = false;
        }


        if (!userData.password) {
            handleError('Please input password', 'password');
            isValid = false;
        } else if (userData.password.length < 5) {
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
                    value={userData.name}
                    onChangeText={text => setUserData(text)}
                    // onFocus={text => handleOnchange(text, 'name')}
                    style={styles.input}
                    error={errors.name}
                />
                <TextInput
                    placeholder="Email"
                    value={userData.email}
                    onChangeText={text => handleOnchange(text, 'Email')}
                    // onFocus={text => handleOnchange(text, 'Email')}
                    style={styles.input}
                    error={errors.email}
                />
                <TextInput
                    placeholder="Password"
                    value={userData.password}
                    onChangeText={text => handleOnchange(text, 'password')}
                    // onFocus={text => handleOnchange(text, 'password')}
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
