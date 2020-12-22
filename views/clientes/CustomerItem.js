import React, { Component } from 'react'
import { StyleSheet, View, Text} from 'react-native'
import { Icon } from 'react-native-elements'

const ICON_SIZE = 19

export default class CustomerItem extends Component<{}> {
  constructor () {
    super()
  }

  render () {
    return (
      <View style={styles.customerItem}>
        <View style={styles.info}>
          <Icon name='g-translate' color='#00aced' />
          <Text style={styles.name}> {this.props.name}</Text>
        </View>  
        <View style={styles.info}>
          <Icon name='g-translate' color='#00aced' />
          <Text style={styles.phoneNumber}>{this.props.phoneNumber}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  customerItem: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderBottomColor: '#AAAAAA',
    borderBottomWidth: 2,
    padding: 5
  },
  name: {
    flex: 3,
    alignItems: 'flex-end',
    flexDirection: 'column',
    alignSelf: 'center',
    fontSize: 15,
    color: '#000000',
    fontWeight: 'bold',
    padding: 20
  },
  phoneNumber: {
    paddingLeft: 10,
    fontSize: 18,
    color: '#000000',
    fontWeight: 'bold',
  },
  info: {
    flexDirection: 'column',
    flex: 1
  }
})
