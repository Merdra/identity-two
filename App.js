import React from 'react';
import {AntDesign, FontAwesome5, Octicons} from "@expo/vector-icons";
import { TouchableOpacity } from 'react-native';
import { NavigationContainer,} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeOne from "./src/screens/WelcomeOne";
import WelcomeTwo from "./src/screens/WelcomeTwo";
import Login from "./src/screens/Login";
import RegisterScreen from "./src/screens/RegisterScreen";
import HomeScreenQRCode from "./src/screens/HomeScreenQRCode";
import HomeScreenScanQRCode from './src/screens/HomeScreenScanQRCode';
import DetailsScreen from './src/screens/DetailsScreen';
import MyProfile from './src/screens/MyProfile';
import {useNavigation} from "@react-navigation/native"
import QRScanner from './src/components/QRScanner';

const Stack = createNativeStackNavigator();

const App = (props) => {
  const navigation = useNavigation()
  const navigateToMyProfile = () => {
    navigation.navigate("MyProfile")
  }
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='WelcomeOne' 
        screenOptions={{
        headerStyle:{backgroundColor:"red",},
        headerTintColor:"white",  
        headerTitleAlign:"center"
        }}>
        <Stack.Screen name="WelcomeOne" component={WelcomeOne} options={{headerShown:false}} />
        <Stack.Screen name="WelcomeTwo" component={WelcomeTwo} options={{headerShown:false}} /> 
        <Stack.Screen name="Login" component={Login} options={{title:"Sign In", }} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{title:"Register",}}/>
        <Stack.Screen name="HomeScreenQRCode" component={HomeScreenQRCode} options={{
        title:"IDENTITY", headerStyle:{headerRight: ()=> {<TouchableOpacity onPress={navigateToMyProfile}><Octicons name="person" size={24} color="white" /></TouchableOpacity>}} 
        }}/>   
        <Stack.Screen name="HomeScreenScanQRCode" component={HomeScreenScanQRCode} options={{headerShown:false}} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} options={{title:"Member Profile",}}/>
        <Stack.Screen name="MyProfile" component={MyProfile} options={{title:"My Profile",}}/>
    </Stack.Navigator>
  </NavigationContainer>
)
};

export default App; 