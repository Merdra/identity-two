import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {useNavigation} from "@react-navigation/native";

const WelcomeTwo = (props) => {
  const navigation = useNavigation()

  const navigateToRegisterScreen = () => {
    navigation.navigate("RegisterScreen")
  }

  const navigateToLogin = () => {
    navigation.navigate("Login")
  }

  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image source={require('../../assets/office.png')} style={{height: "100%", width:"100%",}} />
      </View>
      <View style={styles.firstWriting}>
        <Text style={{fontSize:25}}>KEEP IN TOUCH WITH THE PEOPLE OF IDENTITY</Text>
        <Text style={{fontSize:20, color:"grey"}}>Sign in or register with your Identity email</Text>
      </View>
      <View style={styles.secondWriting}></View>
      <View style={styles.links}>
        <TouchableOpacity style={styles.linkone} onPress={navigateToRegisterScreen}>
            <Text style={{fontSize:20,}}> REGISTER</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.linkone} onPress={navigateToLogin}>
            <Text style={{fontSize:20,}}>SIGN IN</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default WelcomeTwo;

const styles = StyleSheet.create({
        container:{
          flex:1,
        },
        image:{
            flex:0.6,
        },
        firstWriting: {
            flex: 0.2,
            flexDirection:"column",
            paddingHorizontal: 20,
            justifyContent:"center",
            alignSelf:"center"
        },
        secondWriting:{
            flex: 0.1,
        },
        links:{
            flex: 0.2,
            flexDirection:"row",
            borderBottomWidth: 2,
            alignContent:"space-between",
            justifyContent: "space-evenly",
            height: 30,
            marginTop: 10,
        },
        linkone:{
                flex: 0.2,
                flexDirection:"row",
                borderBottomWidth: 2,
                alignContent:"space-between",
                justifyContent: "space-evenly",
                borderBottomColor: 'red',
                height: 30,
                marginTop: 10,
            }
        }
)