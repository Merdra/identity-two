import { StyleSheet, Text, TextInput, View, Image } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import {useNavigation} from "@react-navigation/native"

const Login = (props) => {

    const navigation = useNavigation()

    const navigateToMyProfile = () => {
      navigation.navigate("MyProfile")
    }

  return (
    <View style={styles.container}>
         <View style={styles.image}>
             <Image source={require('../../assets/conference-room.jpg')} style={{height: "100%", width:"100%",}} />
         </View>
         <View style={styles.blank}></View>
         <View style={styles.inputs}>
            <View style={{flexDirection:"row",justifyContent:"space-between", borderBottomWidth:1,borderBottomColor: "gray"}}>
                <Text style={{fontSize: 20,marginVertical: 20, }}>Email</Text>
                <TextInput style={{marginBottom:1, fontSize: 20, width: "80%",textAlign:"right"}} placeholder="john.smith@mail.com" placeholderTextColor={'#aaaaaa'} />
            </View>

            <View style={{flexDirection:"row",justifyContent:"space-between",}}>
                <Text style={{fontSize: 20,marginVertical: 20, }}>Password</Text>
                <TextInput style={{marginBottom:1, fontSize: 40, width: "80%",textAlign:"right"}} placeholder=".........." placeholderTextColor={'#aaaaaa'}  secureTextEntry={true}  />
            </View>
            
         </View>
         <View style={styles.button}>
            <TouchableOpacity style={{backgroundColor:"red", alignSelf:"center",justifyContent:"center", height:"100%", width:"100%", borderRadius:5}} onPress={navigateToMyProfile}>
                <Text style={{fontSize: 30, color: "white", textAlign:"center" }}>SIGN IN</Text>
            </TouchableOpacity>
         </View>
         <View style={styles.forgot}>
            <Text style={{fontSize:20}}>Forgot?</Text>
            <TouchableOpacity>
             <Text style={{fontSize:20, borderBottomWidth:2,borderBottomColor: "red"}}> Reset Password</Text>
            </TouchableOpacity>
         </View>
    </View>
  )
}

export default Login;

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    image:{
        flex:0.3,
    },
    blank:{
        flex:0.1,
    },
    inputs:{
        flex:0.3,
        paddingHorizontal: 16,
    },
    button:{
        flex:0.1,
        justifyContent:"center",
        paddingHorizontal:16,
    },
    forgot:{
        flex:0.2,
        flexDirection:"row",
        paddingHorizontal: 20,
        marginTop: 30
    }
})