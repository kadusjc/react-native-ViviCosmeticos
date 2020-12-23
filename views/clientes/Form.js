import React, { useState, useEffect } from 'react';

import { ScrollView } from 'react-native'
import { TextInput, Button, Checkbox, Text, Alert } from 'react-native-paper';
import PhoneInput from 'react-native-phone-input'

import CustomerService from '../../services/customer-service'
const Form = () => {
    const [phoneNumber, setPhoneNumber] = useState('')
    const [name, setName] = useState('')
    
    const [avon, setAvon] = useState(false)
    const [boticario, setBoticario] = useState(false)
    const [eudora, setEudora] = useState(false)
    const [natura, setNatura] = useState(false)
    
    // Similar ao componentDidMount e componentDidUpdate:
    useEffect(() => {
        if(this.props.customer) {
            const {customer} = this.props
            this.setName(customer.name)
            this.setPhoneNumber(customer.phoneNumber)
            if (customer.preferences.includes('Avon')) this.setAvon(true)
            if (customer.preferences.includes('Boticario')) this.setBoticario(true)
            if (customer.preferences.includes('Eudora')) this.setEudora(true)
            if (customer.preferences.includes('Natura')) this.setNatura(true)            
        }
    })

    const saveCustomer = () => {
      const preferences = []
      if (avon) preferences.push('avon')
      if (boticario) preferences.push('boticario')
      if (eudora) preferences.push('eudora')
      if (natura) preferences.push('natura')

      if (!phoneNumber || !name) {
        Alert.alert('Campos Obrigatórios', 'Forneça o Nome e o Telefone do cliente para um novo cadastro',  [{ text: "OK" }])
        return 
      }

      const customer = { phoneNumber, name, preferences }   
      const customerService = new CustomerService()
      return customerService.save(customer)   
    }
    
    return (
        <ScrollView style={{margin: 10, padding: 10}}>            
            <PhoneInput style={{height: 30, marginTop: 10 }} textProps={{placeholder:"Número de Telefone"}} initialCountry='br' value={phoneNumber} onChangePhoneNumber={phoneNumber => setPhoneNumber(phoneNumber)}/>            
            <TextInput style={{height: 30, marginTop: 10 }} type="text" autoCapitalize="true" placeholder="Nome do Cliente" defaultValue={name} onChangeText={name => setName(name)}/> 
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