import { StyleSheet, Text, View } from 'react-native';
import Intro from './app/screens/intro/intro';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './app/screens/Login/login';
import NoteScreen from './app/screens/notes/notes';
import Register from './app/screens/register/register';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator> 
        <Stack.Screen name="register" component={Register} />
        <Stack.Screen name="notes" component={NoteScreen} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="intro" component={Intro} />
       
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
