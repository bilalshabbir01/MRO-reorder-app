import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Button, ScrollView } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { connect } from 'react-redux';
import FilterScreenData from '../component/FilterScreenData';

export class FilterScreen extends Component {
    state = {
        alldata: []
    }
    componentDidMount() {
        // Object.keys(this.props.all).map(item => (
        //     console.log(item.description, "sdfgrthyjtr")
        // ))
        // let filtered = this.props.all.map((item,index) => {
        //     Object.keys(item)
        // })
        let data = this.props.all.filter(f => f.description.includes("Filter"))
        this.setState({ alldata: data })
        //  console.log(data, "sfrgthgrge")


    }
    render() {
        return (
            <View style={{  marginBottom:40 }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1.5, justifyContent: 'center', borderWidth: 1, alignItems: 'center' }}>
                        <Text>Material ID</Text>
                    </View>
                    <View style={{ flex: 3, justifyContent: 'center', borderWidth: 1, alignItems: 'center' }}>
                        <Text>Description</Text>
                    </View>
                    <View style={{ flex: 1.3, justifyContent: 'center', borderWidth: 1, alignItems: 'center' }}>
                        <Text>On Hand</Text>
                    </View>
                    <View style={{ flex: 1.2, justifyContent: 'center', borderWidth: 1, alignItems: 'center' }}>
                        <Text>QTY requested</Text>
                    </View>
                </View>
                {/* <FilterScreenData /> */}
                <ScrollView>
                    {this.state.alldata.map((item, index) =>
                        <FilterScreenData key={index} data={item} />
                    )}
                </ScrollView>



            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        all: state.appReducer.allData
    }
}

export default connect(mapStateToProps, null)(FilterScreen)
