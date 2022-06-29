import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, {useState} from 'react'
import * as ExpoImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';


const ImagePicker = () => {
    const [image, setImage] = useState(null);

    const pickImage = async () => {
        let result = await ExpoImagePicker.launchImageLibraryAsync({
          mediaTypes: ExpoImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.cancelled) {
          setImage(result.uri);
        };
        
        if (image === null) {
          return <View style={{flexDirection:"column", height:"100%", width:"100%", position:"absolute", alignContent:"center",alignItems:"center", justifyContent:"center"}}>
          <Ionicons name="person-outline" size={40} color="red" />
          <Text style={{fontSize:20, color:"red", marginTop:10}}>ADD A PROFILE PICTURE</Text>
    </View>
        }
        else {return <Image source={{uri: image}} style={{width: 200, height: 200}} />}
      };

  return (
    <TouchableOpacity onPress={pickImage} styles={styles.container}>
        <Image style={{height:"100%", width:"100%"}} source={{uri: image}} />
    </TouchableOpacity>
  )
}

export default ImagePicker

const styles = StyleSheet.create({
    container: {
        height: 200,
        width: "100%",
}
})