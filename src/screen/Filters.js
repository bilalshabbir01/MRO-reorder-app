import React, { Component, useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Button, ScrollView, KeyboardAvoidingView, ActivityIndicator } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import DropDownPicker from 'react-native-dropdown-picker';
import { Picker } from '@react-native-picker/picker';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { _editData, _sendEmail } from '../store/middleWare/appMiddleware';
import { connect } from 'react-redux';
import { Linking } from 'react-native';
import { sendEmail } from './send-email';




class Filter extends Component {
    state = {
        qty: "",
        loading: false,
        email: "",
        open: false,
        value: "BOX",
        items: [
            { label: 'BOX', value: 'BOX' },
            { label: 'EA', value: 'EA' },
            { label: 'ROL', value: 'ROL' },
            { label: 'CAS', value: 'CAS' },
            { label: 'PAC', value: 'PAC' }
        ]
    }

    sendEmail = async () => {

        let req = {
            email: this.state.email,
            qty: this.state.qty,
            type: this.state.value,
            description: this.props.route.params.item.description,
            material: this.props.route.params.item.material
        }
        if (parseInt(this.state.qty) > parseInt(this.props.route.params.item.pintStock)) {
            return alert("You have " + this.props.route.params.item.pintStock + " items onhand")
        }

        if (!this.state.email) {
            return alert("Enter email")
        }
        if (this.state.qty < 1) {
            return alert("Enter valid quantity")
        }
        if (!this.state.qty) {
            return alert("Enter quantity")
        }
        this.setState({ loading: true })

        //    let res = await api.loginUser(this.state.userEmail,this.state.userPass)
        let res = await this.props._sendEmail(req)
        if (res === true) {
            this.setState({ loading: false })
            alert("Email sent")
            this.editData()
            this.props.navigation.goBack()
        }
        this.setState({ loading: false })

    }
    editData = async () => {

        let { item } = this.props.route.params
        item.qty = this.state.qty
        item.pintStock = parseInt(item.pintStock) - parseInt(item.qty)

        this.props._editData(item)
    }
    render() {
        console.log(typeof this.state.qty, "type qty")
        console.log(typeof this.props.route.params.item.pintStock, "type uom")
        return (
            <KeyboardAvoidingView behavior="position" style={styles.container}>
                <ScrollView contentContainerStyle={{ minHeight: hp(100) - getStatusBarHeight() - 100, justifyContent: "space-evenly", paddingHorizontal: 20 }}>
                    <View style={{}}>
                        <Text style={{ fontSize: 16 }}>Material ID: {this.props.route.params.item.material}</Text>
                        <Text style={{ fontSize: 16 }}>Description: {this.props.route.params.item.description}</Text>
                        <Text style={{ fontSize: 16 }}>On Hand: {this.props.route.params.item.pintStock}</Text>
                        <Text style={{ fontSize: 16 }}>UOM: {this.props.route.params.item.uom}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', height: 100 }}>
                        <TextInput placeholderTextColor="grey" keyboardType="number-pad" value={this.state.qty} onChangeText={(qty) => this.setState({ qty: qty })} placeholder="Enter Quantity" style={{ borderWidth: 1, width: wp(40), height: 40, borderRadius: 10, paddingHorizontal: 10 }} />

                        <Picker style={{ width: 100 }}
                            selectedValue={this.state.value}
                            onValueChange={val => this.setState({ value: val })}
                        >
                            {
                                this.state.items.map((item, index) => {
                                    return (
                                        <Picker.Item label={item.label} key={index} value={item.label} />

                                    )
                                })
                            }
                        </Picker>

                    </View>
                    <TextInput placeholderTextColor="grey" keyboardType="email-address" autoCapitalize="none" value={this.state.email} onChangeText={(email) => this.setState({ email })} textContentType="emailAddress" style={{ borderWidth: 1, width: "70%", alignSelf: "center", height: 40, paddingHorizontal: 10 }} placeholder="Sent emailto" />


                    <View style={{ justifyContent: "center", alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => this.sendEmail()} style={{ alignItems: 'center', width: 200, height: 40, justifyContent: 'center', backgroundColor: "#F73B59", borderRadius: 10 }}>


                            {
                                this.state.loading ?
                                    <ActivityIndicator size="small" color="white" /> :
                                    <Text style={{ fontSize: 20, color: "white" }}>Place Order</Text>
                            }
                        </TouchableOpacity>

                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        )
    }

}


const mapDispatchToProps = dispatch => {
    return {
        _sendEmail: (req) => dispatch(_sendEmail(req)),
        _editData: (req) => dispatch(_editData(req))
    }
}

export default connect(null, mapDispatchToProps)(Filter)
const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})
