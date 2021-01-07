import React, { useState, useEffect } from 'react';
import {Picker} from '@react-native-picker/picker'
import { ScrollView, Alert } from 'react-native'
import { TextInput, Button, Checkbox, Text } from 'react-native-paper';

import ProductsService from '../../services/products-service'

const Form = (props = {}) => {
    const [category, setCategory] = useState('')
    const [brand, setBrand] = useState('AVON')    
    const [name, setName] = useState('')
    const [volume, setVolume] = useState('')
    const [measureUnit, setMeasureUnit] = useState('ml')
    const [_id, set_Id] = useState(null)
    
    // Similar ao componentDidMount e componentDidUpdate:
    useEffect(() =>  { _loadProductForUpdate() }, [])
    
    const _loadProductForUpdate = () => {
        if (props.product) fillProductForm(props.product)                    
    }
    
    const fillProductForm = (product) => {
        set_Id(product._id)
        setBrand(product.brand)
        setCategory(product.category)
        setName(product.name)
        setMeasureUnit(product.measureUnit)
        setVolume(product.volume)
    }
    
    const saveProduct = () => {
      
      if (!name || !brand || !category) {
        Alert.alert('Campos Obrigatórios', 'Forneça o Nome, Marca e Categoria do Produto para um novo cadastro',  [{ text: "OK", style: "cancel" }])
        return 
      }

      if (!volume || !measureUnit) {
        Alert.alert('Campos Obrigatórios', 'Forneça o Volume do Produto com sua unidade de medida para um novo cadastro',  [{ text: "OK", style: "cancel" }])
        return 
      }

      const product = { brand, category, name, volume, measureUnit, _id }   
      const productService = new ProductsService()
      return productService.saveOrUpdate(product)   
    }
    
    return (
        <ScrollView style={{margin: 10, padding: 10}}>            
            
            <Picker selectedValue={brand} style={{height: 50, width: 200}} placeholder="Marca do Produto"
                onValueChange={(itemValue, itemIndex) => setBrand(itemValue)}>                
                <Picker.Item label="AVON" value="AVON" />
                <Picker.Item label="BOTICÁRIO" value="BOTICÁRIO" />
                <Picker.Item label="EUDORA" value="EUDORA" />
                <Picker.Item label="NATURA" value="NATURA" />
            </Picker>

            <TextInput style={{height: 30, marginTop: 10 }} type="text" placeholder="Categoria do Produto" value={category} onChangeText={category => setCategory(category)}/> 
            <TextInput style={{height: 30, marginTop: 10 }} type="text" placeholder="Nome do Produto" value={name} onChangeText={name => setName(name)}/> 
            <TextInput style={{height: 30, marginTop: 10 }} returnKeyType={'next'} keyboardType={'phone-pad'} placeholder="Volume do Produto" value={volume} onChangeText={volume => setVolume(volume)}/> 

            <Picker selectedValue={measureUnit} style={{height: 50, width: 200}} placeholder="Unidade de Medida do Produto"
                onValueChange={(itemValue, itemIndex) => setMeasureUnit(itemValue)}>
                <Picker.Item label="Kilogramas" value="kg" />
                <Picker.Item label="Gramas" value="g" />
                <Picker.Item label="Miligramas" value="mg" />
                <Picker.Item label="Litros" value="l" />
                <Picker.Item label="Mililitros" value="ml" />
            </Picker>
            <Button style={{marginLeft: 5, width: 100, marginTop: 10, alignItems: 'center'}} color="blue" icon="account-plus" mode="contained" onPress={() => saveProduct()}>
               Salvar
            </Button>            
        </ScrollView>    
    )
}

export default Form