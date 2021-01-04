import React, { useState, useEffect } from 'react';

import { ScrollView, Alert } from 'react-native'
import { TextInput, Button, Checkbox, Text } from 'react-native-paper';
import PhoneInput from 'react-native-phone-input'

import CustomerService from '../../services/customer-service'

const Form = (props = {}) => {
    console.log('PROPS ', props)
    const [phoneNumber, setPhoneNumber] = useState('')
    const [name, setName] = useState('')
    const [_id, set_Id] = useState(null)
    
    const [avon, setAvon] = useState(false)
    const [boticario, setBoticario] = useState(false)
    const [eudora, setEudora] = useState(false)
    const [natura, setNatura] = useState(false)

    // Similar ao componentDidMount e componentDidUpdate:
    useEffect(() =>  { _loadCustomerForUpdate() }, [])
    
    const _loadCustomerForUpdate = () => {
        if (props.customer) fillCustomerForm(props.customer)                    
    }
    
    const fillCustomerForm = (customer) => {
        set_Id(customer._id)
        setName(customer.name)
        setPhoneNumber(customer.phoneNumber)
        if (customer.preferences.includes('avon')) setAvon(true)
        if (customer.preferences.includes('boticario')) setBoticario(true)
        if (customer.preferences.includes('eudora')) setEudora(true)
        if (customer.preferences.includes('natura')) setNatura(true)            
    }
    
    const saveCustomer = () => {
      const preferences = []
      if (avon) preferences.push('avon')
      if (boticario) preferences.push('boticario')
      if (eudora) preferences.push('eudora')
      if (natura) preferences.push('natura')

      if (!phoneNumber || !name) {
        Alert.alert('Campos Obrigatórios', 'Forneça o Nome e o Telefone do cliente para um novo cadastro',  [{ text: "OK", style: "cancel" }])
        return 
      }

      const customer = { phoneNumber, name, preferences, _id }   
      const customerService = new CustomerService()
      return customerService.saveOrUpdate(customer)   
    }
    
    return (
        <ScrollView style={{margin: 10, padding: 10}}>            
            <TextInput style={{height: 30, marginTop: 10 }} type="text" autoCapitalize="true" placeholder="Nome do Cliente" value={name} onChangeText={name => setName(name)}/> 
            <PhoneInput style={{height: 30, marginTop: 10 }} textProps={{placeholder:"Número de Telefone"}} initialCountry='br' value={phoneNumber} onChangePhoneNumber={phoneNumber => setPhoneNumber(phoneNumber)}/>            
            
            <Text style={{height: 30, marginTop: 10 }} >Compra produtos:</Text>
            <Checkbox.Item label="Avon" status={avon ? 'checked' : 'unchecked'} onPress={() =>  { setAvon(!avon) }}/>
            <Checkbox.Item label="Boticário" status={boticario ? 'checked' : 'unchecked'} onPress={() =>  { setBoticario(!boticario) }}/>
            <Checkbox.Item label="Eudora" status={eudora ? 'checked' : 'unchecked'} onPress={() =>  { setEudora(!eudora) }}/>
            <Checkbox.Item label="Natura" status={natura ? 'checked' : 'unchecked'} onPress={() =>  { setNatura(!natura) }}/>

            <Button style={{marginLeft: 5, width: 100, marginTop: 10, alignItems: 'center'}} color="blue" icon="account-plus" mode="contained" onPress={() => saveCustomer()}>
               Salvar
            </Button>            
        </ScrollView>    
    )
}

export default Form