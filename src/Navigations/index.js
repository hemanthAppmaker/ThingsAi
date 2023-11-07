import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Light} from '../Constants/color';
import {
  PaperProvider,
  useTheme,
  MD3LightTheme as DefaultTheme,
  MD3DarkTheme,
} from 'react-native-paper';
import HomeScreen from '../Components/Home';
import WelcomeScreen from '../Components/WelcomeScreen';
import DetailScreen from '../Components/Features';
import Features from '../Components/Features';

function AppNavigation() {
  const Stack = createNativeStackNavigator();
  const theme = {
    ...DefaultTheme,
    // Specify custom property
    myOwnProperty: true,
    // Specify custom property in nested object
    colors: {
      ...DefaultTheme.colors,
      ...Light,
    },
  };

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Welcome"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Features" component={Features} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default AppNavigation;
