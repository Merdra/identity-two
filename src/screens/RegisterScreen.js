import { StyleSheet, Text, TextInput, View, Image } from 'react-native';
import React from 'react';
import { TouchableOpacity, } from 'react-native';
import {useNavigation} from "@react-navigation/native";

const RegisterScreen = (props) => {
    const navigation = useNavigation()

    const navigateToHomeScreenQRCode = () => {
      navigation.navigate("HomeScreenQRCode")
    }

  return (
    <View style={styles.container}>
         <TouchableOpacity style={styles.image}>
             <Image source={require('../../assets/training-room-design-for-conference-halls.jpg')} style={{height: "100%", width:"100%",}} />
         </TouchableOpacity>
        
         <View style={styles.inputs}>
            <View style={{flexDirection:"row",justifyContent:"space-between", borderBottomWidth:1,borderBottomColor: "gray"}}>
                <Text style={{fontSize: 20,marginVertical: 20, }}>Full Name</Text>
                <TextInput style={{marginBottom:1, fontSize: 20, width: "80%",textAlign:"right"}} placeholder="Joan Shay" placeholderTextColor={'#aaaaaa'} />
            </View>
            
            <View style={{flexDirection:"row",justifyContent:"space-between",borderBottomWidth:1,borderBottomColor: "gray"}}>
                <Text style={{fontSize: 20,marginVertical: 20, }}>Email</Text>
                <TextInput style={{marginBottom:1, fontSize: 20, width: "80%",textAlign:"right"}} placeholder="joan.shay@sparrow.com" placeholderTextColor={'#aaaaaa'} />
            </View>

            <View style={{flexDirection:"row",justifyContent:"space-between", borderBottomWidth:1,borderBottomColor: "gray"}}>
                <Text style={{fontSize: 20,marginVertical: 20, }}>Phone Number</Text>
                <TextInput style={{marginBottom:1, fontSize: 20, width: "80%",textAlign:"center"}}  placeholder="+233 (244)245 190" placeholderTextColor={'#aaaaaa'} />
            </View>

            <View style={{flexDirection:"row",justifyContent:"space-between", borderBottomWidth:1,borderBottomColor: "gray"}}>
                <Text style={{fontSize: 20,marginVertical: 20, }}>Role</Text>
                <TextInput style={{marginBottom:1, fontSize: 20, width: "80%",textAlign:"right"}} placeholder="Director of Marketing" placeholderTextColor={'#aaaaaa'} />
            </View>

            <View style={{flexDirection:"row",justifyContent:"space-between", borderBottomWidth:1,borderBottomColor: "gray"}}>
                <Text style={{fontSize: 20,marginVertical: 20, }}>Twitter</Text>
                <TextInput style={{marginBottom:1, fontSize: 20, width: "80%",textAlign:"right"}} placeholder="@joansays" placeholderTextColor={'#aaaaaa'} />
            </View>

            <View style={{flexDirection:"row",justifyContent:"space-between", borderBottomWidth:1,borderBottomColor: "gray"}}>
                <Text style={{fontSize: 20,marginVertical: 20, }}>LinkedIn</Text>
                <TextInput style={{marginBottom:1, fontSize: 20, width: "80%",textAlign:"right"}} placeholder="/joan.shay" placeholderTextColor={'#aaaaaa'} />
            </View>
         </View>

         <View style={styles.blank}></View>
         <View style={styles.button}>
            <TouchableOpacity style={{backgroundColor:"red", alignSelf:"center",justifyContent:"center", height:"70%", width:"100%", borderRadius:5}} onPress={navigateToHomeScreenQRCode}>
                <Text style={{fontSize: 30, color: "white", textAlign:"center" }}>REGISTER</Text>
            </TouchableOpacity>
         </View>
    </View>
  )
}

export default RegisterScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    image:{
        flex:0.3,
    },
    inputs:{
        flex:0.5,
        paddingHorizontal: 16,
    },
    blank:{
        flex: 0.1
    },
    button:{
        flex:0.1,
        justifyContent:"center",
        paddingHorizontal:16,
    },
})
