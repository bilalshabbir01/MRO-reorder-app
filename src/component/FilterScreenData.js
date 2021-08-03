import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import { getStatusBarHeight } from 'react-native-status-bar-height';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function FilterScreenData(props) {
    console.log(props.data.pintStock, "sdfgthyjuyhtgrfdsgthyjuyht")
    return (
        <TouchableOpacity  style={styles.listBox}>
                <View style={{flex:1.5, justifyContent:'center', alignItems:'center'}}>
                    <Text>{props.data.material}</Text>
                </View>
                <View style={{flex:3, justifyContent:'center', alignItems:'flex-start'}}>
                    <Text>{props.data.description}</Text>
                </View>
                <View style={{flex:1.3, justifyContent:'center', alignItems:'center'}}>
                    <Text>{props.data.pintStock}</Text>
                </View>
                <View style={{flex:1.2, justifyContent:'center', alignItems:'center'}}>
                    <Text>{props.data.qty}</Text>
                </View>
                
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listBox: {
        flexDirection: 'row', height: 40, marginTop: 10,
        marginHorizontal:50,
        alignSelf:'center',
        backgroundColor:"#fff",
        // borderWidth:1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.1,
        shadowRadius: 5,

        elevation: 11,
        width:"100%"

    }

});
