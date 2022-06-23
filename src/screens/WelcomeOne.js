import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';
import {useNavigation} from "@react-navigation/native";

const WelcomeOne = (props) => {
  const navigation = useNavigation()

  const navigateToWelcomeTwo = () => {
    navigation.navigate("WelcomeTwo")
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <FontAwesome5 name="id-badge" size={90} color="#00FF00" />
        <Text style={{color:"#C43BFB", fontSize: 60, }}>IDENTITY</Text>
      </View>
      <View style={styles.name}>
        <Text style={{marginBottom:20, fontSize: 25}}>IDENTITY</Text>
        <Text style={{marginBottom:20, fontSize:25}}>CONTACTS</Text>
      </View>
      <TouchableOpacity style={styles.getstarted} onPress={navigateToWelcomeTwo}>
        <Text style={{fontSize:20}}>GET STARTED</Text>
      </TouchableOpacity>
    </View>
  )
}

export default WelcomeOne;

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingHorizontal:16,
    alignContent: "center",
    backgroundColor:"#c5c5c5"
  },
  logo:{
    flex:0.5,
    alignItems: "center",
    justifyContent:"center",
    flexDirection: "row",
  },
  name: {
    flex: 0.3,
    alignItems: "center",
    justifyContent:"center",
    flexDirection: "column",
  },
  getstarted:{
    flex: 0.1,
    borderBottomWidth: 2,
    alignItems: "center",
    justifyContent: "flex-end",
    borderBottomColor: 'red',
    height: 2,
    marginTop: 1,
    marginHorizontal:"30%",
  },
});