import axios from 'axios'
import { Alert } from 'react-native'
import Configuration from './config'

const environment = 'production'
const ENDPOINT = Configuration.getEndpoint(environment) + '/customers'

export default class CustomerService { 
    save (customerJson) {
        console.log('CHEOGU CUSTOMER JSON ', JSON.stringify(customerJson, null, 3))
        return axios.post(ENDPOINT, customerJson)
            .then(res => {
                _doAlert('Sucesso', `Cliente ${customerJson.name} salvo com sucesso`, 'success')
                return res.data
        })
        .catch((error) => {
            console.log('RESPONSE ERROU ', JSON.stringify(error, null, 3))
            _doAlert('Erro', error.messages, 'error')
        })  
        
    }

    search (filter = {}) {
        const query = _prepareQueryParams(filter)        
        return axios.get(ENDPOINT + query)
          .then(res => {
              console.log('RES Data ', JSON.stringify(res.data, null, 3))
              return res.data
          })
          .catch((error) => _doAlert('Erro', error.messages, 'error'))  
    }      
}

function _prepareQueryParams (filter) {
    let name = filter.name || ''
    let phoneNumber = filter.phoneNumber || ''        

    const params = {}
    if (name) params.name = name
    if (phoneNumber) params.phoneNumber = phoneNumber

    let query = ''
    if (name || phoneNumber) {
        query = Object.keys(params)
                   .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
                   .join('&')
        console.log('QUERY ', query)               
        query = '?' + query
    }
    return query      
}

function _doAlert (title, text, style) {
    Alert.alert(title, text,  [{ text: "OK", style }])
}
