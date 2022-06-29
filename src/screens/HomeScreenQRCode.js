import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import {useNavigation} from "@react-navigation/native"
import QRGenerator from '../components/QRGenerator'

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
            <View style={styles.qrcode}>
                <QRGenerator />
            </View>
            <View style={styles.contact}>
                <View style={{flex:0.2}}>
                    <Image source={require("../../assets/office.png")} style={{height:60, width:60, borderRadius:30, alignSelf:"center",}} />
                </View>
                <View style={{flex:0.8, paddingHorizontal: 10}}>
                    <View style={{flex:0.5}}>
                        <Text style={{fontSize:25}}>Joan Shay</Text>
                    </View>
                    <View style={{flex:0.5}}>
                        <Text style={{fontSize:20,color:"grey", marginTop:5}}>Head of Marketing</Text>
                    </View>
                </View>
            </View>
            <View style={styles.question}>
                <Text style={{fontSize:20, }}>Want to add a new connection?</Text>
                <TouchableOpacity onPress={navigateToHomeScreenScanQRCode} style={{color:"red", paddingHorizontal:15, marginHorizontal:20, borderColor:"red", borderWidth:1, }}><Text>Scan QR</Text></TouchableOpacity>
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
        flex:0.1,
        flexDirection:"column",
        marginTop:20,
    },
    qrcode:{
        flex:0.7, 
    },
    contact:{
        flex: 0.1,
        flexDirection:"row",
        borderBottomColor:"gray",
        borderBottomWidth:1,
    },
    question:{
        flex:0.1,
        flexDirection:"row",
        marginTop:15,
        alignItems:"baseline",
        marginHorizontal:"10%"
    }
})