import { Actions } from 'react-native-router-flux'
import React, { Component } from 'react'
import CustomerService from '../../services/customer-service'
import CustomerItem from './CustomerItem'

import {View, FlatList, StyleSheet, Text} from 'react-native'

export default class Search extends Component<{}> {
  state = {
    isLoading: false,
    customers: []    
  }

  componentDidMount () {
    return this.loadCustomers()
  }

  goToHome () {
    Actions.customerHome()
  }

  loadCustomers () {
   const customerService = new CustomerService()
   return customerService.search({})   
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
