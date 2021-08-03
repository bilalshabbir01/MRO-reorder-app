import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text, TouchableOpacity, TextInput, Button } from 'react-native';

export default ({ navigation, data, onHandPress }) => {

 
 
    return (

        <TouchableOpacity onPress={() => navigation.push("Filters", { item: data })} style={styles.listBox}>
            <View style={{ flex: 1.5, justifyContent: 'center', alignItems: 'center', }}>
                <Text>{data.material}</Text>
            </View>
            <View style={{ flex: 3, justifyContent: 'center', alignItems: 'flex-start' }}>
                <Text>{data.description}</Text>
            </View>
            <View style={{ flex: 1.3, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity onPress={onHandPress} style={{ width: "100%", justifyContent: 'center', alignItems: 'center' }}>
                    <Text>{data.pintStock}</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>{data.uom}</Text>
            </View>
            <View style={{ flex: 1.2, justifyContent: 'center', alignItems: 'center' }}>
                <Text>{data?.qty || "0"}</Text>
            </View>
        </TouchableOpacity>

    )

}

const styles = StyleSheet.create({
    listBox: {
        flexDirection: 'row', height: 40, marginTop: 10,
        marginHorizontal: 50,
        alignSelf: 'center',
        backgroundColor: "#fff",
        // borderWidth:1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.1,
        shadowRadius: 5,

        elevation: 11,
        width: "100%"

    }

});



// import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';


// export default class ExampleOne extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             tableHead: ['Material ID', 'Description', 'On Hand', 'Qty requested'],
//             tableData: [
//                 ['1065966', 'Filter, 142MM: .65um-50/pk(DAWP14250)', '3', '4'],
//                 ['a', 'b', 'c', 'd'],
//                 ['1', '2', '3', '456\n789'],
//                 ['a', 'b', 'c', 'd']
//             ]
//         }
//     }

//     render() {
//         const state = this.state;
//         return (
//             <ScrollView>
//                 <View style={styles.container}>

//                     <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
//                         <Row data={state.tableHead} flexArr={[1.5, 3, 1, 1.3]} style={styles.head} textStyle={styles.text} />
//                         <Rows data={state.tableData} flexArr={[1.5, 3, 1, 1.3]} textStyle={styles.text} />
//                     </Table>
//                 </View>
//             </ScrollView>

//         )
//     }
// }

// const styles = StyleSheet.create({
//     container: { flex: 1, paddingHorizontal: 2, backgroundColor: '#fff' },
//     head: { height: 40, backgroundColor: '#f1f8ff', textAlign: 'center' },
// });