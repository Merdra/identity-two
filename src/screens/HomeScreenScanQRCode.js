import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import {useNavigation} from "@react-navigation/native"

const HomeScreenScanQRCode = () => {
    const navigation = useNavigation()

    const navigateToHomeScreenQRCode = () => {
      navigation.navigate("HomeScreenQRCode")
    }

  return (
    <View style={styles.container}>
            <View style={styles.scan}></View>

            <View style={styles.question}>
                <Text style={{fontSize:15, }}>Want to share your contact?</Text>
                <TouchableOpacity style={{color:"red", paddingHorizontal:15, marginHorizontal:20, borderColor:"red", borderWidth:1, }} onPress={navigateToHomeScreenQRCode}> Send QR</TouchableOpacity>
            </View>
    </View>
  )
}

export default HomeScreenScanQRCode;

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    scan:{
        flex:0.9,
        backgroundColor:'lightblue'
    },
    question:{
        flex:0.1,
        flexDirection:"row",
        marginTop:15,
        paddingHorizontal:20,
        alignItems:"baseline",
        marginHorizontal:"20%"
    }
})