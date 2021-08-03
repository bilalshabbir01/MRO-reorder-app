import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export class SecondScreen extends Component {
    render() {
        return (
            <View style={styles.container}>


                <Image style={{ borderWidth: 4, borderRadius: 24, borderColor: 'white' }} source={require("../../assets/mro.jpeg")} />
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.push("Filter Items")} >
                        <Text style={styles.buttontext}>Filter</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.push("Lab Equipment")} >
                        <Text style={styles.buttontext}>Lab equip</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.push("PPE")} >
                        <Text style={styles.buttontext}>PPE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.push("All Data")} >
                        <Text style={styles.buttontext}>All</Text>
                    </TouchableOpacity>
                </View>

                

            </View>
        )
    }
}

export default SecondScreen

const styles = StyleSheet.create({
    container: {
        paddingTop: getStatusBarHeight(),
        flex: 1,
        backgroundColor: "#F73B59",
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    buttontext: {
        fontSize: wp(5),
        color: 'black',
        fontWeight:"600"
    },
    button:{
        backgroundColor:'white',
        width:wp(50),
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
        borderRadius:20,
        height:40
    }
})