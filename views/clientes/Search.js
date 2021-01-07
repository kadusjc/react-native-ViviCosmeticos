import React, { Component } from 'react'
import { View, FlatList, Alert } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { TextInput, Button, Divider } from 'react-native-paper'
import PhoneInput from 'react-native-phone-input'

import CustomerService from '../../services/customer-service'
import CustomerItem from './CustomerItem'

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
    if (this.state.name) { filter.name = this.state.name }
    if (this.state.phoneNumber) { filter.phoneNumber = this.state.phoneNumber  }
   
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

  updateCustomer () {
    const customer = this
    Actions.customerForm({customer})
  }

  deleteCustomer (customer) {
    const customerService = new CustomerService()
    return customerService.delete(customer)
  }

  confirmDeleteCustomer () {
    const { ctx, customer } = this
    const opts = { cancelable: false }
    const buttons = [
      { text: 'Sim', onPress: () => ctx.deleteCustomer(customer), style: 'success' }, 
      { text: 'Não', style: 'cancel' }    
    ]
    Alert.alert('Excluir', 'Deseja realmente excluir este cliente?', buttons, opts)
  }
  
  renderRow (customer) {
    const ctx = {ctx: this, customer}
    return <CustomerItem style={{paddingBottom: 20}} customer={customer} deleteCustomer={this.confirmDeleteCustomer.bind(ctx)} updateCustomer={this.updateCustomer.bind(customer)} />
  }

  render() {
    return (
			<View style={{flex: 1}}>
        <View style={{flexDirection: 'column', margin: 10, padding: 10}}>
          <TextInput style={{height: 30, marginTop: 10 }} type="text" placeholder="Nome do Cliente" defaultValue={this.state.name} onChangeText={name => this.setName(name)}/> 
          <PhoneInput style={{height: 30, marginTop: 10 }} textProps={{placeholder:"Número de Telefone"}} initialCountry='br' value={this.state.phoneNumber} onChangePhoneNumber={phoneNumber => this.setPhoneNumber(phoneNumber)}/>            

          <Button style={{marginLeft: 5, width: 130, marginTop: 5}} color="blue" icon="account-search" mode="contained" onPress={() => this.renderRefreshControl()}>
            Pesquisar
          </Button>      
        </View>

        <Divider style={{paddingBottom: 5}}/>            

         <FlatList
            style={{marging: 5, padding: 5}}
            data={this.state.customers}
            renderItem={({item: customer}) => this.renderRow(customer)}
            keyExtractor={(item) => item._id}
            onRefresh={() => this.renderRefreshControl()}
            refreshing={this.state.isLoading}          
          />
        
			</View>
		)
	}

}
