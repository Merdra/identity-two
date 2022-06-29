import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import QRCode from "react-native-qrcode-svg"   // for QR code
 

const QRGenerator = () => {
    const details = {
        name: "Joan Shay",
        email: "joanshay@email.com",
        phone: "123456789",
        role: "Head of Marketing",
        address: "123 Main St, New York, NY 10001",
        company: "ABC Company",
        website: "www.abc.com",
        linkedin: "@joanshay",
        twitter: "/joanshay",
    }

  return (
    <View style={styles.container}>
        <QRCode value={JSON.stringify(details)} size={250} />
    </View>
  )
}

export default QRGenerator

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent:"center",
        justifyContent:"center",
        alignItems:"center",      
    }
})