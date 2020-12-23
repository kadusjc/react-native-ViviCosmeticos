import { Actions } from 'react-native-router-flux'
import { TextInput, Button, Divider } from 'react-native-paper';
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
    return this.loadCustomers()
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

  renderRow (customer) {
    return <CustomerItem name={customer.name} phoneNumber={customer.phoneNumber} />
  }

  render() {
    return (
			<View>
        <View style={{flexDirection: 'column'}}>
          <PhoneInput style={{height: 30, marginTop: 10 }} textProps={{placeholder:"Número de Telefone"}} initialCountry='br' value={this.state.phoneNumber} onChangePhoneNumber={phoneNumber => this.setPhoneNumber(phoneNumber)}/>            
          <TextInput style={{height: 30, marginTop: 10 }} type="text" autoCapitalize="true" placeholder="Nome do Cliente" defaultValue={this.state.name} onChangeText={name => this.setName(name)}/> 
          <Button style={{marginLeft: 5, width: 130, marginTop: 5}} color="blue" icon="account-search" mode="contained" onPress={() => this.renderRefreshControl()}>
            Pesquisar
          </Button>      
        </View>

        <Divider />            
          
				<FlatList
					data={this.state.customers}
					renderItem={({item: customer}) => this.renderRow(customer)}
					keyExtractor={(item, index) => item.phoneNumber}
					onRefresh={() => this.renderRefreshControl()}
					refreshing={this.state.isLoading}
					initialNumToRender={8}
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingTop: 24
  },
  list: {
    flex: 1,
    flexDirection: 'row'
  },
  listContent: {
    flex: 1,
    flexDirection: 'column'
  },
  row: {
    flex: 1,
    fontSize: 24,
    padding: 42,
    borderWidth: 1,
    borderColor: '#DDDDDD'
  },
  sectionDivider: {
    padding: 8,
    backgroundColor: '#EEEEEE',
    alignItems: 'center'
  },
  headingText: {
    flex: 1,
    fontSize: 24,
    alignSelf: 'center'
  }
})
