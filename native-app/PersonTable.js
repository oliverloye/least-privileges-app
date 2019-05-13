import React, { Component } from 'react';
import { Table, Row, Rows } from 'react-native-table-component';
import { Text, View, Platform, TouchableOpacity, StyleSheet, Button, WebView } from 'react-native';
import apiFacade from './apiFacade'



class PersonTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
             
            tableHead: ["Name","Gender","Height"], 
            tableBody: []
        }
        
    }
 
    async componentDidMount() {
        
        let data = await apiFacade.fetchAllPersons()
        let persons = data.results

        let personArr = [];
        for (person of persons) {
            personArr.push([person.name, person.gender, person.height+" cm"])
        }
        this.setState({ tableBody: personArr})
     }



    render() {
        return (
            <View>
                <Table>
                    <Row data={this.state.tableHead}/> 
                    <Rows data={this.state.tableBody}/>
                </Table>
                
            </View>
        )
    }
}

export default PersonTable;     