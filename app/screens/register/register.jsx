// import React, { useEffect, useState } from "react";
// import { KeyboardAvoidingView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native";
// import { useNavigation } from '@react-navigation/core'
// import {firebase} from '../../../firebase'
// import {firebase} from '../../../firebase'


// export default function Register() {
//     const [userData, setUserData] = useState(
//         {
//             name: "",
//             email: "",
//             password: "",
//         }
//     );
//     const [errors, setErrors] = useState({});
//     useEffect(() => {
//         const unsubscribe = firebase.auth.onAuthStateChanged(user => {
//             if (user) {
//                 navigation.replace("login")
//             }
//         })

//         return unsubscribe
//     }, [])

//     const handleRegistration = () => {
//         // const email = "";
//         // const password = "";
//         firebase.auth
//             .createUserWithEmailAndPassword({email, password})
//             .then((userCredential) => {
//                 // Signed in 
//                 const user = userCredential.user;
//                 console.log('Registered with:', user?.email)
//             })
//             .catch((error) => {
//                 const errorCode = error.code;
//                 const errorMessage = error.message;
//             });
//     }

//     const validate = () => {
//         Keyboard.dismiss();
//         let isValid = true;

//         if (!userData.email) {
//             handleError('Please input email', 'email');
//             isValid = false;
//         } else if (!userData.email.match(/\S+@\S+\.\S+/)) {
//             handleError('Please input a valid email', 'email');
//             isValid = false;
//         }

//         if (!userData.name) {
//             handleError('Please input name', 'name');
//             isValid = false;
//         }


//         if (!userData.password) {
//             handleError('Please input password', 'password');
//             isValid = false;
//         } else if (userData.password.length < 5) {
//             handleError('Min password length of 5', 'password');
//             isValid = false;
//         }
//     };


//     const handleOnchange = (text, input) => {
//         setUserData(prevState => ({ ...prevState, [input]: text }));
//     };
//     const handleError = (error, input) => {
//         setErrors(prevState => ({ ...prevState, [input]: error }));
//     };

//     const navigation = useNavigation()



//     return (
//         <KeyboardAvoidingView
//             style={styles.container}
//             behavior="padding"
//         >
//             <View style={styles.inputContainer}>
//                 <TextInput
//                     placeholder="name"
//                     onChangeText={text => handleOnchange(text, 'name')}
//                     // value={userData.email}
//                     onFocus={() => handleError(null, 'name')}
//                     // onChange={text => setUserData(text)}
//                     error={errors.name}
//                     style={styles.input}
//                 />
//                 <TextInput
//                     placeholder="Email"
//                     onChangeText={text => handleOnchange(text, 'email')}
//                     value={userData.email}
//                     onFocus={() => handleError(null, 'email')}
//                     // onChange={text => setUserData(text)}
//                     error={errors.email}
//                     style={styles.input}
//                 />
//                 <TextInput
//                     placeholder="Password"
//                     onChangeText={text => handleOnchange(text, 'password')}
//                     value={userData.password}
//                     onFocus={() => handleError(null, 'password')}
//                     // onChange={text => setUserData(text)}
//                     style={styles.input}
//                     error={errors.password}
//                     secureTextEntry
//                 />
//             </View>

//             <View style={styles.buttonContainer}>
//                 <TouchableOpacity
//                     onPress={handleRegistration}
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
import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView,Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
// import { auth } from '../../../firebase'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [errors, setErrors] = useState({});

    const navigation = useNavigation()

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (!user) {
                navigation.replace("login")
            }
        })

        return unsubscribe
    }, [])

    const handleSignUp = () => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((res) => {

                console.log(res);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });

    }
    const handleOnchange = (text, input) => {
        setErrors(prevState => ({ ...prevState, [input]: text }));
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
                    onChange={text => setName(text)}
                    onChangeText={text => handleOnchange(text, 'name')}
                    style={styles.input}
                    error={errors.name}
                />
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChange={text => setEmail(text)}
                    onChangeText={text => handleOnchange(text, 'Email')}
                    style={styles.input}
                    error={errors.email}
                />
                <TextInput
                    placeholder="Password"
                    value={password}
                    onChange={text => setPassword(text)}
                    onChangeText={text => handleOnchange(text, 'password')}
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
