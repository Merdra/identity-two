import { StyleSheet, Text, View } from 'react-native'
import React,  { useState, useEffect } from 'react'
import {BarCodeScanner} from 'expo-barcode-scanner'
import {useNavigation} from "@react-navigation/native"

const QRScanner = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    navigation.navigate("DetailsScreen", {details:JSON.parse(data),});
  };

  return (
    <View style={styles.container}>
      <BarCodeScanner onBarCodeScanned={scanned ? undefined : handleBarCodeScanned} style={StyleSheet.absoluteFillObject} />      
    </View>
  );
};

export default QRScanner

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})