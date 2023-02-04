import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './app/screens/register/register';
import LoginScreen from './app/screens/Login/login';
import NoteScreen from './app/screens/notes/noteScreen';
import NoteProvider from './app/contexts/NotProvider-context';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <NoteProvider>
        <Stack.Navigator>
          <Stack.Screen name="register" component={Register} />
          <Stack.Screen name="login" component={LoginScreen} />
          <Stack.Screen name="notescreen" component={NoteScreen} />
          
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
