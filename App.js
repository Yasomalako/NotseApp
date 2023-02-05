import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './app/screens/register/register';
import LoginScreen from './app/screens/Login/login';
import NoteScreen from './app/screens/notes/noteScreen';
import NoteProvider from './app/contexts/NotProvider-context';
import { useEffect, useState } from 'react';
import NoteDetail from './app/componentes/NoteData/notData';
import { AsyncStorage } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState({});
  const findUser = async () => {
    const result = await AsyncStorage.getItem('user');
    if (result !== null) {
      setUser(JSON.parse(result));
    }
  };

  useEffect(() => {
    findUser();
  }, [])

  const RenderNoteScreen = (props) => <NoteScreen {...props} user={user} />

  if (!user.name) return <Register />
  return (
    <NavigationContainer>
      <NoteProvider>
        <Stack.Navigator>
          <Stack.Screen name="register" component={Register} />
          <Stack.Screen name="login" component={LoginScreen} />
          <Stack.Screen name="notescreen" component={RenderNoteScreen} />
          <Stack.Screen name="notesDetails" component={NoteDetail} />

          {/* <Stack.Screen name="notes" component={NoteScreen} /> */}


        </Stack.Navigator>
      </NoteProvider>
    </NavigationContainer>
  )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
