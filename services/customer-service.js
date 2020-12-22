import axios from 'axios'
import { Alert } from 'react-native'

import Configuration from './config'

const environment = 'production'
const ENDPOINT = Configuration.getEndpoint(environment) + '/customers'

const CustomerService = () => { 
    const save = (customerJson) => {
        let customer = fetch(ENDPOINT, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(customerJson)
        }).then((response) => {
            response.json()
            _doAlert('Sucesso', `Cliente ${customerJson.name} salvo com sucesso`, 'success')
        })
        .catch((error) => _doAlert('Erro', error.messages, 'error'))        
        
    }

    const search = (name, phoneNumber) => {
        let customers = []
        let customer = await fetch(ENDPOINT, {
            method: 'GET',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ filter: { name, phoneNumber } })
        })
        .then((response) => response.json())
        .then((responseJson) => {
            customers = responseJson.json()
        })
        .catch((error) => _doAlert('Erro', error.messages, 'error'))        
    }
}

function _doAlert (title, text, style) {
    Alert.alert(title, text,  [{ text: "OK", style }])
}

export default CustomerService
