import React, { useState } from 'react';
import { ScrollView } from 'react-native'
import { TextInput, Button, Checkbox, Text } from 'react-native-paper';
import PhoneInput from 'react-native-phone-input'

import CustomerService from '../../services/customer-service'
const Form = () => {
    const [phoneNumber, name, setPhoneNumber, setName] = useState('')
    const [ avon, setAvon] = useState(false)
    const [boticario, setBoticario] = useState(false)
    const [eudora, setEudora] = useState(false)
    const [natura, setNatura] = useState(false)
    
    const componentDidMount = () => {        
        console.log('mount it!');
    }

    const saveCustomer = async () => {
      const customer = {
          phoneNumber, name, preferences: [avon, boticario, eudora, natura]
      }   
      await CustomerService.save(customer)   
    }
    
    return (
        <ScrollView style={{margin: 10, padding: 10}}>            
            <PhoneInput style={{height: 30, marginTop: 10 }} placeHolder="Telefone do Cliente" defaultCountry="BR" placeholder="Número de Telefone" value={phoneNumber} onChange={setPhoneNumber}/>            
            <TextInput style={{height: 30, marginTop: 10 }} type="text" autoCapitalize="true" placeholder="Nome do Cliente" value={name} onChange={setName}/> 
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