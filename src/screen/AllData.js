import React, { Component } from 'react'
import { FlatList, View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Button, ActivityIndicator } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import ListComp from '../component/ListComp'
import { connect } from 'react-redux';
import { _editData, _getData } from '../store/middleWare/appMiddleware';
import Modal from 'react-native-modal';
import { TextInput } from 'react-native-gesture-handler';


export class AllData extends Component {
    state = {
        loading: false,
        isModalVisible: false,
        onActive: "",
        pintStock: ""


    }

    async componentDidMount() {
        this.setState({ loading: true })

        await this.props._getData()
        this._unsubscribe = this.props.navigation.addListener("focus", async () => {
            this.props._getData()
        });
        this.setState({ loading: false })
    }
    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible })


    };

    editOnhand = async () => {
        let item = this.state.onActive
        item.pintStock = this.state.pintStock

        await this.props._editData(item)
        this.setState({ loading: true })

        this.toggleModal()
        this.setState({ pintStock: "" })

        // this.setState({ isModalVisible: !this.state.isModalVisible })
    }

    render() {
        // console.log(this.state.pintStock, "sdfgthy")
        return (
            <View style={styles.container}>
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
                    <View style={{ flex: 1, justifyContent: 'center', borderWidth: 1, alignItems: 'center' }}>
                        <Text>UOM</Text>
                    </View>
                    <View style={{ flex: 1.2, justifyContent: 'center', borderWidth: 1, alignItems: 'center' }}>
                        <Text>QTY requested</Text>
                    </View>
                </View>
                {this.state.loading ? <ActivityIndicator size="small" color="#0000ff" /> :
                    <ScrollView>

                        {this.props.all.map((item, index) => (

                            <ListComp onHandPress={() => {
                                this.setState({
                                    onActive: item
                                })
                                this.toggleModal()
                            }} key={index} data={item} navigation={this.props.navigation} />
                        ))}
                    </ScrollView>
                }
                <Modal isVisible={this.state.isModalVisible}>
                    <View style={{
                        height: 200, backgroundColor: "white",
                        paddingTop: getStatusBarHeight(), justifyContent: 'space-evenly',
                        alignItems: 'center', borderRadius: 24
                    }}>
                        <TextInput autoFocus value={this.state.pintStock} onChangeText={(val) => this.setState({ pintStock: val })} keyboardType="number-pad" style={{ borderWidth: 1, width: "70%", height: 40, paddingHorizontal: 20 }} placeholder="Change onHand" />
                        <TouchableOpacity onPress={() => this.editOnhand()} style={{ alignItems: 'center', width: 200, height: 40, justifyContent: 'space-around', backgroundColor: "#F73B59", borderRadius: 10 }}>


                            {
                                this.state.loading ?
                                    <ActivityIndicator size="small" color="white" /> :
                                    <Text style={{ fontSize: 20, color: "white" }}>Change Onhand</Text>
                            }
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.toggleModal()} style={{
                            position: 'absolute', top: -10, right: 0, backgroundColor: 'grey',
                            width: 30, height: 30, justifyContent: 'center', alignItems: "center", borderRadius: 24, borderWidth: 1
                        }}>
                            <Text style={{ fontSize: 22, color: "white" }}>x</Text>
                        </TouchableOpacity>
                        {/* <Button title="X" onPress={() => this.toggleModal()} /> */}
                    </View>
                </Modal>
                {/* <Button title="Show modal" onPress={() => this.toggleModal()} /> */}
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        all: state.appReducer.allData
    }
}
const mapDispatchToProps = dispatch => {
    return {
        _getData: () => dispatch(_getData()),
        _editData: (req) => dispatch(_editData(req))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllData)
const styles = StyleSheet.create({
    container: {
        flex: 1,

        marginBottom: 20

    }
})
