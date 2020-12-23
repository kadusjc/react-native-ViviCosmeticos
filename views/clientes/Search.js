import { Actions } from 'react-native-router-flux'
import { TextInput, Button, Divider, ScrollView } from 'react-native-paper';
import PhoneInput from 'react-native-phone-input'

import React, { Component } from 'react'
import CustomerService from '../../services/customer-service'
import CustomerItem from './CustomerItem'


import {View, FlatList, StyleSheet, Text} from 'react-native'

export default class Search extends Component<{}> {
  state = {
    isLoading: false,
    phoneNumber: '',
    name: '',
    customers: []    
  }

  setName (name) {
    this.setState({name})
  }

  setPhoneNumber (phoneNumber) {
    this.setState({phoneNumber})
  }

  componentDidMount () {
    return this.renderRefreshControl()
  }

  goToHome () {
    Actions.customerHome()
  }

  loadCustomers () {
    let filter = {}
    if (this.state.name) {
      filter.name = this.state.name 
    }
    if (this.state.phoneNumber) {
      filter.phoneNumber = this.state.phoneNumber 
    }
   
    const customerService = new CustomerService()
    return customerService.search(filter)   
      .then((customers) => {
        this.setState({ isLoading: false })
        this.setState({ customers })
      })     
  }

  renderRefreshControl() {
    this.setState({ isLoading: true })
    this.loadCustomers()
  }

  deleteCustomer (customer) {
    const customerService = new CustomerService()
    return customerService.delete(customer, this.renderRefreshControl)
  }

  renderRow (customer) {
    return <CustomerItem customer={customer} deleteCustomer={this.deleteCustomer(customer)} />
  }

  render() {
    return (
			<View>
        <View style={{flexDirection: 'column', margin: 10, padding: 10}}>
          <TextInput style={{height: 30, marginTop: 10 }} type="text" autoCapitalize="true" placeholder="Nome do Cliente" defaultValue={this.state.name} onChangeText={name => this.setName(name)}/> 
          <PhoneInput style={{height: 30, marginTop: 10 }} textProps={{placeholder:"Número de Telefone"}} initialCountry='br' value={this.state.phoneNumber} onChangePhoneNumber={phoneNumber => this.setPhoneNumber(phoneNumber)}/>            

          <Button style={{marginLeft: 5, width: 130, marginTop: 5}} color="blue" icon="account-search" mode="contained" onPress={() => this.renderRefreshControl()}>
            Pesquisar
          </Button>      
        </View>

        <Divider />            

        <FlatList
          style={{maring: 10, padding: 10}}
          data={this.state.customers}
          renderItem={({item: customer}) => this.renderRow(customer)}
          keyExtractor={(item, index) => item._id}
          onRefresh={() => this.renderRefreshControl()}
          refreshing={this.state.isLoading}
          initialNumToRender={4}
          onEndReachedThreshold={0.7}
        />
        
			</View>
		)
	}

}
