import _ from 'lodash'
import React, { Component } from 'react'
import { StyleSheet, View, Text} from 'react-native'
import { Button } from 'react-native-paper'
import { Icon } from 'react-native-elements'

const ICON_SIZE = 19

export default class CustomerItem extends Component<{}> {
  constructor () {
    super()
  }

  render () {
    const allPreferences = []
    const customerPreferences = _.get(this.props, 'customer.preferences', [])
    customerPreferences.map((pref, index) => {
      allPreferences.push(<Icon name='check-circle' color='#00aced'></Icon>)
      allPreferences.push(<Text style={styles.preferences}> {pref} </Text>)
    })
    return (
      <View style={styles.customerItem}>
        <View style={styles.info}>          
          <Icon name='person' color='#00aced' />
          <Text style={styles.name}>{this.props.customer.name}</Text>          
        </View>  
        <View style={styles.info}>
          <Icon name='local-phone' color='#00aced'/>
          <Text style={styles.phoneNumber}>{this.props.customer.phoneNumber}</Text>         
        </View>
        <View style={styles.info}>
          { allPreferences }                    
        </View>
        <View style={styles.info}>  
          <Button style={styles.roundButton} color="blue" icon="account-plus" mode="contained" onPress={this.props.updateCustomer}> 
            editar
          </Button>                 
          <Button style={styles.roundButton} color="red" icon="database-remove" mode="contained" onPress={this.props.deleteCustomer}>
            apagar
          </Button>                      
        </View>  
      </View>
    )
  }
}

const styles = StyleSheet.create({
  customerItem: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    borderBottomColor: '#AAAAAA',
    borderBottomWidth: 2,
    padding: 5
  },
  name: {
    flex: 3,
    paddingLeft: 5,
    alignItems: 'flex-end',
    flexDirection: 'column',
    alignSelf: 'center',
    fontSize: 15,
    color: '#000000',
    fontWeight: 'bold'    
  },
  phoneNumber: {
    paddingLeft: 5,
    flex: 3,
    alignItems: 'flex-end',
    fontSize: 18,
    color: '#000000',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  info: {
    flexDirection: 'row',
    flex: 1,
    margin: 2,
    padding: 5    
  },
  preferences: {
    paddingLeft: 0,
    margin: 3,
    alignItems: 'flex-end',
    fontSize: 14,
    color: '#00aced',
    fontWeight: 'bold',
    textTransform: 'capitalize',
    alignSelf: 'center',
  },
  roundButton: {
    borderWidth: 1,
    margin: 5,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    textTransform: 'lowercase',
    width: 120,
    height: 40,
    margin: 2,
    fontWeight: 'bold',
    fontSize: 1,
    borderRadius: 80
  }
})
