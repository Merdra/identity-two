import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import {useNavigation} from "@react-navigation/native"

const HomeScreenQRCode = (props) => {
    const navigation = useNavigation()

    const navigateToHomeScreenScanQRCode = () => {
      navigation.navigate("HomeScreenScanQRCode")
    }

    return (
    <View style={styles.container}>
            <View></View>
            <View style={styles.intro}>
                <Text style={{fontSize:30, paddingHorizontal:40}}>Exchange Contact Information</Text>
                <Text style={{fontSize:20, paddingHorizontal:40}}>Scan this QR below to share your contacts</Text>
            </View>
            <View style={styles.qrcode}></View>
            <View style={styles.contact}>
                <View style={{flex:"20%"}}>
                    <Image source={require("../../assets/office.png")} style={{height:70, width:70, borderRadius:35, alignSelf:"center"}} />
                </View>
                <View style={{flex:"80%", paddingHorizontal: 10}}>
                    <View style={{flex:"50%"}}>
                        <Text style={{fontSize:25}}>Joan Shay</Text>
                    </View>
                    <View style={{flex:"50%"}}>
                        <Text style={{fontSize:15, marginTop:5}}>Head of Marketing</Text>
                    </View>
                </View>
            </View>
            <View style={styles.question}>
                <Text style={{fontSize:15, }}>Want to add a new connection?</Text>
                <TouchableOpacity style={{color:"red", paddingHorizontal:15, marginHorizontal:20, borderColor:"red", borderWidth:1, }} onPress={navigateToHomeScreenScanQRCode}> Scan QR</TouchableOpacity>
            </View>
    </View>
  )
}

export default HomeScreenQRCode;

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    intro:{
        flex:0.2,
        flexDirection:"column",
        marginTop:20
    },
    qrcode:{
        flex:0.5,
        backgroundColor:"lightgreen",
    },
    contact:{
        flex: 0.2,
        flexDirection:"row",
        borderBottomColor:"gray",
        borderBottomWidth:1,
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