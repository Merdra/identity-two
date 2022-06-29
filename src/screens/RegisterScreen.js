import { StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView,  } from 'react-native';
import React from 'react';
import {useNavigation} from "@react-navigation/native";
import ImagePicker from '../components/ImagePicker';

const RegisterScreen = (props) => {
    const navigation = useNavigation()

    const navigateToHomeScreenQRCode = () => {
      navigation.navigate("HomeScreenQRCode")
    }

  return (
    <View style={styles.container}>
         <TouchableOpacity style={styles.image}>
             <ImagePicker />
         </TouchableOpacity>
       <ScrollView behavior='position'>
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
         
         </ScrollView>
         <View style={styles.button}>
            <TouchableOpacity onPress={navigateToHomeScreenQRCode} style={{backgroundColor:"red", alignSelf:"center",justifyContent:"center", height:"70%", width:"100%", borderRadius:5}}>
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
        flex:0.9,
        backgroundColor:"lightblue"
    },
    inputs:{
        flex:0.5,
        paddingHorizontal: 16,
    },
    button:{
        flex:0.2,
        justifyContent:"center",
        paddingHorizontal:16,
    },
})
