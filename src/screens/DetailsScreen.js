import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import {MaterialCommunityIcons, Feather, Entypo, EvilIcons} from '@expo/vector-icons'

const DetailsScreen = (props) => {
    const {details} = props.route.params.details

  return (
    <View style={styles.container}>
        <View style={styles.blank}></View>

        <View style={styles.contact}>
            <View style={{flex:"20%"}}>
                <Image source={require("../../assets/office.png")} style={{height:60, width:60, borderRadius:30, alignSelf:"left"}} />
            </View>
            <View style={{flex:"80%", paddingHorizontal: "7%"}}>
                <View style={{flex:"50%"}}>
                    <Text style={{fontSize:25}}>{details.name}</Text>
                </View>
                <View style={{flex:"50%"}}>
                    <Text style={{fontSize:15, marginTop:10, color:"grey"}}>{details.role}</Text>
                </View>
            </View>
        </View>
           
        <View style={styles.social}>
            <View>
                <Entypo name='twitter-with-circle' size={26} color="grey"/>
            </View>
            <View style={{paddingLeft:10}}>
                <Entypo name='linkedin-with-circle' size={26} color="grey"/>
            </View>
            
        </View>
            <View style={styles.details}>
                <View style={{flexDirection:"row", marginBottom:15}}>
                    <Feather name='phone' size={17} color="black" />
                    <Text style={{color:"black", paddingLeft:10, fontSize:16}}>{details.phone}</Text>
                </View>
         
                <View style={{flexDirection:"row", marginBottom:15}}>
                    <MaterialCommunityIcons name='email-outline' size={17} color="black" />
                    <Text style={{color:"grey", paddingLeft:10, fontSize:16}}>{details.email}</Text>
                </View>

                <View style={{flexDirection:"row", marginBottom:15}}>
                    <EvilIcons name='location' size={18} color="black" />
                    <Text style={{color:"grey", paddingLeft:10, fontSize:16}}>{details.twitter}</Text>
                </View>
            </View>
     <View style={styles.blanktwo}></View>      
    </View>
  )
}

export default DetailsScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: 20
    },
    blank:{
        flex:0.1,
    },
    contact:{
        flex: 0.1,
        flexDirection:"column",
    },
    social:{
        flex:0.1,
        flexDirection:"row",
        marginTop:20
    },
    details:{
        flex:0.3,
        flexDirection:"column",
    },

    blanktwo:{
        flex:0.4,
    }
})