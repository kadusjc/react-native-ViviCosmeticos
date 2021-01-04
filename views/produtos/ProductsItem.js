import _ from 'lodash'
import React, { Component } from 'react'
import { StyleSheet, View, Text} from 'react-native'
import { Button } from 'react-native-paper'
import { Icon } from 'react-native-elements'

const ICON_SIZE = 10

export default class ProductsItem extends Component<{}> {
  constructor () {
    super()
  }

  render () {
    return (
      <View style={styles.productItem}>
        <View style={styles.info}>          
          <Icon name='factory' type='font-awesome'  color='#D445D9' />
          <Text style={styles.name}>{this.props.product.brand} ddd</Text>          
        </View>  
        <View style={styles.info}>          
          <Icon name='tag' type="font-awesome" color='#D445D9' />
          <Text style={styles.name}>{this.props.product.category} </Text>          
        </View>  
        <View style={styles.info}>          
          <Text style={styles.name}>{this.props.product.name} {this.props.product.volume} {this.props.product.measureUnit}</Text>          
        </View>  
        <View style={styles.info}>  
          <Button style={styles.roundButton} color="pink" icon="account-plus" mode="contained" onPress={this.props.updateProduct}> 
            editar
          </Button>                 
          <Button style={styles.roundButton} color="pink" icon="database-remove" mode="contained" onPress={this.props.deleteProduct}>
            apagar
          </Button>                      
        </View>  
      </View>
    )
  }
}

const styles = StyleSheet.create({
  productItem: {
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
    color: '#D445D9',
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
