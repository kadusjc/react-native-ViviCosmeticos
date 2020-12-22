import React, { useState } from 'react';
import { ScrollView } from 'react-native'
import { TextInput, Button, Checkbox, Text } from 'react-native-paper';
import PhoneInput from 'react-native-phone-input'

import CustomerService from '../../services/customer-service'
const Form = () => {
    const [phoneNumber, setPhoneNumber] = useState('')
    const [name, setName] = useState('')

    const [avon, setAvon] = useState(false)
    const [boticario, setBoticario] = useState(false)
    const [eudora, setEudora] = useState(false)
    const [natura, setNatura] = useState(false)
    
    const saveCustomer = () => {
      const preferences = []
      if (avon) preferences.push('avon')
      if (boticario) preferences.push('boticario')
      if (eudora) preferences.push('eudora')
      if (natura) preferences.push('natura')

      const customer = { phoneNumber, name, preferences }   
      const customerService = new CustomerService()
      return customerService.save(customer)   
    }
    
    return (
        <ScrollView style={{margin: 10, padding: 10}}>            
            <PhoneInput style={{height: 30, marginTop: 10 }} placeHolder="Telefone do Cliente" defaultCountry="BR" placeholder="Número de Telefone" value={phoneNumber} onChange={phoneNumber => setPhoneNumber(phoneNumber)}/>            
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