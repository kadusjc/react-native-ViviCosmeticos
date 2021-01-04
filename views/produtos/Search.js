import React, { Component } from 'react'
import { View, FlatList, Alert } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { TextInput, Button, Divider } from 'react-native-paper'

import ProductService from '../../services/products-service'
import ProductsItem from './ProductsItem'

export default class Search extends Component<{}> {
  state = {
    isLoading: false,
    category: '',
    name: '',
    brand: '',
    products: []
  }

  setName (name) {
    this.setState({name})
  }

  setCategory (category) {
    this.setState({category})
  }

  setBrand (brand) {
    this.setState({brand})
  }

  componentDidMount () {
    return this.renderRefreshControl()
  }

  goToHome () {
    Actions.productHome()
  }

  loadProducts () {
    let filter = {}
    if (this.state.name) { filter.name = this.state.name }
    if (this.state.category) { filter.category = this.state.category }
    if (this.state.brand) { filter.brand = this.state.brand }
   
    const productsService = new ProductService()
    return productsService.search(filter)   
      .then((products) => {
        this.setState({ isLoading: false })
        this.setState({ products })
      })     
  }

  renderRefreshControl() {
    this.setState({ isLoading: true })
    this.loadProducts()
  }

  updateProduct () {
    const product = this
    Actions.productForm({product})
  }

  deleteProduct (product) {
    const productsService = new ProductService()
    return productsService.delete(product)
  }

  confirmDeleteProduct () {
    const { ctx, product } = this
    const opts = { cancelable: false }
    const buttons = [
      { text: 'Sim', onPress: () => ctx.deleteProduct(product), style: 'success' }, 
      { text: 'Não', style: 'cancel' }    
    ]
    Alert.alert('Excluir', 'Deseja realmente excluir este produto?', buttons, opts)
  }
  
  renderRow (product) {
    const ctx = {ctx: this, product}
    return <ProductsItem style={{paddingBottom: 20}} product={product} deleteProduct={this.confirmDeleteProduct.bind(ctx)} updateProduct={this.updateProduct.bind(product)} />
  }

  render() {
    return (
			<View style={{flex: 1}}>
        <View style={{flexDirection: 'column', margin: 10, padding: 10}}>
          <TextInput style={{height: 30, marginTop: 10 }} type="text" autoCapitalize="true" placeholder="Marca do Produto" defaultValue={this.state.brand} onChangeText={brand => this.setBrand(brand)}/> 
          <TextInput style={{height: 30, marginTop: 10 }} type="text" autoCapitalize="true" placeholder="Categoria do Produto" defaultValue={this.state.category} onChangeText={category => this.setCategory(category)}/> 
          <TextInput style={{height: 30, marginTop: 10 }} type="text" autoCapitalize="true" placeholder="Nome do Produto" defaultValue={this.state.name} onChangeText={name => this.setName(name)}/> 
          
          <Button style={{marginLeft: 5, width: 130, marginTop: 5}} color="pink" icon="account-search" mode="contained" onPress={() => this.renderRefreshControl()}>
            Pesquisar
          </Button>      
        </View>

        <Divider style={{paddingBottom: 5}}/>            

         <FlatList
            style={{marging: 5, padding: 5}}
            data={this.state.products}
            renderItem={({item: product}) => this.renderRow(product)}
            keyExtractor={(item) => item._id}
            onRefresh={() => this.renderRefreshControl()}
            refreshing={this.state.isLoading}          
          />
        
			</View>
		)
	}

}
