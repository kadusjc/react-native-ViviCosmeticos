import axios from 'axios'
import { Alert } from 'react-native'
import Configuration from './config'

const environment = 'production'
const ENDPOINT = Configuration.getEndpoint(environment) + '/products'

export default class ProductsService { 
    
    saveOrUpdate (productJson) {
        if (productJson._id) return this.update(productJson)
        return this.save(productJson)        
    }

    save (productJson) {
        return axios.post(ENDPOINT, productJson)
            .then(res => {
                _doAlert('Sucesso', `Produto ${productJson.name} salvo com sucesso`, 'success')
                return res.data
        })
        .catch((error) => {
            console.log('RESPONSE ERROU ', JSON.stringify(error, null, 3))
            _doAlert('Erro', error.response.data)
        })  
        
    }

    update (productJson) {
        return axios.put(ENDPOINT, productJson)
            .then(res => {
                _doAlert('Sucesso', `Produto ${productJson.name} atualizado com sucesso`, 'success')
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
    
    delete (product) {
        return axios.delete(`${ENDPOINT}/${product._id}`)
            .then(res => _doAlert('Sucesso', `Produto ${product.name} removido com sucesso`, 'success'))        
            .catch((error) => {
                console.log('RESPONSE ERROU ', JSON.stringify(error, null, 3))
                _doAlert('Erro',  error.response.data)
            })             
    }
}

function _prepareQueryParams (filter) {
    let name = filter.name || ''
    let brand = filter.brand || ''        
    let category = filter.category || ''        

    let query = ''
    if (name || brand || category) {
        query = '?'
        if (name) { query = query + `name=${name}` }
        if (category) { query = query + `category=${category}` }
        if (brand) { query = query + `brand=${brand}` }        
    }
    return query      
}

function _doAlert (title, text) {
    Alert.alert(title, text,  [{ text: "OK", style: 'cancel' }])
}
