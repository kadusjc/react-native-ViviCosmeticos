import axios from 'axios'
import { Alert } from 'react-native'
import Configuration from './config'

const environment = 'production'
const ENDPOINT = Configuration.getEndpoint(environment) + '/customers'

export default class CustomerService { 
    
    saveOrUpdate (customerJson) {
        if (customerJson._id) return this.update(customerJson)
        return this.save(customerJson)        
    }

    save (customerJson) {
        return axios.post(ENDPOINT, customerJson)
            .then(res => {
                _doAlert('Sucesso', `Cliente ${customerJson.name} salvo com sucesso`, 'success')
                return res.data
        })
        .catch((error) => {
            console.log('RESPONSE ERROU ', JSON.stringify(error, null, 3))
            _doAlert('Erro', error.response.data)
        })  
        
    }

    update (customerJson) {
        return axios.put(ENDPOINT, customerJson)
            .then(res => {
                _doAlert('Sucesso', `Cliente ${customerJson.name} atualizado com sucesso`, 'success')
                return res.data
        })
        .catch((error) => {
            console.log('RESPONSE ERROU ', JSON.stringify(error, null, 3))
            _doAlert('Erro', error.response.data)
        })  
        
    }

    search (filter = {}) {
        const query = _prepareQueryParams(filter)      
        console.log('QUERY ', query)  
        return axios.get(ENDPOINT + query)
          .then(res => {
              console.log('RES Data ', JSON.stringify(res.data, null, 3))
              return res.data
          })
          .catch((error) => _doAlert('Erro', error.response.data))  
    }
    
    delete (customer) {
        return axios.delete(`${ENDPOINT}/${customer._id}`)
            .then(res => _doAlert('Sucesso', `Cliente ${customer.name} removido com sucesso`, 'success'))        
            .catch((error) => {
                console.log('RESPONSE ERROU ', JSON.stringify(error, null, 3))
                _doAlert('Erro',  error.response.data)
            })             
    }
}

function _prepareQueryParams (filter) {
    let name = filter.name || ''
    let phoneNumber = filter.phoneNumber || ''        

    let query = ''
    if (name || phoneNumber) {
        query = '?'
        if (name) { query = query + `name=${name}` }
        if (phoneNumber) { query = query + `phoneNumber=${phoneNumber}` }        
    }
    return query      
}

function _doAlert (title, text) {
    Alert.alert(title, text,  [{ text: "OK", style: 'cancel' }])
}
