import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



const Splash = (props) => {
    return (
        <View style={styles.container}>


            <Image style={{ borderWidth: 3, borderRadius: 24, borderColor: 'white' }} source={require("../../assets/mro.jpeg")} />
            <TouchableOpacity style={styles.button} onPress={() => props.navigation.push("MRO Items")}>
                <Text style={styles.buttontext}>Order MRO Items</Text>
            </TouchableOpacity>
            

        </View>
    );
}

export default Splash;


const styles = StyleSheet.create({
    container: {
        paddingTop: getStatusBarHeight(),
        flex: 1,
        backgroundColor: "#F73B59",
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    buttontext: {
        fontSize: wp(6),
        color: 'black',
        fontWeight: "600"
    },
    button:{
        backgroundColor:'white',
        width:wp(80),
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
        borderRadius:20,
        height:40
    }
})